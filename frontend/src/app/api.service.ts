<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InvItem } from './inv-item';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  API_SERVER = "http://localhost:58961/";

  public readInvItem(){
    return this.httpClient.get<InvItem[]>(`${this.API_SERVER}/invItem`);
  }

  public createInvItem(contact: InvItem){
    return this.httpClient.post<InvItem>(`${this.API_SERVER}/invItem/create`, contact);
  }

  public updateInvItem(contact: InvItem){
    return this.httpClient.put<InvItem>(`${this.API_SERVER}/invItem/${contact.id}/update`, contact);
  }

  public deleteInvItem(id: number){
    return this.httpClient.delete(`${this.API_SERVER}/invItem/${id}/delete`);
  }


}
=======
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InvItem } from './inv-item';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  API_SERVER = "http://127.0.0.1:3000/";

  public readItem(){
    return this.httpClient.get<InvItem[]>(`${this.API_SERVER}/invItem`);
  }

  public createItem(contact: InvItem){
    return this.httpClient.post<InvItem>(`${this.API_SERVER}/invItem/create`, contact);
  }

  public updateItem(contact: InvItem){
    return this.httpClient.put<InvItem>(`${this.API_SERVER}/invItem/${contact.id}/update`, contact);
  }

  public deleteItem(id: number){
    return this.httpClient.delete(`${this.API_SERVER}/invItem/${id}/delete`);
  }


}
>>>>>>> 06c8f46499370c4e27548b5499544f1ce450c04d
