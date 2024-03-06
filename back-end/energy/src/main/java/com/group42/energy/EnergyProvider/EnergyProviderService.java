package com.group42.energy.EnergyProvider;

import org.springframework.stereotype.Service;

import java.util.List;


public interface EnergyProviderService {
    EnergyProviderDto createEnergyProvider(EnergyProviderDto energyProviderDto);
    EnergyProviderDto getEnergyProviderById(Long energyProviderId);
    List<EnergyProviderDto> getAllEnergyProviders();
    EnergyProviderDto updateEnergyProvider(Long energyProviderId, EnergyProviderDto energyProviderDto);
    void deleteEnergyProvider(Long energyProviderId);
}
