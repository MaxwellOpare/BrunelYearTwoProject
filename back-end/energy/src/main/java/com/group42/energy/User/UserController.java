package com.group42.energy.User;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
@AllArgsConstructor
public class UserController {


    @Autowired
    private UserService userService;

    @GetMapping("/get")
    public ResponseEntity<List<UserDto>> getAllUsers() {
        List<UserDto> userDtoList =  userService.getAllUsers();
        return new ResponseEntity<>(userDtoList, HttpStatus.OK);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<UserDto> getUseById(@PathVariable("id") Long userId) {
        UserDto userDto = userService.getUserById(userId);
        return new ResponseEntity<>(userDto, HttpStatus.OK);
    }


    @PostMapping("/add")
    public ResponseEntity<UserDto> createUse(@RequestBody UserDto userDto) {
        UserDto newUser =  userService.createUser(userDto);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }


    @PutMapping("/add/{id}")
    public ResponseEntity<UserDto> updateUser(@PathVariable("id") Long userId,
                                                          @RequestBody UserDto userDto) {
        UserDto updatedUser = userService.updateUser(userId, userDto);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }



    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") Long userId) {
        userService.deleteUser(userId);
        return new ResponseEntity<>("Delete User Successfully", HttpStatus.OK);
    }



}
