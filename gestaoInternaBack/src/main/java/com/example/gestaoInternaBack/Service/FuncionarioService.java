package com.example.gestaoInternaBack.Service;

import com.example.gestaoInternaBack.dto.FuncionarioRequestDTO;
import com.example.gestaoInternaBack.dto.FuncionarioResponseDTO;
import com.example.gestaoInternaBack.model.FuncionarioModel;
import com.example.gestaoInternaBack.repository.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class FuncionarioService {
    @Autowired
    private FuncionarioRepository repository;

    public List<FuncionarioResponseDTO> listarTodos(){
        return repository
                .findAll()
                .stream()
                .map(funcionario -> new FuncionarioResponseDTO(
                        funcionario.getNome(),
                        funcionario.getEmail(),
                        funcionario.getTelefone(),
                        funcionario.getCargo(),
                        funcionario.getSetor(),
                        funcionario.getSalario()))
                .toList();
    }

    public FuncionarioModel salvarFuncionario(FuncionarioRequestDTO dto){
        if (repository.findByCpf(dto.getCpf()).isPresent()){
            throw new RuntimeException("Funcionário já cadastrado com este CPF.");
        }
        if (repository.findByEmail(dto.getEmail()).isPresent()) {
            throw new RuntimeException("E-mail já cadastrado.");
        }
        FuncionarioModel novoFuncionario = new FuncionarioModel();
        novoFuncionario.setNome(dto.getNome());
        novoFuncionario.setCpf(dto.getCpf());
        novoFuncionario.setEmail(dto.getEmail());
        novoFuncionario.setTelefone(dto.getTelefone());
        novoFuncionario.setCargo(dto.getCargo());
        novoFuncionario.setSetor(dto.getSetor());
        novoFuncionario.setSalario(dto.getSalario());

        return repository.save(novoFuncionario);
    }

    public void atualizar(Long id, FuncionarioRequestDTO dto){
        FuncionarioModel funcionario = repository.findById(id)
                .orElseThrow(()-> new RuntimeException("Funcionário não encontrado."));

        repository.findByCpf(dto.getCpf()).ifPresent(f -> {
            if (!f.getId().equals(id)) {
                throw new RuntimeException("CPF já cadastrado por outro funcionário.");
            }
        });

        repository.findByEmail(dto.getEmail()).ifPresent(f -> {
            if (!f.getId().equals(id)) {
                throw new RuntimeException("E-mail já cadastrado por outro funcionário.");
            }
        });

        funcionario.setNome(dto.getNome());
        funcionario.setCpf(dto.getCpf());
        funcionario.setEmail(dto.getEmail());
        funcionario.setTelefone(dto.getTelefone());
        funcionario.setCargo(dto.getCargo());
        funcionario.setSetor(dto.getSetor());
        funcionario.setSalario(dto.getSalario());

        repository.save(funcionario);
    }

    public void excluir(Long id) {
        if (!repository.existsById(id)) {
            throw new RuntimeException("Funcionário não encontrado.");
        }
        repository.deleteById(id);
    }
}