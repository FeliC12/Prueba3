import { Router } from '@angular/router';

export class LoginComponent {
    constructor(private router: Router) {}

    // Método para redireccionar después de iniciar sesión
    redirectToHomePage() {
        // Lógica de autenticación exitosa
        // ...
        // Redirigir a la página principal (Home)
        this.router.navigate(['/home']); // 'home' debe coincidir con el nombre de la ruta de tu página principal
    }
}
