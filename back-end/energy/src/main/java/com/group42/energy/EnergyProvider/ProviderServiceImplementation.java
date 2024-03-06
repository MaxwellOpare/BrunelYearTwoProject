package com.group42.energy.EnergyProvider;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ProviderServiceImplementation implements EnergyProviderService{

    @Autowired
    private EnergyProviderRepo energyProviderRepo;

    @Override
    public EnergyProviderDto createEnergyProvider(EnergyProviderDto energyProviderDto) {
        EnergyProvider energyProvider = EnergyProviderMapper.mapToEnergyProvider(energyProviderDto);
        EnergyProvider savedEnergyProvider = energyProviderRepo.save(energyProvider);
        return EnergyProviderMapper.mapToEnergyProviderDto(savedEnergyProvider);
    }
    @Override
    public EnergyProviderDto getEnergyProviderById(Long energyProviderId) {
        EnergyProvider energyProvider = energyProviderRepo.findById(energyProviderId)
                .orElseThrow(()-> new IllegalStateException("Department was not found with id: " + energyProviderId));
        return EnergyProviderMapper.mapToEnergyProviderDto(energyProvider);
    }

    @Override
    public List<EnergyProviderDto> getAllEnergyProviders() {
        return energyProviderRepo.findAll()
                .stream().map(EnergyProviderMapper::mapToEnergyProviderDto)
                .collect(Collectors.toList());
    }

    @Override
    public EnergyProviderDto updateEnergyProvider(Long energyProviderId, EnergyProviderDto energyProviderDto) {
        EnergyProvider energyProvider = energyProviderRepo.findById(energyProviderId)
                .orElseThrow(()-> new IllegalStateException("Department was not found with id: " + energyProviderId));
        energyProvider.setName(energyProviderDto.getName());
        energyProvider.setEmail(energyProviderDto.getEmail());
        energyProvider.setContactNumber(energyProviderDto.getContactNumber());
        energyProvider.setAddress(energyProviderDto.getAddress());
        EnergyProvider updatedEnergyProvider = energyProviderRepo.save(energyProvider);
        return EnergyProviderMapper.mapToEnergyProviderDto(updatedEnergyProvider);
    }

    @Override
    public void deleteEnergyProvider(Long energyProviderId) {
        EnergyProvider energyProvider = energyProviderRepo.findById(energyProviderId)
                .orElseThrow(()-> new IllegalStateException("Department was not found with id: " + energyProviderId));
        energyProviderRepo.deleteById(energyProviderId);
    }
}
