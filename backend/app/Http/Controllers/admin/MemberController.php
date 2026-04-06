<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Member;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class MemberController extends Controller
{
    public function index()
    {
        $members = Member::orderBy('created_at', 'DESC')->get();
        return response()->json([
            'status' => true,
            'data'   => $members
        ]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'      => 'required',
            'job_title' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ]);
        }

        $member               = new Member();
        $member->name         = $request->name;
        $member->job_title    = $request->job_title;
        $member->linkedin_url = $request->linkedin_url ?? '';
        $member->status       = $request->status ?? 1;
        $member->save();

        if ($request->imageId > 0) {
            $tempImage = TempImage::find($request->imageId);
            if ($tempImage) {
                $ext      = last(explode('.', $tempImage->name));
                $fileName = strtotime('now') . $member->id . '.' . $ext;
                $manager  = new ImageManager(Driver::class);
                $source   = public_path('uploads/temp/' . $tempImage->name);

                $image = $manager->read($source);
                $image->coverDown(200, 200);
                $image->save(public_path('uploads/members/small/' . $fileName));

                $image = $manager->read($source);
                $image->scaleDown(600);
                $image->save(public_path('uploads/members/large/' . $fileName));

                $member->image = $fileName;
                $member->save();
            }
        }

        return response()->json([
            'status'  => true,
            'message' => 'Member added successfully.'
        ]);
    }

    public function show($id)
    {
        $member = Member::find($id);

        if (!$member) {
            return response()->json([
                'status'  => false,
                'message' => 'Member not found'
            ]);
        }

        return response()->json([
            'status' => true,
            'data'   => $member
        ]);
    }

    public function update($id, Request $request)
    {
        $member = Member::find($id);

        if (!$member) {
            return response()->json([
                'status'  => false,
                'message' => 'Member not found'
            ]);
        }

        $validator = Validator::make($request->all(), [
            'name'      => 'required',
            'job_title' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ]);
        }

        $member->name         = $request->name;
        $member->job_title    = $request->job_title;
        $member->linkedin_url = $request->linkedin_url ?? '';
        $member->status       = $request->status ?? 1;
        $member->save();

        if ($request->imageId > 0) {
            $oldImage  = $member->image;
            $tempImage = TempImage::find($request->imageId);

            if ($tempImage) {
                if ($oldImage) {
                    File::delete(public_path('uploads/members/small/' . $oldImage));
                    File::delete(public_path('uploads/members/large/' . $oldImage));
                }

                $ext      = last(explode('.', $tempImage->name));
                $fileName = strtotime('now') . $member->id . '.' . $ext;
                $manager  = new ImageManager(Driver::class);
                $source   = public_path('uploads/temp/' . $tempImage->name);

                $image = $manager->read($source);
                $image->coverDown(200, 200);
                $image->save(public_path('uploads/members/small/' . $fileName));

                $image = $manager->read($source);
                $image->scaleDown(600);
                $image->save(public_path('uploads/members/large/' . $fileName));

                $member->image = $fileName;
                $member->save();
            }
        }

        return response()->json([
            'status'  => true,
            'message' => 'Member updated successfully.'
        ]);
    }

    public function destroy($id)
    {
        $member = Member::find($id);

        if (!$member) {
            return response()->json([
                'status'  => false,
                'message' => 'Member not found'
            ]);
        }

        File::delete(public_path('uploads/members/small/' . $member->image));
        File::delete(public_path('uploads/members/large/' . $member->image));
        $member->delete();

        return response()->json([
            'status'  => true,
            'message' => 'Member deleted successfully.'
        ]);
    }
}
