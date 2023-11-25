// productos.page.ts

import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-productos',
  templateUrl: 'productos.page.html',
  styleUrls: ['productos.page.scss'],
})
export class ProductosPage {
  constructor(private navCtrl: NavController) {}
  
  products = [
    { name: 'Producto 1', image: 'https://purina.cl/sites/default/files/styles/webp/public/2022-11/purina-dog-chow-adultos-todos-los-tamaños-con-carne.jpg.webp?itok=gE46IOPp', description: 'Comida para perro', price: 19.99 },
    { name: 'Producto 2', image: 'https://purina.cl/sites/default/files/styles/webp/public/2022-08/adulto_pollo_alimento_humedo_frente_pro_plan.jpg.webp?itok=QWRbW-bx', description: 'Comida para Gato', price: 29.99 },
    { name: 'Producto 3', image: 'https://petshop.petcenter.com.bo/wp-content/uploads/2021/02/pro-plan-adult-small-breed-x-1-kg.jpg', description: 'Proporciona nutrición de alta calidad', price: 39.99 },
    { name: 'Producto 4', image: 'https://arcadenoe.com.gt/cdn/shop/products/114067_3500x.jpg?v=1668537668', description: 'Desarrollado por Veterinarios y Nutricionistas de Purina, PURINA®', price: 49.99 }
  ];
}
