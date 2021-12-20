import {Component, OnInit} from '@angular/core';
import {FuncionarioService} from "../funcionario.service";
import {FuncionarioModel} from "../funcionario.model";

@Component({
  selector: 'app-funcionarios-listagem',
  templateUrl: './funcionarios-listagem.component.html',
  styleUrls: ['./funcionarios-listagem.component.scss'],

})
export class FuncionariosListagemComponent implements OnInit {

  constructor(private funcionarioService: FuncionarioService, private funcionarioModel: FuncionarioModel) {
  }


  funcionario: FuncionarioModel = new FuncionarioModel();
  funcionarios: any;

  validarEmail(email: String) {
    let
      regex = /\S+@\S+\.\S+/;
    return regex.test(email.toString());
  }

  validarCaracters() {
    if (this.funcionario.nome.length >= 30) {
      alert("Oops! Você excedeu a quantidade de caracters permitida no campo nome (30)")
    }
    if (this.funcionario.sobrenome.length >= 50) {
      alert("Ooops! Você execeu a quantidade de caracters permitida no campo sobrenome(50)")
    }
  }

  ngOnInit() {
    this.listarFuncionarios();
  }


  editar(f: FuncionarioModel) {

    this.funcionario.idFuncionario = f.idFuncionario;
    this.funcionario.nome = f.nome;
    this.funcionario.sobrenome = f.sobrenome;
    this.funcionario.email = f.email;
    this.funcionario.dtNascimento = f.dtNascimento;
    this.funcionario.numPis = f.numPis;
  }

  deletar(id: Number) {
    this.funcionarioService.remover(id).subscribe(
      funcionario => {
        this.funcionario = new FuncionarioModel();
        this.listarFuncionarios();
      })
  }

  cadastrar() {

    this.validarCaracters();
    if (this.validarEmail(this.funcionario.email)) {

      // POST
      if (this.funcionario.idFuncionario == 0) {
        this.funcionarioService.cadastrar(this.funcionario).subscribe(
          funcionario => {
            this.funcionario = new FuncionarioModel();
            this.listarFuncionarios();
          })
      }
      // PUT
      else {
        this.funcionarioService.editar(this.funcionario.idFuncionario, this.funcionario).subscribe(
          funcionario => {
            this.funcionario = new FuncionarioModel();
            this.listarFuncionarios();
          })
      }
    } else {
      alert("Email Inválido!")
    }
  }

  listarFuncionarios() {
    this.funcionarioService.listar()
      .subscribe(dados => this.funcionarios = dados);
  }

}
