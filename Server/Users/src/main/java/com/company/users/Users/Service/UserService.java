package com.company.users.Users.Service;

import com.company.users.Users.repository.userRepository;
import com.company.users.Users.userModel.Users;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    userRepository userRepo;

    public List<Users> getAllUsers()
    {
        List<Users> users = new ArrayList<>();
        userRepo.findAll().forEach(users::add);
        return users;
    }

    public Optional<Users> getUsersInfo(String email)
    {
        return userRepo.findById(email);
    }

    public Users addNewUser(Users newUser)
    {
        userRepo.save(newUser);
        return newUser;
    }






}
