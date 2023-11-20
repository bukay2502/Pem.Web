<?php

namespace Controller;

class Controller
{
    var $controllerName;
    var $controllerMethod;

    function getControllerAttribute()
    {
        return [
            "ControllerName" => $this->controllerName,
            "Method" => $this->controllerMethod
        ];
    }
}