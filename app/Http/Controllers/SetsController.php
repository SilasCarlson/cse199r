<?php

namespace App\Http\Controllers;

use App\Models\Set;
use Illuminate\Http\Request;

class SetsController extends Controller
{
    public function index(Request $request, int $id)
    {
        $set = Set::find($id);
        $words = $set->words;
        return view("set")->with("set", $set)->with("words", $words);
    }

    public function all()
    {
        $sets = Set::all();
        return view("sets")->with("sets", $sets);
    }
}
