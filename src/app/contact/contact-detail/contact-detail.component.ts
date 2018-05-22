import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../services/contact.service';
import {Contact} from '../contact';
import {ToolbarService} from '../../ui/toolbar/toolbar.service';
import {ToolbarOptions} from '../../ui/toolbar/toolbar-options';
import {ToolbarAction} from '../../ui/toolbar/toolbar-action';

@Component({
  selector: 'cw-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact: Contact;
  editingEnabled: boolean;

  constructor(private router: Router, private route: ActivatedRoute, private contactService: ContactService,
              private toolbar: ToolbarService) {
    this.contact = new Contact();
    this.editingEnabled = false;
  }

  ngOnInit() {


    const contactId = this.route.snapshot.paramMap.get('id');
    let toolbarAction: ToolbarAction[];

    if(contactId == null) {
      // Create contact
      this.editingEnabled = true;
      toolbarAction = [];
    } else {
      // View/Edit contact
      toolbarAction = [new ToolbarAction(this.onEdit.bind(this), 'edit' )]

      this.contactService.getContactById(contactId).subscribe(response => {
        this.contact = response;
        console.log(this.contact);
      }, error => {
        console.error('Getting contact failed');
        console.error(error);
        this.router.navigate (['/contacts']);
      });
    }

  }

  onNavigateBack(): void {
    this.router.navigate(['/contacts']);
  }

  onSave(): void {
    console.log('TODO: Save');
  }

  onEdit(): void {
    this.editingEnabled = !this.editingEnabled;
  }

}
