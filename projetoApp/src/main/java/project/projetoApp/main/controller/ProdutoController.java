package project.projetoApp.main.controller;

import project.projetoApp.main.model.Produto;
import project.projetoApp.main.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/")
public class ProdutoController {

   @Autowired
   private ProdutoService usuarioService;

   @GetMapping("/produtos")
   public List<Produto> getProdutos() {
       return this.usuarioService.getProdutos();
   }

   @PostMapping("/produtos")
   public Produto inserirProduto(@RequestBody Produto produto){
       return this.usuarioService.inserirProduto(produto);
   }
}