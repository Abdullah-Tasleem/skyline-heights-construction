<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\Member;
use Illuminate\Http\Request;

class MemberController extends Controller
{
    public function index()
    {
        $members = Member::where('status', 1)
            ->orderBy('created_at', 'DESC')
            ->get();

        return response()->json([
            'status' => true,
            'data'   => $members
        ]);
    }

    public function latestMembers(Request $request)
    {
        $limit = $request->get('limit', 4);

        $members = Member::where('status', 1)
            ->orderBy('created_at', 'DESC')
            ->take($limit)
            ->get();

        return response()->json([
            'status' => true,
            'data'   => $members
        ]);
    }
}
