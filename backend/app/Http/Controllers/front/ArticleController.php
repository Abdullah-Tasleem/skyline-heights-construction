<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
     public function index()
    {
        $articles = Article::where('status', 1)->orderby('created_at', 'DESC')->get();
        return response()->json([
            'status' => true,
            'data' => $articles
        ]);
        return $articles;
    }
    //This method will return latest active articles
    public function latestArticles(Request $request)
    {
        $articles = Article::where('status', 1)
            ->take($request->get('limit'))
            ->orderby('created_at', 'DESC')->get();
        return response()->json([
            'status' => true,
            'data' => $articles
        ]);
    }

     public function article($id)
    {
        $article = Article::find($id);
        if($article == null){
            return response()->json([
                'status' => false,
                'message' => 'Article not found'
            ]);
        }
        return response()->json([
            'status' => true,
            'data' => $article
        ]);
    }
}
