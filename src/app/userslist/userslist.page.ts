// src/app/userslist/userslist.page.ts

import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../services/rickandmorty.service';  // Ajusta la ruta según tu estructura

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.page.html',
  styleUrls: ['./userslist.page.scss'],
})
export class UserslistPage implements OnInit {
  characters: any[] = [];

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit() {
    this.rickAndMortyService.getCharacters().subscribe((data: any) => {
      this.characters = data.results;
    });
  }
}
