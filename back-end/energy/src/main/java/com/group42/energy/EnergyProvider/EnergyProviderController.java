package com.group42.energy.EnergyProvider;



import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/energyProvider")
@AllArgsConstructor
public class EnergyProviderController {
    @Autowired
    final EnergyProviderService energyProviderService;

    @Autowired
    EnergyProviderRepo energyProviderRepo;

    @Autowired
    public EnergyProviderController(EnergyProviderService energyProviderService) {
        this.energyProviderService = energyProviderService;
    }

    @GetMapping("/get")
    public ResponseEntity<List<EnergyProviderDto>> getAllDepartments() {
        List<EnergyProviderDto> departmentDtoList = energyProviderService.getAllEnergyProviders();
        return new ResponseEntity<>(departmentDtoList, HttpStatus.OK);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<EnergyProviderDto> getProviderById(@PathVariable("id") Long energyProviderId) {
        EnergyProviderDto departmentDto = energyProviderService.getEnergyProviderById(energyProviderId);
        return new ResponseEntity<>(departmentDto, HttpStatus.OK);
    }


    @PostMapping("/add")
    public ResponseEntity<EnergyProviderDto> createEnergyProvider(@RequestBody EnergyProviderDto energyProviderDto) {
        EnergyProviderDto newEnergyProvider =  energyProviderService.createEnergyProvider(energyProviderDto);
        return new ResponseEntity<>(newEnergyProvider, HttpStatus.CREATED);
    }


    @PutMapping("/add/{id}")
    public ResponseEntity<EnergyProviderDto> updateDepartment(@PathVariable("id") Long energyProviderId,
                                                          @RequestBody EnergyProviderDto energyProviderDto) {
       EnergyProviderDto updatedEnergyProvider = energyProviderService.updateEnergyProvider(energyProviderId, energyProviderDto);
        return new ResponseEntity<>(updatedEnergyProvider, HttpStatus.OK);
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteEnergyProvider(@PathVariable("id") Long energyProviderId) {
        energyProviderService.deleteEnergyProvider(energyProviderId);
        return new ResponseEntity<>("Delete Department Successfully", HttpStatus.OK);
    }



}
