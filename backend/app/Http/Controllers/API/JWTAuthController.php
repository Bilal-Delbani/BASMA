<?php

namespace App\Http\Controllers\API;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Facade;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Support\Facades\Http;

use Illuminate\Support\Facades\Log;

class JWTAuthController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    use ApiResponsetrait;
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|between:1,100',
            'email' => 'required|email|unique:users|max:50',
            'password' => 'required|string|min:8|regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/',

        ], [
            'password.regex' => 'The password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.',
        ]);

    
        $user = User::create(array_merge(
                    $validator->validated(),
                    ['password' => bcrypt($request->password)]
                ));

        $token = JWTAuth::fromUser($user);


        return response()->json([
            'message' => 'Successfully registered',
            'user' => $user,
            'token' => $token
        ], 201);
    }


    public function login(Request $request)
    {


        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:8',
            'recaptcha' => 'required'
        ]);

        $recaptchaSecret = env('RECAPTCHA_SECRET');

        $recaptchaResponse = $request->input('recaptcha');

        $response = Http::asForm()->post("https://www.google.com/recaptcha/api/siteverify", [
            'secret' => $recaptchaSecret,
            'response' => $recaptchaResponse
        ]);
    


        if (!$response->json()['success']) {
            return response()->json(['recaptcha' => 'Invalid ReCaptcha'], 422);
        }

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        $credentials = $request->only('email', 'password');
        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        return $this->createNewToken($token);
    }


    
    public function logout()
    {
        auth()->logout(true);
        return response()->json([
            'message' => 'Successfully logged out']);
    }


    public function refresh()
    {
        return $this->createNewToken(auth()->refresh());
    }

    protected function createNewToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user()
        ]);
    }

}


