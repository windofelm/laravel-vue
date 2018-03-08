<?php

namespace App\Http\Controllers;

use App\Classes\BaseClass;
use App\Classes\FooClass;

use App\User;

class SampleController extends Controller{

    public function index(){

        $base = new BaseClass();
        $foo = new FooClass();
        echo $foo->sample();
        echo $foo->staticMethod();
    }
    
    public function users()
    {
        $users = User::get();
        return response()->json($users);
    }
}