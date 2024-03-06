package com.group42.energy.User;

import com.group42.energy.EnergyProvider.EnergyProvider;
import com.group42.energy.EnergyProvider.EnergyProviderRepo;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UserServiceImplementation implements  UserService{
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EnergyProviderRepo energyProviderRepo;

    @Override
    public UserDto createUser(UserDto userDto) {
        User user = UserMapper.mapToUser(userDto);

        EnergyProvider energyProvider = energyProviderRepo.findById(userDto.getProviderId())
                .orElseThrow(()-> new IllegalStateException("Department was not found with id: "
                        + userDto.getProviderId()));
        user.setEnergyProvider(energyProvider);
        User savedUser =  userRepository.save(user);
        return UserMapper.mapToUserDto(savedUser);
    }

    @Override
    public UserDto getUserById(Long userId) {
        User user = userRepository.findById(userId).orElseThrow(()->
                new IllegalStateException("Student was not found with given id: " + userId));
        return UserMapper.mapToUserDto(user);
    }

    @Override
//    public List<User> getAllUsers() {
//        return userRepository.findAll();
//    }
    public List<UserDto> getAllUsers() {

        List<User> userList =  userRepository.findAll();
        return userList.stream()
                .map(UserMapper::mapToUserDto)
                .collect(Collectors.toList());
    }

    @Override
    public UserDto updateUser(Long userId, UserDto userDto) {
        User user = userRepository.findById(userId).orElseThrow(()->
                new IllegalStateException("Student was not found with given id: " + userId));

        user.setFirstName(userDto.getFirstName());
        user.setSurName(userDto.getSurName());
        user.setEmail(userDto.getEmail());
        user.setAddress(userDto.getAddress());

        EnergyProvider energyProvider = energyProviderRepo.findById(userDto.getProviderId())
                .orElseThrow(()-> new IllegalStateException("Department was not found with id: "
                        + userDto.getProviderId()));
        user.setEnergyProvider(energyProvider);

        User savedUser = userRepository.save(user);
        return UserMapper.mapToUserDto(savedUser);
    }

    @Override
    public void deleteUser(Long userId) {
        User user = userRepository.findById(userId).orElseThrow(()->
                new IllegalStateException("Student was not found with given id: " + userId));
        userRepository.deleteById(userId);
    }


}
