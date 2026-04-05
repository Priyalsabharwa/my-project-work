package com.example.rbac.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @GetMapping("/profile")
    public String userProfile() { return "Welcome USER! You have successfully accessed a protected USER endpoint."; }
}