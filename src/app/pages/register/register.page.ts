import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone:false,
})
export class RegisterPage implements OnInit {
  //nombre: string = 'jose....';
  step = 1;
  titles = [
    {}, // índice 0 no se usa (opcional)
    { title: "Tu pase de entrada empieza aquí", subtitle: "Ingresa tu correo" },
    { title: "Tu acceso al mundo del arte urbano", subtitle: "Crea una contraseña segura" },
    { title: "¿Cómo quieres que te conozcan en la ciudad?", subtitle: "Elige tu nombre en el juego" },
    { title: "¡Elige tu jeta!", subtitle: "Elige tu avatar" },
    { title: "Las reglas son pocas, pero importan", subtitle: "Lee, acepta y empieza a explorar" }
  ];
  avatars: string[] = [
    'assets/avatars/avatar1.jpg',
    'assets/avatars/avatar2.jpg',
    'assets/avatars/avatar3.png',
    'assets/avatars/avatar4.png',
    'assets/avatars/avatar5.png',
    'assets/avatars/avatar6.png',
    'assets/avatars/avatar7.png',
    'assets/avatars/avatar8.png',
    'assets/avatars/avatar9.png',
  ];
  registerForm!: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
  ) {
  this.registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
    username: ['', [Validators.required, Validators.minLength(3)]],
    avatar:[''],
    
  });
}  
  ngOnInit() {
  }
selectAvatar(avatar: string) {
  this.registerForm.get('avatar')?.setValue(avatar);
}
 
//Pantallas
previous() {
  if (this.step > 1) this.step--;
}
register() {
  if (this.registerForm.valid) {
    console.log('Formulario válido:', this.registerForm.valid);
    console.log('Valores del formulario', this.registerForm.value);
    this.router.navigate(['/home']);

  }  
  else{
    this.registerForm.markAllAsTouched();
  }
}
next() {
  switch (this.step) {
    case 1:
      if (this.registerForm.get('email')?.valid) {
        this.step++;
      } else {
        this.registerForm.get('email')?.markAsTouched();
      }
      break;

    case 2:
      const password = this.registerForm.get('password');
      const confirmPassword = this.registerForm.get('confirmPassword');

      if (password?.valid && confirmPassword?.valid && password.value === confirmPassword.value) {
        this.step++;
      } else {
        password?.markAsTouched();
        confirmPassword?.markAsTouched();
      }
      break;

    case 3:
      if (this.registerForm.get('username')?.valid) {
        this.step++;
      } else {
        this.registerForm.get('username')?.markAsTouched();
      }
      break;

    case 4:
    
      this.step++;
      break;

    case 5:
      if (this.registerForm.get('terms')?.valid) {
        this.register(); // Llamamos al registro solo si los términos están aceptados
      } else {
        this.registerForm.get('terms')?.markAsTouched();
      }
      break;
  }
}

}