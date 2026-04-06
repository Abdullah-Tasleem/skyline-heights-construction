<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    // This method will return latest active projects with limit
    public function latestProjects(Request $request)
    {
        $projects = Project::where('status', 1)
            ->orderBy('created_at', 'DESC')
            ->take($request->get('limit'))
            ->get();

        return response()->json([
            'status' => true,
            'data' => $projects
        ]);
    }
    public function allProjects(){
          $projects = Project::where('status', 1)
            ->orderBy('created_at', 'DESC')
            ->get();

        return response()->json([
            'status' => true,
            'data' => $projects
        ]);
    }
     public function project($id)
    {
        $project = Project::find($id);
        if($project == null){
            return response()->json([
                'status' => false,
                'message' => 'Project not found'
            ]);
        }

        return response()->json([
            'status' => true,
            'data' => $project
        ]);
    }
}
