import { Component } from '@angular/core';
import { Filters } from './filters/filters';

@Component({
  selector: 'app-root',
  imports: [Filters],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
