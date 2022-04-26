import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { InvItem } from '../inv-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  displayedColumns  :  string[] = ['id', 'name', 'payment_id', 'amount', 'department', 'location', 'description', 'category', 'purchase_date', 'unit-price', 'memo'];
  dataSource : any  = [];
  contact = {};
  invItem: any;
  clickedRows: any;




  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.readInvItem().subscribe((result)=>{   
      this.dataSource  =  result;
     })
  }

  

  selectItem(invItem: {}){
    this.contact = invItem;
  }

  newItem(){
    this.contact = {};
  }

  createItem(f: { value: InvItem; }){
    this.apiService.createInvItem(f.value).subscribe((result)=>{
      console.log(result);
    });
    
  }

  deleteItem(id: number){
    this.apiService.deleteInvItem(id).subscribe((result)=>{
      console.log(result);
    });
  }

  updateItem(f: { value: InvItem; }){
    f.value.id = this.invItem['id'];
    this.apiService.updateInvItem(f.value).subscribe((result)=>{
      console.log(result);
    });
  }

  
}
