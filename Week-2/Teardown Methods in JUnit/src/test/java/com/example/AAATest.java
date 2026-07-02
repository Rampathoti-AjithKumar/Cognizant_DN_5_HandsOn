package com.example;

import static org.junit.Assert.assertEquals;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class AAATest {

    private Calculator calculator;
    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setup: Calculator object created");
    }

    @Test
    public void testAddition() {

        int num1 = 12;
        int num2 = 8;

        int result = calculator.add(num1, num2);

        assertEquals(20, result);
    }

    // Teardown method - runs after each test
    @After
    public void tearDown() {
        calculator = null;
        System.out.println("Teardown: Calculator object destroyed");
    }
}