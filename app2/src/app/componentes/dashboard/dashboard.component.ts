import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isLoggedIn = false;
  username: string | null = null;

  ngOnInit() {
    // Adicionar ouvinte de mensagens
    window.addEventListener('message', this.receiveMessage.bind(this), false);

    // Verificar se o usuário está autenticado no carregamento
    this.checkLoginStatus();
  }

  checkLoginStatus() {
    if (sessionStorage.getItem('user') === 'authenticated') {
      this.isLoggedIn = true;
      this.username = sessionStorage.getItem('username');
    } else {
      this.isLoggedIn = false;
    }
  }

  receiveMessage(event: MessageEvent) {
    console.log('Origem da mensagem:', event.origin);
    if (event.origin === 'http://localhost:4200') {
      console.log('Recebido:', event.data);
      const message = event.data;
      if (message.type === 'login') {
        this.isLoggedIn = true;
        this.username = message.username;
        sessionStorage.setItem('username', message.username);
      }
    }
  }
}
