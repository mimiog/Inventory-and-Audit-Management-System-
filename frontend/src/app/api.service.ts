import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InvItem } from './inv-item';
import { NewItem } from './new-item';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  API_SERVER = "http://127.0.0.1:3000";

  public readItem(name?: string, id?: number, pid?: number){
    return this.httpClient.get<InvItem>(`${this.API_SERVER}/invItem`);
  }
  
  public readItems(){
    return this.httpClient.get<InvItem[]>(`${this.API_SERVER}/invItem/`);
  }

  public createItem(contact: NewItem){
    return this.httpClient.post<NewItem>(`${this.API_SERVER}/invItem/create`, contact);
  }

  public updateItem(contact: InvItem){
    return this.httpClient.patch<InvItem>(`${this.API_SERVER}/invItem/${contact.id}/update`, contact);
  }

  public deleteItem(id: number){
    return this.httpClient.delete(`${this.API_SERVER}/invItem/${id}/delete`);
  }


}
