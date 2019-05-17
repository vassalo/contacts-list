import {Component} from '@angular/core';
import {Contact} from './shared/contact';
import {DomSanitizer} from '@angular/platform-browser';
import {ContactService} from './shared/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

  openedContact: number;
  loadingContacts = true;
  contacts: Contact[];
  groups = [];

  constructor(private sanitization: DomSanitizer, private contactService: ContactService) {
    this.contactService.getAll().subscribe(data => {
      this.contacts = data;
      this.loadingContacts = false;
    });
  }

  getProfilePic(url) {
    return this.sanitization.bypassSecurityTrustStyle(
      'url(' + (url || 'https://t3.ftcdn.net/jpg/00/64/67/52/240_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg') + ')'
    );
  }

  getGroupName(id: number) {
    if (id === undefined) {
      return undefined;
    }

    for (const g of this.groups) {
      if (g.id === id) {
        return g.name;
      }
    }
  }

  addContact() {
    this.contacts.push(new Contact());
  }

  saveContact(idx: number) {
    this.contactService.save(this.contacts[idx]).subscribe(data => this.contacts[idx] = data, err => alert('Falha ao salvar contato'));
  }

  deleteContact(idx: number) {
    if (this.contacts[idx].id === undefined) {
      this.contacts.splice(idx, 1);
    } else {
      this.contactService.delete(this.contacts[idx])
        .subscribe(data => {
          this.contacts.splice(idx, 1);
          this.openedContact = undefined;
        }, err => alert('Falha ao deletar contato'));
    }
  }
}
