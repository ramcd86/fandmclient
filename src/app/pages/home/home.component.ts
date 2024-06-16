import { Component } from '@angular/core';
import { SearchBarComponent } from '../../reuseable/search-bar/search-bar.component';

@Component({
  selector: 'fnm-home',
  standalone: true,
  imports: [SearchBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
