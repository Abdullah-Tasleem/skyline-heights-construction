<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class TestimonialController extends Controller
{
    public function index()
    {
        $testimonials = Testimonial::orderBy('created_at', 'DESC')->get();
        return response()->json([
            'status' => true,
            'data' => $testimonials
        ]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'testimonial' => 'required',
            'citation'    => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ]);
        }

        $testimonial = new Testimonial();
        $testimonial->testimonial = $request->testimonial;
        $testimonial->citation    = $request->citation;
        $testimonial->status      = $request->status ?? 1;
        $testimonial->save();

        // Save Temp Image
        if ($request->imageId > 0) {
            $tempImage = TempImage::find($request->imageId);
            if ($tempImage != null) {
                $extArray = explode('.', $tempImage->name);
                $ext      = last($extArray);
                $fileName = strtotime('now') . $testimonial->id . '.' . $ext;

                $manager = new ImageManager(Driver::class);

                // Small thumbnail
                $sourcePath = public_path('uploads/temp/' . $tempImage->name);
                $destPath   = public_path('uploads/testimonials/small/' . $fileName);
                $image      = $manager->read($sourcePath);
                $image->coverDown(200, 200);
                $image->save($destPath);

                // Large thumbnail
                $destPath = public_path('uploads/testimonials/large/' . $fileName);
                $image    = $manager->read($sourcePath);
                $image->scaleDown(600);
                $image->save($destPath);

                $testimonial->image = $fileName;
                $testimonial->save();
            }
        }

        return response()->json([
            'status'  => true,
            'message' => 'Testimonial added successfully.'
        ]);
    }

    public function update($id, Request $request)
    {
        $testimonial = Testimonial::find($id);

        if (!$testimonial) {
            return response()->json([
                'status'  => false,
                'message' => 'Testimonial not found'
            ]);
        }

        $validator = Validator::make($request->all(), [
            'testimonial' => 'required',
            'citation'    => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ]);
        }

        $testimonial->testimonial = $request->testimonial;
        $testimonial->citation    = $request->citation;
        $testimonial->status      = $request->status ?? 1;
        $testimonial->save();

        // Update Image
        if ($request->imageId > 0) {
            $oldImage  = $testimonial->image;
            $tempImage = TempImage::find($request->imageId);

            if ($tempImage != null) {
                // Delete old images
                if ($testimonial->image != '') {
                    File::delete(public_path('uploads/testimonials/small/' . $testimonial->image));
                    File::delete(public_path('uploads/testimonials/large/' . $testimonial->image));
                }

                $extArray = explode('.', $tempImage->name);
                $ext      = last($extArray);
                $fileName = strtotime('now') . $testimonial->id . '.' . $ext;

                $manager = new ImageManager(Driver::class);

                // Small image
                $sourcePath = public_path('uploads/temp/' . $tempImage->name);
                $destPath   = public_path('uploads/testimonials/small/' . $fileName);
                $image      = $manager->read($sourcePath);
                $image->coverDown(200, 200);
                $image->save($destPath);

                // Large image
                $destPath = public_path('uploads/testimonials/large/' . $fileName);
                $image    = $manager->read($sourcePath);
                $image->scaleDown(600);
                $image->save($destPath);

                $testimonial->image = $fileName;
                $testimonial->save();

                if ($oldImage != '') {
                    File::delete(public_path('uploads/testimonials/large/' . $oldImage));
                    File::delete(public_path('uploads/testimonials/small/' . $oldImage));
                }
            }
        }

        return response()->json([
            'status'  => true,
            'message' => 'Testimonial updated successfully.'
        ]);
    }

    public function show($id)
    {
        $testimonial = Testimonial::find($id);

        if ($testimonial == null) {
            return response()->json([
                'status'  => false,
                'message' => 'Testimonial not found'
            ]);
        }

        return response()->json([
            'status' => true,
            'data'   => $testimonial
        ]);
    }

    public function destroy($id)
    {
        $testimonial = Testimonial::find($id);

        if ($testimonial == null) {
            return response()->json([
                'status'  => false,
                'message' => 'Testimonial not found'
            ]);
        }

        File::delete(public_path('uploads/testimonials/large/' . $testimonial->image));
        File::delete(public_path('uploads/testimonials/small/' . $testimonial->image));
        $testimonial->delete();

        return response()->json([
            'status'  => true,
            'message' => 'Testimonial deleted successfully'
        ]);
    }
}
