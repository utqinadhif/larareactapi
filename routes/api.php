<?php

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\Rule;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
Route::post('/login', function (Request $request) {
    $credentials = $request->validate([
        'email' => ['required', 'email'],
        'password' => ['required'],
    ]);

    if (auth()->attempt($credentials)) {
        $user = auth()->user();

        return (new UserResource($user))->additional([
            'token' => $user->createToken('myAppToken')->plainTextToken,
        ]);
    }

    return response()->json([
        'message' => 'Your credential does not match.',
    ], 401);
});

Route::post('/register', function (Request $request) {
    $credentials = $request->validate([
        'name' => ['required', 'string', 'max:255'],
        'email' => ['required', 'string', 'email', 'max:255', Rule::unique(User::class),],
        'password' => ['required', 'min:8'],
    ]);

    $user = User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password)
    ]);

    $token = $user->createToken('myAppToken');

    return (new UserResource($user))->additional([
        'token' => $token->plainTextToken,
    ]);
});
