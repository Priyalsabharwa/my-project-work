package com.example.rbac.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/public")
public class PublicController {
    @GetMapping("/hello")
    public String hello() { return "This is a PUBLIC endpoint. No login required!"; }
}