import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../services/contact.service';
import {Contact} from '../contact';
import {error} from 'selenium-webdriver';

@Component({
  selector: 'cw-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact: Contact;

  constructor(private router: Router, private route: ActivatedRoute,private contactService: ContactService) { }

  ngOnInit() {
    const contactId = this.route.snapshot.paramMap.get('id');
    console.log(contactId);
    this.contactService.getContactById(contactId).subscribe(response => {
      this.contact = response;
      console.log(this.contact);
    ), error => {
      console.error('Getting contact failed!');
      console.error(error);
      };
  }

  onNavigateBack(): void {
    this.router.navigate(['/contacts']);
  }

}
