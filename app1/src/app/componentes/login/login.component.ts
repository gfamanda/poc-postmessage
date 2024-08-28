import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';

  login(username: string) {
    // Simular o login
    sessionStorage.setItem('user', 'authenticated');
    sessionStorage.setItem('username', username);

    // Abrir a aplicação de dashboard
    const dashboardUrl = 'http://localhost:4300';
    const newWindow = window.open(dashboardUrl, '_blank');

    if (newWindow) {
      console.log('Nova janela:', newWindow);
      // Adicionar um atraso antes de enviar a mensagem
      setTimeout(() => {
        newWindow.postMessage({ type: 'login', username: username }, 'http://localhost:4300');
      }, 1000);
    } else {
      console.log('Não foi possível abrir a nova janela. Verifique as configurações de pop-up.');
    }
  }
}
