import {  Component, ElementRef, Input } from '@angular/core';

import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import Atropos from 'atropos';
@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterLink],
  template: `

  <mat-card>
    <div class="image-content">
<img mat-card-image src={{src}}  alt={{alt}}>
    </div>
 <b style="color:grey"> {{title}}</b>
  </mat-card>
  `
})
export class TabComponent {
  @Input() title!: string;
  @Input() src!: string;
  @Input() alt!: string;
}


