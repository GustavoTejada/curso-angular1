import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css'],
  providers: [AuthService]
})
export class IngresarComponent {

  loginForm: FormGroup = this.formBuilder.group({
    correo: ['', [Validators.email, Validators.required]],
    contrasena: ['', [Validators.required]]
  })

  constructor (
    private formBuilder: FormBuilder,
    private _authService: AuthService,
    private router: Router
  ) { }

  async ingresar () {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    } else {
      const info = await this._authService.login(this.loginForm.controls['correo'].value, this.loginForm.controls['contrasena'].value)
      localStorage.setItem('Usuario', JSON.stringify(info));
      this.router.navigate(['/dashboard']);
    }
  }

  async ingresarConGoogle () {
    const info = await this._authService.loginWithGoogle();
    localStorage.setItem('Usuario', JSON.stringify(info));
    this.router.navigate(['/dashboard']);
  }

  campoEsValido (campo: string) {
    return (
      this.loginForm.controls[campo].errors &&
      this.loginForm.controls[campo].touched
    );
  }

  async register() {

  }

}
