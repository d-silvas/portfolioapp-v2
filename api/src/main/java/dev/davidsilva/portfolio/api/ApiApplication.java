package dev.davidsilva.portfolio.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = "dev.davidsilva.portfolio")
@EnableJpaRepositories(basePackages = "dev.davidsilva.portfolio")
@EntityScan(basePackages = "dev.davidsilva.portfolio")
public class ApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiApplication.class, args);
	}

}
