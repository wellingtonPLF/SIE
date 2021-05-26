package project.projetoApp.main.repositories;

import project.projetoApp.main.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {

   public List<Produto> findByPrecoAndNome(Double preco, String nome);
   
}