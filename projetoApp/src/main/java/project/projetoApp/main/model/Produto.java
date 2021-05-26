package project.projetoApp.main.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.ElementCollection;
import java.util.*;

@Entity
@Table(name = "tb_Produto")
public class Produto {

   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   private Long id;
   private String imagem;
   private String nome;
   private Double preco;
   
   @ElementCollection
   private List<String> descricao = new ArrayList<>();
   
   //------------------------------------------------------------------------//
   public Long getId() {
       return id;
   }

   public String getNome() {
       return nome;
   }

   public void setNome(String nome) {
       this.nome = nome;
   }
   
   public String getImagem() {
		return imagem;
	}

	public void setImagem(String imagem) {
		this.imagem = imagem;
	}

	public Double getPreco() {
		return preco;
	}

	public void setPreco(Double preco) {
		this.preco = preco;
	}
	
	public void criarDescricao(String[] lista){
		this.descricao = new ArrayList<String>(Arrays.asList(lista));
	}
	public void adicionar(String descr){
		this.descricao.add(descr);
	}
	
	public List<String> getDescricao() {
		return this.descricao;
	}
}