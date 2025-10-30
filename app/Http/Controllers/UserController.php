<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use \App\Models\User;

class UserController extends Controller
{
    public function index(Request $request, int $id)
    {
        $user = User::find($id);
        return view("user")->with("user", $user);
    }

    public function logout()
    {
        Auth::logout();
        return redirect()->route("home");
    }
}
