package com.healthhelper.heathHelper.controller;

import com.healthhelper.heathHelper.dto.LoginUserDto;
import com.healthhelper.heathHelper.dto.RegisterUserDto;
import com.healthhelper.heathHelper.dto.VerifyUserDto;
import com.healthhelper.heathHelper.model.User;
import com.healthhelper.heathHelper.responses.LogInResponse;
import com.healthhelper.heathHelper.service.AuthenticationService;
import com.healthhelper.heathHelper.service.JWTService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/auth")
@RestController
public class AuthenticationController {
    private final JWTService jwtService;
    private final AuthenticationService authenticationService;

    public AuthenticationController(JWTService jwtService, AuthenticationService authenticationService) {
        this.jwtService = jwtService;
        this.authenticationService = authenticationService;
    }

    @GetMapping("/signup")
    public String showSignUpPage() {
        return "signup";
    }

    @CrossOrigin
    @PostMapping("/signup")
    public ResponseEntity<User> register(@RequestBody RegisterUserDto registerUserDto) {
        User registeredUser = authenticationService.signUp(registerUserDto);
        return ResponseEntity.ok(registeredUser);
    }

    @PostMapping("/login")
    public ResponseEntity<LogInResponse> authenticate(@RequestBody LoginUserDto loginUserDto) {
        User user = authenticationService.authenticate(loginUserDto);
        String token = jwtService.generateToken(user);
        LogInResponse logInResponse = new LogInResponse(token, jwtService.getExpirationTime());
        return ResponseEntity.ok(logInResponse);
    }

    @PostMapping("/verify")
    public ResponseEntity<?> verify(@RequestBody VerifyUserDto verifyUserDto) {
        try {
            authenticationService.verifyUser(verifyUserDto);
            return ResponseEntity.ok("Account verified successfully");
        }
        catch (Exception exception) {
            return ResponseEntity.badRequest().body(exception.getMessage());
        }
    }

    @PostMapping("/resend")
    public ResponseEntity<?> resend(@RequestParam String email) {
        try {
            authenticationService.resendVerificationCode(email);
            return ResponseEntity.ok("Verification code resent");
        } catch (Exception exception) {
            return ResponseEntity.badRequest().body(exception.getMessage());
        }
    }
}
