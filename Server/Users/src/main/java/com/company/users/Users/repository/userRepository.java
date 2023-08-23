package com.company.users.Users.repository;

import com.company.users.Users.userModel.Users;
import org.springframework.data.repository.CrudRepository;

public interface userRepository extends CrudRepository<Users,String> {
}
