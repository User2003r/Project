package com.company.users.Users.Controller;

import com.company.users.Users.Service.UserService;
import com.company.users.Users.userModel.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.env.OriginTrackedMapPropertySource;
import org.springframework.boot.origin.Origin;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
public class UserController {
    @Autowired
    UserService user;

    @RequestMapping(method = RequestMethod.GET,value = "/users")
    public List<Users> getAllUsers()
    {
        return user.getAllUsers();

    }

    @RequestMapping(method = RequestMethod.GET,value = "/users/{email}")
    public Optional<Users> getUsersInfo(@PathVariable String email)
    {
        return user.getUsersInfo(email);

    }

    @RequestMapping(method = RequestMethod.POST,value = "/users")
    public Users addNewUser(@RequestBody Users newUser)
    {
        return user.addNewUser(newUser);
    }

}
