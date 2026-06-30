package com.example.gestaoInternaBack.repository;

import com.example.gestaoInternaBack.model.ClienteModel;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface ClienteRepository extends JpaRepository<ClienteModel, Long> {
    Optional<ClienteModel> findByCpf(String cpf);
    Optional<ClienteModel> findByEmail(String email);
}