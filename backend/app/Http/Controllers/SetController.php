<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Set;

class SetController extends Controller
{
    public function get(Request $request, int $id)
    {
        $set = Set::Find($id);
        return response()->json([
            "success" => true,
            "set" => $set
        ]);
    }

    public function get_words(Request $request, int $id)
    {
        $set = Set::Find($id);
        return response()->json([
           "success" => true,
           "set" => $set,
           "words" => $set->words
        ]);
    }
}
