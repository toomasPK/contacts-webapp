import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';
import {Router} from '@angular/router';
import {ToolbarOptions} from '../../ui/toolbar/toolbar-options';
import {ToolbarService} from '../../ui/toolbar/toolbar.service';

@Component({
  selector: 'cw-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactService: ContactService, private router: Router, private toolbar: ToolbarService) {


    this.contacts = [];

  }

  ngOnInit() {
    this.toolbar.toolbarOptions.next(new ToolbarOptions( 'Contacts', []));

    this.contactService.getContact().subscribe(response => {
      this.contacts = response;
      console.log(this.contacts);
    });
  }

  onContactSelect(contact): void {
   // console.log(contact.id);
    this.router.navigate(['/contacts', contact.id]);
  }

  onCreateNew(): void {
    this.router.navigate (['/contacts/new']);
  }

}
