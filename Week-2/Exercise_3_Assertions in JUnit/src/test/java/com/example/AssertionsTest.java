package com.example;

import static org.junit.Assert.*;
import org.junit.Test;

public class AssertionsTest {

    @Test
    public void testAssertions() {

        assertEquals(100, 50 + 50);
        assertTrue(20 > 10);
        assertFalse(15 < 10);

        String name = null;
        assertNull(name);

        String course = "JUnit";
        assertNotNull(course);
    }
}