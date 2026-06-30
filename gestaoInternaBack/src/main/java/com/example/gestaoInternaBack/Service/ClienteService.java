package com.example.gestaoInternaBack.Service;

import com.example.gestaoInternaBack.dto.ClienteRequestDTO;
import com.example.gestaoInternaBack.dto.ClienteResponseDTO;
import com.example.gestaoInternaBack.model.ClienteModel;
import com.example.gestaoInternaBack.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService {
    @Autowired
    private ClienteRepository repository;

    public List<ClienteResponseDTO> listarTodos(){
        return repository
                .findAll()
                .stream()
                .map(cliente -> new ClienteResponseDTO(
                        cliente.getNome(),
                        cliente.getEmail(),
                        cliente.getTelefone()))
                .toList();
    }

    public ClienteModel salvarCliente (ClienteRequestDTO dto) {
        if (repository.findByCpf(dto.getCpf()).isPresent()) {
            throw new RuntimeException("Cliente já cadastrado.");
        }
        if (repository.findByEmail(dto.getEmail()).isPresent()) {
            throw new RuntimeException("E-mail já cadastrado.");
        }
        ClienteModel novoCliente = new ClienteModel();
        novoCliente.setNome(dto.getNome());
        novoCliente.setCpf(dto.getCpf());
        novoCliente.setEmail(dto.getEmail());
        novoCliente.setTelefone(dto.getTelefone());

        return repository.save(novoCliente);
    }

    public void atualizar(Long id, ClienteRequestDTO dto){
        ClienteModel cliente = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Cliente não encontrado."));

        repository.findByCpf(dto.getCpf()).ifPresent(c -> {
            if (!c.getId().equals(id)) {
                throw new RuntimeException("CPF já cadastrado por outro cliente.");
            }
        });

        repository.findByEmail(dto.getEmail()).ifPresent(c -> {
            if (!c.getId().equals(id)) {
                throw new RuntimeException("E-mail já cadastrado por outro cliente.");
            }
        });

        cliente.setNome(dto.getNome());
        cliente.setCpf(dto.getCpf());
        cliente.setEmail(dto.getEmail());
        cliente.setTelefone(dto.getTelefone());

        repository.save(cliente);
    }

    public void excluir(Long id){
        if (!repository.existsById(id)){
            throw new RuntimeException("Cliente não encontrado.");
        }
        repository.deleteById(id);
    }
}