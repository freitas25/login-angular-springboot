package com.login.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("autenticacao")
public class AutenticacaoController {

    @PostMapping("login")
    public ResponseEntity<?> login(@RequestBody LoginDto loginDto) {
        if (loginDto.getLogin().equals("aaaa") && loginDto.getSenha().equals("bbbb")) {
            return ResponseEntity.ok().body("Logado com sucesso.");
        }
        return ResponseEntity.notFound().build();
    }
}
