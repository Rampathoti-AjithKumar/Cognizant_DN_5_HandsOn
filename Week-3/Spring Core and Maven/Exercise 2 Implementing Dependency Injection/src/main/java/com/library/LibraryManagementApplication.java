package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryManagementApplication {

    public static void main(String[] args) {

        System.out.println("===== Library Management Application Started =====");

        ApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        System.out.println("Spring IoC Container Loaded Successfully.");

        BookService service = context.getBean("bookService", BookService.class);

        System.out.println("BookService Bean Retrieved Successfully.");


        
        service.addBook();

        System.out.println("===== Application Executed Successfully =====");
    }
}