import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cantidad-equipos-champions',
  standalone: true,
  imports: [HeaderComponent, FormsModule],
  templateUrl: './cantidad-equipos-champions.component.html',
  styleUrl: './cantidad-equipos-champions.component.css'
})
export class CantidadEquiposChampionsComponent {
  cantidadEquipos: number = 3; 
  equipos: string[] = [];

  constructor(private router: Router) {}

  agregarEquipos() {
    this.equipos = Array(this.cantidadEquipos).fill('').map((_, i) => `Equipo ${i + 1}`);
  }

  redirectToNextPage() {
    const equiposString = JSON.stringify(this.equipos);
    this.router.navigate(['/champions-league-format', equiposString]);  
  } 
}
