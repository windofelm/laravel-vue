<?php

namespace App\Classes;

class FooClass extends BaseClass{

    public function sample(){
        return "FooClass sample method called.<br>";
    }

    public static function staticMethod(){
        return "FooClass staticMethod called.<br>";
    }
}