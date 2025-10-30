<?php

namespace App\Http\Controllers;

use App\Models\Sets;
use Illuminate\Http\Request;

class SetsController extends Controller
{
    public function index(Request $request, int $id)
    {
        $set = Sets::find($id);
        return view("set")->with("set", $set);
    }

    public function all()
    {
        $sets = Sets::all();
        return view("sets")->with("sets", $sets);
    }
}
