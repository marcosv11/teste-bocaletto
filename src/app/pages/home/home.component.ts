import { Component } from '@angular/core';
import { ServicosComponent } from '../servicos/servicos.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ServicosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
