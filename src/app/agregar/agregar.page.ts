import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage {
  nombreUsuario: string = '';
  nombreMascota: string = '';
  opcionSeleccionada: string = '';

  constructor(private router: Router, private alertController: AlertController) {}

  acceptButtonClicked() {
    this.presentAlert('Servicio seleccionado exitosamente');
  } async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: '¡Éxito!',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
  limpiarCampos() {
    console.log('Limpiando campos...'); // Añade este console.log
    this.nombreUsuario = ''; // Limpia el campo del nombre de usuario
    this.nombreMascota = ''; // Limpia el campo del nombre de la mascota
    this.opcionSeleccionada = ''; // Restablece la opción seleccionada del menú desplegable
  }

  async eliminarInformacion() {
    const alert = await this.alertController.create({
      header: 'Información eliminada',
      message: `${this.nombreUsuario} ${this.nombreMascota} Información ${this.opcionSeleccionada} eliminada`,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.limpiarCampos(); // Limpia los campos después de cerrar la alerta
          }
        }
      ]
    });

    await alert.present();
  }
}