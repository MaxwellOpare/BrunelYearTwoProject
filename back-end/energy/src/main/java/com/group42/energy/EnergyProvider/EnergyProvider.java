package com.group42.energy.EnergyProvider;


import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.group42.energy.User.User;
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
public class EnergyProvider {
    @Id
    @SequenceGenerator(name = "report_sequence", sequenceName = "report_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "report_sequence")
    private Long energyProviderId;
    private String name;
    @Column(name = "email", nullable = false, unique = true)
    private String email;
    private String contactNumber;
    private String address;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "energyProvider", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<User> users = new ArrayList<>();


}
