import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoaderService } from '../services/loader.service';
import { Tracking } from '../interfaces/gestion.interface';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})

// For now we fake the data until the loader service is done
export class OverviewComponent implements OnInit, OnDestroy {

    humidity: Tracking;
    temperature: Tracking;
    
    constructor (private loader: LoaderService){
    }

    ngOnInit(): void {

        this.humidity = {
            records: [],
            correspondingTo: {min: 0, max: 100, unit: '%', label:'humidity'},
            name: 'Humidity measured by the probe',
            subscription: null
        };
        
        this.temperature = {
            records: [],
            correspondingTo: {min: 0, max: 35, unit: '°C', label:'temperature'},
            name: 'Temperature measured by the probe',
            subscription: null
        };
        
        this.humidity.subscription = this.loader.refresh('humidity')
            .subscribe(result => this.humidity.records = result.json());
        
        this.temperature.subscription = this.loader.refresh('temperature')
            .subscribe(result => this.temperature.records = result.json());
    }
    
    ngOnDestroy(): void {
        this.humidity.subscription.unsubscribe();
        this.temperature.subscription.unsubscribe();
    }

}
