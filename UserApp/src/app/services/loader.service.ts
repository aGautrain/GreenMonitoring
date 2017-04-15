import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

let source: string = 'http://109.8.206.12:1337/';

@Injectable()
export class LoaderService {


    // dependency injection of the Http service
    constructor(private http: Http) { }
    
    // return the records found at source for a specific entity
    // kind = 'temperature' OR 'humidity'
    refresh(queriedEntity: string) {
        return this.http.get(source + 'records/' + queriedEntity);
    }

}
