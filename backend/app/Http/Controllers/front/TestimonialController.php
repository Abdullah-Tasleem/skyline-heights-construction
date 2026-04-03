<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use Illuminate\Http\Request;

class TestimonialController extends Controller
{
    public function index()
    {
        $testimonials = Testimonial::where('status', 1)
            ->orderBy('created_at', 'DESC')
            ->get();

        return response()->json([
            'status' => true,
            'data' => $testimonials
        ]);
    }

    public function latestTestimonials(Request $request)
    {
        $limit = $request->get('limit', 5); // default 5

        $testimonials = Testimonial::where('status', 1)
            ->orderBy('created_at', 'DESC')
            ->take($limit)
            ->get();

        return response()->json([
            'status' => true,
            'data' => $testimonials
        ]);
    }
}
