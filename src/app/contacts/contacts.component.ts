import {Component} from '@angular/core';
import {Contact} from './shared/contact';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

  panelOpenState = false;

  contacts = [
    new Contact('https://material.angular.io/assets/img/examples/shiba1.jpg', 'Matuto', 'Gabriel Barbosa', '666', 'gbp@ic.ufal.br', 'UFAL')
  ];

  groups = [
    'UFAL',
    'CSU'
  ];

  constructor(private sanitization: DomSanitizer, private http: HttpClient) {
  }

  addContact() {
    this.contacts.push(new Contact());
  }

  getProfilePic(url) {
    return this.sanitization.bypassSecurityTrustStyle(
      'url(' + (url || 'https://t3.ftcdn.net/jpg/00/64/67/52/240_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg') + ')'
    );
  }
}
