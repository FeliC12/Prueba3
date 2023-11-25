import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularioLogin: FormGroup;

  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController,
    private authService: SocialAuthService
  ) {
    this.formularioLogin = this.fb.group({
      nombreUser: ["", Validators.required],
      passwordUser: ["", Validators.required],
    });
  }

  ngOnInit() {}

  async ingresar() {
    const nombreUsuario = this.formularioLogin.value.nombreUser;
    const contrasena = this.formularioLogin.value.passwordUser;

    const usuarioString = localStorage.getItem('usuario');
    if (usuarioString !== null) {
      const usuario = JSON.parse(usuarioString);

      if (usuario.nombre === nombreUsuario && usuario.password === contrasena) {
        console.log('Ingresado');
        localStorage.setItem('ingresado', 'true');
        this.navCtrl.navigateRoot('inicio');
      } else {
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'Los datos ingresados no son válidos',
          buttons: ['Aceptar'],
        });

        await alert.present();
      }
    } else {
      const alert = await this.alertController.create({
        header: 'Usuario no registrado',
        message: 'Debes registrarte primero',
        buttons: ['Aceptar'],
      });

      await alert.present();
    }
  }

  async loginWithGoogle() {
    try {
      const googleUser: SocialUser = await this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
      console.log('Usuario autenticado con Google:', googleUser);
      // Aquí puedes manejar la respuesta según tus necesidades.
    } catch (error) {
      console.error('Error al iniciar sesión con Google', error);
      // Manejar el error (mostrar una alerta, etc.)
    }
  }

  async loginWithFacebook() {
    try {
      const facebookUser: SocialUser = await this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
      console.log('Usuario autenticado con Facebook:', facebookUser);
      // Aquí puedes manejar la respuesta según tus necesidades.
    } catch (error) {
      console.error('Error al iniciar sesión con Facebook', error);
      // Manejar el error (mostrar una alerta, etc.)
    }
  }
}
