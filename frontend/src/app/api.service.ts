import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InvItem } from './inv-item';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  API_SERVER = "http://localhost:58961/";

  public readContacts(){
    return this.httpClient.get<InvItem[]>(`${this.API_SERVER}/invItem`);
  }

  public createContact(contact: InvItem){
    return this.httpClient.post<InvItem>(`${this.API_SERVER}/invItem/create`, contact);
  }

  public updateContact(contact: InvItem){
    return this.httpClient.put<InvItem>(`${this.API_SERVER}/invItem/${contact.id}/update`, contact);
  }

  public deleteContact(id: number){
    return this.httpClient.delete(`${this.API_SERVER}/invItem/${id}/delete`);
  }


}
