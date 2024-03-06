package com.group42.energy.User;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.group42.energy.EnergyProvider.EnergyProvider;
import com.group42.energy.Report.Report;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;



@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class User {
    @Id
    @SequenceGenerator(name = "report_sequence", sequenceName = "report_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "report_sequence")
    private Long userId;
    private String firstName;
    private String surName;
    @Column(name = "email", nullable = false, unique = true)
    private String email;
    private String address;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "energy_providerId",nullable = false)
    @JsonBackReference
    private EnergyProvider energyProvider;


    @OneToMany(fetch = FetchType.LAZY, mappedBy = "user", cascade = CascadeType.ALL)
    private List<Report> reportList = new ArrayList<>();




    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", firstName='" + firstName + '\'' +
                ", surName='" + surName + '\'' +
                ", email='" + email + '\'' +
                ", address='" + address + '\'' +
                ", energyProvider=" + energyProvider +
                ", reportList=" + reportList +
                '}';
    }
}
