package com.group42.energy.User;

import com.group42.energy.EnergyProvider.EnergyProvider;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private Long UserId;
    private String firstName;
    private String surName;
    private String email;
    private String address;
    private Long providerId ;

//    public void getEnergyProviderId(Long energyProviderId) {
//    }
}
