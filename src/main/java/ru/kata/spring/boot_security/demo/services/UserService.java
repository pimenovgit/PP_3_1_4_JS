package ru.kata.spring.boot_security.demo.services;

import org.springframework.security.core.userdetails.UserDetailsService;
import ru.kata.spring.boot_security.demo.models.User;

import java.util.List;

public interface UserService extends UserDetailsService {
    public void saveUser(User user);
    public void updateUser(User user);

    public void deleteById(Long id);

    public User getUserId(Long id);

    public List<User> getAllUsers();

    User findUserByEmail(String email);
}
