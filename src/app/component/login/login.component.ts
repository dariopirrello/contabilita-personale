import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  private apiUrl = 'http://localhost:8080/api/auth/login'; // URL backend corretto

  constructor(
    private fb: FormBuilder,
    private http: HttpClient, // Iniettiamo HttpClient
    private router: Router    // Per reindirizzare dopo il login
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log('Login con:', this.loginForm.value);

      this.http.post<{ token: string }>(this.apiUrl, this.loginForm.value).subscribe(
        (response) => {
          console.log('Risposta API:', response);
          localStorage.setItem('token', response.token);
          alert(response.token);
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.error('Errore nel login:', error);
          alert('Credenziali non valide.');
        }
      );
    }
  }
}
