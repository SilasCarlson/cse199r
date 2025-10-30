<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function __invoke(Request $request)
    {
        $credentials = $request->validate([
            "email" => ["email", "required"],
            "password" => ["required"]
        ]);
        $remember = $request->filled("remember");

        if (Auth::attempt($credentials, $remember))
        {
            $request->session()->regenerate();
            return redirect()->route("home")->with("success", "You have successfully logged in");
        }

        return back()->withErrors([
            "email" => "The provided credentials do not match our records"
        ])->onlyInput("email");
    }
}
