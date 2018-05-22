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

  constructor(private router: Router, private route: ActivatedRoute, private contactService: ContactService,
              private toolbar: ToolbarService) {
    this.contact = new Contact();
  }

  ngOnInit() {
    this.toolbar.toolbarOptions.next(new ToolbarOptions('contact',[
      new ToolbarAction(this.onEdit, 'edit')
    ]));

    const contactId = this.route.snapshot.paramMap.get('id');
    console.log(contactId);

    if(contactId == null) {
      return
    }

    this.contactService.getContactById(contactId).subscribe(response => {
      this.contact = response;
      console.log(this.contact);
    }, error => {
      console.error('Getting contact failed');
      console.error(error);
      this.router.navigate (['/contacts']);
    });
  }

  onNavigateBack(): void {
    this.router.navigate(['/contacts']);
  }

  onSave(): void {
    console.log('TODO: Save');
  }

  onEdit(): void {
    console.log('No wörk')
  }

}
