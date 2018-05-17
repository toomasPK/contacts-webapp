import { Injectable } from '@angular/core';
import {Contact} from '../contact';
import {Observable} from 'rxjs';
import {ContactHttpService} from './contact-http.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  constructor(private contactHttpService: ContactHttpService) {


  }

  getContact(): Observable<Contact[]> {
    return this.contactHttpService.get();
  }
}

