package com.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

    @Autowired
    EmployeeRepository repository;

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @Override
    public void run(String... args) {

        Employee employee = new Employee("Jameela");

        repository.save(employee);

        System.out.println("Employee saved successfully!");

        repository.findAll().forEach(e ->
                System.out.println(e.getId() + " " + e.getName()));
    }
}