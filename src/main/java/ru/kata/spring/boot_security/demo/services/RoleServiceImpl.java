package ru.kata.spring.boot_security.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import ru.kata.spring.boot_security.demo.models.Role;
import ru.kata.spring.boot_security.demo.models.User;
import ru.kata.spring.boot_security.demo.repository.RoleRepository;

import java.util.List;

public class RoleServiceImpl implements RoleService{

    @Autowired
    private RoleRepository roleRepository;


    @Override
    public List<Role> getAllRoles() {
        return roleRepository.findAll();

    }
}
