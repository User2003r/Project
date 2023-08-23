package com.company.users.Users.userModel;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "users")
public class Users {
    @Column(name = "name")
   private String name;
    @Id
    @Column(name = "email")
   private String email;
    @Column(name = "username")
   private String username;
    @Column(name = "password")
   private String password;

   public Users(){};
   public Users(String username,String password,String name,String email)
   {
       this.username = username;
       this.password = password;
       this.email = email;
       this.name  = name;
   }

    public void setName(String name) {
        this.name = name;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }
}
