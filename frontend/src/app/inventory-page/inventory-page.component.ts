import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { InvItem } from '../inv-item';
import { ItemDetailsComponent } from './item-details/item-details.component';
export interface InventoryItem {
  id: number,
  name: string,
  payment_id: number,
  amount: number,
  department: string,
  location: string,
  description: string,
  category: string,
  purchase_date: Date,
  unit_price: number,
  memo: string,
  lifespan: string
}


var itemData: InventoryItem[] = [
  {
    id: 4372948,
    name: 'string',
    payment_id: 43298940,
    amount: 4839,
    department: 'string',
    location: 'string',
    description: 'string',
    category: 'string',
    purchase_date: new Date,
    unit_price: 839243,
    memo: 'string',
    lifespan: 'string'
  },
  {
    id: 4372948,
    name: 'string',
    payment_id: 43298940,
    amount: 4839,
    department: 'string',
    location: 'string',
    description: 'string',
    category: 'string',
    purchase_date: new Date,
    unit_price: 839243,
    memo: 'string',
    lifespan: 'string'
  },
  {
    id: 4372948,
    name: 'string',
    payment_id: 43298940,
    amount: 4839,
    department: 'string',
    location: 'string',
    description: 'string',
    category: 'string',
    purchase_date: new Date,
    unit_price: 839243,
    memo: 'string',
    lifespan: 'string'
  },
  {
    id: 4372948,
    name: 'string',
    payment_id: 43298940,
    amount: 4839,
    department: 'string',
    location: 'string',
    description: 'string',
    category: 'string',
    purchase_date: new Date,
    unit_price: 839243,
    memo: 'string',
    lifespan: 'string'
  },
  {
    id: 4372948,
    name: 'string',
    payment_id: 43298940,
    amount: 4839,
    department: 'string',
    location: 'string',
    description: 'string',
    category: 'string',
    purchase_date: new Date,
    unit_price: 839243,
    memo: 'string',
    lifespan: 'string'
  },
  {
    id: 4372948,
    name: 'string',
    payment_id: 43298940,
    amount: 4839,
    department: 'string',
    location: 'string',
    description: 'string',
    category: 'string',
    purchase_date: new Date,
    unit_price: 839243,
    memo: 'string',
    lifespan: 'string'
  },
  {
    id: 4372948,
    name: 'string',
    payment_id: 43298940,
    amount: 4839,
    department: 'string',
    location: 'string',
    description: 'string',
    category: 'string',
    purchase_date: new Date,
    unit_price: 839243,
    memo: 'string',
    lifespan: 'string'
  },
  {
    id: 4372948,
    name: 'string',
    payment_id: 43298940,
    amount: 4839,
    department: 'string',
    location: 'string',
    description: 'string',
    category: 'string',
    purchase_date: new Date,
    unit_price: 839243,
    memo: 'string',
    lifespan: 'string'
  },
  {
    id: 4372948,
    name: 'string',
    payment_id: 43298940,
    amount: 4839,
    department: 'string',
    location: 'string',
    description: 'string',
    category: 'string',
    purchase_date: new Date,
    unit_price: 839243,
    memo: 'string',
    lifespan: 'string'
  },
  {
    id: 4372948,
    name: 'string',
    payment_id: 43298940,
    amount: 4839,
    department: 'string',
    location: 'string',
    description: 'string',
    category: 'string',
    purchase_date: new Date,
    unit_price: 839243,
    memo: 'string',
    lifespan: 'string'
  },
  {
    id: 4372948,
    name: 'string',
    payment_id: 43298940,
    amount: 4839,
    department: 'string',
    location: 'string',
    description: 'string',
    category: 'string',
    purchase_date: new Date,
    unit_price: 839243,
    memo: 'string',
    lifespan: 'string'
  },
  {
    id: 4372948,
    name: 'string',
    payment_id: 43298940,
    amount: 4839,
    department: 'string',
    location: 'string',
    description: 'string',
    category: 'string',
    purchase_date: new Date,
    unit_price: 839243,
    memo: 'string',
    lifespan: 'string'
  },
  {
    id: 4372948,
    name: 'string',
    payment_id: 43298940,
    amount: 4839,
    department: 'string',
    location: 'string',
    description: 'string',
    category: 'string',
    purchase_date: new Date,
    unit_price: 839243,
    memo: 'string',
    lifespan: 'string'
  },
  {
    id: 4372948,
    name: 'string',
    payment_id: 43298940,
    amount: 4839,
    department: 'string',
    location: 'string',
    description: 'string',
    category: 'string',
    purchase_date: new Date,
    unit_price: 839243,
    memo: 'string',
    lifespan: 'string'
  },
  {
    id: 4372948,
    name: 'string',
    payment_id: 43298940,
    amount: 4839,
    department: 'string',
    location: 'string',
    description: 'string',
    category: 'string',
    purchase_date: new Date,
    unit_price: 839243,
    memo: 'string',
    lifespan: 'string'
  },
  {
    id: 4372948,
    name: 'string',
    payment_id: 43298940,
    amount: 4839,
    department: 'string',
    location: 'string',
    description: 'string',
    category: 'string',
    purchase_date: new Date,
    unit_price: 839243,
    memo: 'string',
    lifespan: 'string'
  }
]

@Component({
  selector: 'app-inventory-page',
  templateUrl: './inventory-page.component.html',
  styleUrls: ['./inventory-page.component.css']
})
export class InventoryPageComponent implements OnInit {

  constructor(private apiService: ApiService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  searchFunc() {
    this.apiService.readContacts().subscribe((res) => {
      itemData = res;
    })
  }

  openDialog() {
    this.dialog.open(ItemDetailsComponent, {
      data: InvItem
    });
  }


  // Function to send request to backend 
    // Set itemData array to array from Get@() request
  
  // Display array in table on Inventory Page
  displayedColumns: string[] = ['id', 'name', 'amount'];
  dataSource = itemData;

}
