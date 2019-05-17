import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Contact} from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  url = 'http://localhost:8000/';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Contact[]>(this.url + 'contacts/');
  }

  save(contact: Contact) {
    if (contact.id === undefined) {
      return this.http.post<Contact>(this.url + 'contacts/', contact);
    }
    return this.http.put<Contact>(this.url + 'contacts/' + contact.id + '/', contact);
  }

  delete(contact: Contact) {
    return this.http.delete(this.url + 'contacts/' + contact.id + '/');
  }
}
