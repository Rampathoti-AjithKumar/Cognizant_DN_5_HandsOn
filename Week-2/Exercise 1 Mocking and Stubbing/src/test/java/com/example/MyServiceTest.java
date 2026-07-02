package com.example;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import org.junit.Test;
import org.mockito.Mockito;

public class MyServiceTest {

    @Test
    public void testExternalApi() {

        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        when(mockApi.getData()).thenReturn("Mock Data");

        MyService service = new MyService(mockApi);
        String result = service.fetchData();
        System.out.println("========== Mockito Demo ==========");
        System.out.println("Mocked API Returned : " + result);
        System.out.println("Mocking and Stubbing Successful!");
        System.out.println("==================================");
        assertEquals("Mock Data", result);
    }
}