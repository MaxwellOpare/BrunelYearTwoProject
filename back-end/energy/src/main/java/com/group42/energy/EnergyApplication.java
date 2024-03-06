package com.group42.energy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import io.micrometer.common.lang.NonNull;

@SpringBootApplication
@CrossOrigin(origins = { "http://localhost:3000" })
public class EnergyApplication {

	public static void main(String[] args) {
		SpringApplication.run(EnergyApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(@NonNull CorsRegistry registry) {
				registry.addMapping("/**")
						.allowedOrigins("http://localhost:3000")
						.allowedMethods("GET", "PUT", "POST", "PATCH", "DELETE", "OPTIONS")
						.allowCredentials(true);
			}
		};
	}

}
