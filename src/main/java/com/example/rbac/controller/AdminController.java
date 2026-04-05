package com.example.rbac.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
    @GetMapping("/dashboard")
    public String adminDashboard() { return "Welcome ADMIN! This is the highly secured ADMIN DASHBOARD."; }
}