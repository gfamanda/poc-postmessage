import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userKey = 'user';

  getUser(): string | null {
    return sessionStorage.getItem(this.userKey);
  }

  setUser(username: string): void {
    sessionStorage.setItem(this.userKey, username);
    console.log(`Usuário ${username} armazenado no sessionStorage em App2.`);
  }

  logout(): void {
    sessionStorage.removeItem(this.userKey);
    console.log('Usuário removido do sessionStorage em App2.');
  }
}
