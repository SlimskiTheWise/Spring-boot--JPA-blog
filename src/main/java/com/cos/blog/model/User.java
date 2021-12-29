package com.cos.blog.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false,length=100, unique = true)
    private String username;

    @Column( length=100)
    private String password;

    @Column(nullable = false,length = 50)
    private String email;

    @Enumerated(EnumType.STRING)
    private RoleType role;

    private String oauth;

    @CreationTimestamp
    private Timestamp createDate;
}