package com.example;

import static org.mockito.Mockito.verify;

import org.junit.Test;
import org.mockito.Mockito;

public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {

        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        MyService service = new MyService(mockApi);

        service.fetchData();

        System.out.println("========== Mockito Verification Demo ==========");
        System.out.println("Calling fetchData()...");
        System.out.println("Verifying that getData() was invoked.");
        System.out.println("Verification Successful!");
        System.out.println("===============================================");

        verify(mockApi).getData();
    }
}