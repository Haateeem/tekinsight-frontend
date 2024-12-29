
import { Injectable } from '@angular/core';
import { AppService } from './app.service';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	constructor(private app: AppService) { }
	
	examplePost(obj: any) {
		return this.app.post('api ka route', obj);
	}
	exampleGet() {
		return this.app.get('api ka route');
	}
}
