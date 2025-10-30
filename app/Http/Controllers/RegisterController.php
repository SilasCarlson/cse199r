<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function __invoke(Request $request)
    {
        $credentials = $request->validate([
            "email" => ["required", "email", "unique:users", "max:255"],
            "name" => ["required", "unique:users", "max:255"],
            "password" => ["required", "string", "min:8", "confirmed"]
        ]);

        $user = User::create([
            "email" => $credentials["email"],
            "name" => $credentials["name"],
            "password" => Hash::make($credentials["password"])
        ]);

        // Log the user in
        Auth::login($user);

        // Redirect to home
        return redirect()->route("home")->with("success", "You have successfully logged in");
    }
}
