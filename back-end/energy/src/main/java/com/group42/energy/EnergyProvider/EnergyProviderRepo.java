package com.group42.energy.EnergyProvider;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface EnergyProviderRepo extends JpaRepository<EnergyProvider, Long> {
}
