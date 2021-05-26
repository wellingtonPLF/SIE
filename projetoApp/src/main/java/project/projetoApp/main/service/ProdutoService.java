package project.projetoApp.main.service;

import project.projetoApp.main.repositories.ProdutoRepository;
import project.projetoApp.main.model.Produto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ProdutoService {

   @Autowired
   private ProdutoRepository produtoRepository;

   public List<Produto> getProdutos() {
       return this.produtoRepository.findAll();
   }

   @Transactional
   public Produto inserirProduto(Produto produto) {
       Produto produtoInserido = this.produtoRepository.save(produto);
       return produtoInserido;
   }
}