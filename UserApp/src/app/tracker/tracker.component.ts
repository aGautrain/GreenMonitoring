// DISPLAY COMPONENT
// Taking a tracking as input and displaying it nicely
import { Component, Input } from '@angular/core';
import { OverviewComponent } from '../overview/overview.component';

import { Tracking, Entity, Record } from '../interfaces/gestion.interface';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})

export class TrackerComponent {
    
    @Input() tracking: Tracking;

    constructor() { }
     
     getLastRecord(): Record {
         return this.tracking.records[this.tracking.records.length - 1];
     }


}
