package ru.kata.spring.boot_security.demo.services;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import ru.kata.spring.boot_security.demo.models.Role;
import ru.kata.spring.boot_security.demo.models.User;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

public interface UserService extends UserDetailsService {
    public boolean saveUser(User user);
    public void updateUser(User user);

    public void deleteById(Long id);

    public User getUserId(Long id);

    public List<User> getAllUsers();

    User findUserByEmail(String email);
}
