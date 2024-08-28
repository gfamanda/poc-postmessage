import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userKey = 'user';

  login(username: string): void {
    sessionStorage.setItem(this.userKey, username);
    console.log(`Usuário ${username} armazenado no sessionStorage em App1.`);
  }

  getUser(): string | null {
    return sessionStorage.getItem(this.userKey);
  }

  logout(): void {
    sessionStorage.removeItem(this.userKey);
    console.log('Usuário removido do sessionStorage em App1.');
  }
}
