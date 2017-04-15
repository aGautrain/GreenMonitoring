import { Component, Input } from '@angular/core';
import { Record, Entity, Tracking } from '../interfaces/gestion.interface';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.css']
})

export class DiagramComponent {
    
  @Input() tracking: Tracking;
  @Input('maxHeight') height: number;
  @Input('baseOffset') offset: number;

   getRelativeHeight(sample: Record): number {
       
       return sample.value * 2;
   }
}
