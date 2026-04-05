package com.example.rbac.repository;

import com.example.rbac.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

// JpaRepository hume database se save, delete aur find karne ke methods deta hai
public interface UserRepository extends JpaRepository<User, Long> {

    // Custom method: Isse hum username ke basis par user ko database mein dhoondhenge
    Optional<User> findByUsername(String username);
}