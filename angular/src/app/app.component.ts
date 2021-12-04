import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private httpClient: HttpClient) {
  }
  private URL = 'http://localhost:8080/autenticacao/login';

  title = 'login';
 
  email: String = '';
  senha: String = '';

  mensagem: String = '';

  enviarLogin() {

    var parametros = {
      login: this.email,
      senha: this.senha
    }

    this.httpClient.post(this.URL, parametros)
      .subscribe(resultado => {
        alert(resultado);
      },
        erro => {
        if(erro.status == 400) {
          alert('Usuário não encontrado');
        }
      });
    
  }
}
