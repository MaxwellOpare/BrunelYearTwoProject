package com.group42.energy.User;



    public class UserMapper {
        public static UserDto mapToUserDto(User user) {
            return new UserDto(
                    user.getUserId(),
                    user.getFirstName(),
                    user.getSurName(),
                    user.getEmail(),
                    user.getAddress(),
                    user.getEnergyProvider().getEnergyProviderId()
            );
        }

        public static User mapToUser(UserDto userDto) {
//        return new Student(
//          studentDto.getId(),
//          studentDto.getFirstName(),
//          studentDto.getLastName(),
//          studentDto.getEmail()
//        );
            User user = new User();
            user.setUserId(userDto.getUserId());
            user.setFirstName(userDto.getFirstName());
            user.setSurName(userDto.getSurName());
            user.setEmail(userDto.getEmail());
            user.setAddress(userDto.getAddress());
            return user;
        }
    }

