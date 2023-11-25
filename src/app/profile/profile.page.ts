import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickAndMortyService } from '../services/rickandmorty.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  character: any;

  constructor(
    private route: ActivatedRoute,
    private rickAndMortyService: RickAndMortyService
  ) {}

  ngOnInit() {
    const characterId = this.route.snapshot.paramMap.get('id');
  
    // Verificar si characterId es null antes de hacer la solicitud al servicio
    if (characterId !== null) {
      this.rickAndMortyService.getCharacterById(+characterId).subscribe(
        (data: any) => {
          this.character = data;
          console.log('Character loaded:', this.character); // Agrega este log
        },
        (error) => {
          console.error('Error fetching character:', error);
        }
      );
    } else {
      console.warn('No characterId provided.');
    }
  }
}
