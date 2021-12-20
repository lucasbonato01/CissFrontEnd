import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FuncionarioModel} from "./funcionario.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  adicionarFuncionariosUrl = 'http://localhost:8080/api/funcionario/adicionar';
  funcionariosUrl = 'http://localhost:8080/api/funcionarios';
  editarFuncionariosUrl = 'http://localhost:8080/api/funcionario/editar/';
  excluirFuncionariosUrl = 'http://localhost:8080/api/funcionario/excluir/';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.funcionariosUrl}`);
  }

  cadastrar(funcionario: FuncionarioModel): Observable<any>{
    return this.http.post(`${this.adicionarFuncionariosUrl}`, funcionario);
  }

  editar(id: any, funcionario: FuncionarioModel): Observable<any>{
    return this.http.put(`${this.editarFuncionariosUrl}`.concat(id), funcionario);
  }

  remover(id: any){
    return this.http.delete(`${this.excluirFuncionariosUrl}`.concat(id));
  }

}
