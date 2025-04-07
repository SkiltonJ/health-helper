package com.healthhelper.heathHelper.responses;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LogInResponse {
    private String token;
    private long expiresIn;

    public LogInResponse(String token, long expiresIn) {
        this.token = token;
        this.expiresIn = expiresIn;
    }
}
