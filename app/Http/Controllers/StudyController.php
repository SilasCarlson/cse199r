<?php

namespace App\Http\Controllers;

use App\Models\Set;
use Illuminate\Http\Request;

class StudyController extends Controller
{
    public function index(Request $request, int $set_id)
    {
        $set = Set::find($set_id);
        $words = $set->words;
        return view("study")->with("set", $set)->with("words", $words);
    }
}
