package com.group42.energy.Report;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ReportConfig {

    @Bean
    CommandLineRunner commandLineRunner(ReportRepository repository) {
        return args -> {
        };
    }

}
