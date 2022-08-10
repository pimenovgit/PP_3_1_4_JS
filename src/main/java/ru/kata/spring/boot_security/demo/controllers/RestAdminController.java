package ru.kata.spring.boot_security.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.models.Role;
import ru.kata.spring.boot_security.demo.models.User;
import ru.kata.spring.boot_security.demo.services.RoleService;
import ru.kata.spring.boot_security.demo.services.UserService;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api")
class RestAdminController {

    @Autowired
    private UserService userService;
    @Autowired
    private RoleService roleService;

    @GetMapping("/user")
    public ResponseEntity<User> userInfo(Principal principal) {
        return new ResponseEntity<>(userService.findUserByEmail(principal.getName()), HttpStatus.OK);
    }

    @GetMapping("/admin")
    public ResponseEntity<List<User>> getAllUsers() {
        return new ResponseEntity<>(userService.getAllUsers(), HttpStatus.OK);

    }


    @GetMapping("/admin/{id}")
    public ResponseEntity<User> getUserId(@PathVariable("id") Long id) {
        User user = userService.getUserId(id);
        return user != null
                ? new ResponseEntity<>(user, HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/admin/create")
    public ResponseEntity<HttpStatus> createUser(@RequestBody User user){
        userService.saveUser(user);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/admin/update/{id}")
    public ResponseEntity<HttpStatus> updateUser(@RequestBody User user, String role) {
        user.setRoles(roleService.findRolesByName(role));
        userService.updateUser(user);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/admin/delete/{id}")
    public ResponseEntity<HttpStatus> deleteUser(@PathVariable("id") Long id) {
        userService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/roles")
    public List<Role> getRoles() {
        List<Role> roles = roleService.getAllRoles();
        return roles;
    }
}
