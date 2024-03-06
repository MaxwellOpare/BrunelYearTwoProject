package com.group42.energy.EnergyProvider;


import com.group42.energy.User.User;

public class EnergyProviderMapper {
    public static EnergyProviderDto mapToEnergyProviderDto(EnergyProvider energyProvider) {
        return new EnergyProviderDto(
                energyProvider.getEnergyProviderId(),
                energyProvider.getName(),
                energyProvider.getEmail(),
                energyProvider.getContactNumber(),
                energyProvider.getAddress(),
               energyProvider.getUsers()
        );
    }

    public static EnergyProvider mapToEnergyProvider(EnergyProviderDto energyProviderDto) {
//        return new EnergyProvider(
//                energyProviderDto.getEnergyProviderId(),
//                energyProviderDto.getName(),
//                energyProviderDto.getEmail(),
//                energyProviderDto.getContactNumber(),
//                energyProviderDto.getAddress(),
//                energyProviderDto.getUsers()
//        );
        EnergyProvider energyProvider = new EnergyProvider();
        energyProvider.setEnergyProviderId(energyProviderDto.getEnergyProviderId());
        energyProvider.setName(energyProviderDto.getName());
        energyProvider.setEmail(energyProviderDto.getEmail());
        energyProvider.setContactNumber(energyProviderDto.getContactNumber());
        energyProvider.setAddress(energyProviderDto.getAddress());
        energyProvider.setUsers(energyProviderDto.getUsers());

        return energyProvider;
    }
}
