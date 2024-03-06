package com.group42.energy.EnergyProvider;

import com.group42.energy.User.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EnergyProviderDto {
    private Long energyProviderId;
    private String name;
    private String address;
    private String email;
    private String contactNumber;
    private List<User> users = new ArrayList<>();
}
