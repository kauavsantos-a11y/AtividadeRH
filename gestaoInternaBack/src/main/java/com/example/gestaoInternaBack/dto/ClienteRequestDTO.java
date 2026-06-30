package com.example.gestaoInternaBack.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public class ClienteRequestDTO {
    @NotBlank(message = "Informe seu nome.")
    private String nome;

    @NotBlank(message = "Informe seu CPF.")
    private String cpf;

    @NotBlank(message = "Informe seu e-mail.")
    @Email(message = "Deve ser um e-mail válido.")
    private String email;

    @NotBlank(message = "Informe seu telefone.")
    private String telefone;

    public ClienteRequestDTO() {
    }

    public ClienteRequestDTO(String nome, String cpf, String email, String telefone) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.telefone = telefone;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }
}