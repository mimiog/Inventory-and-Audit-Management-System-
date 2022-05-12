import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { InvItem } from '../inv-item';
import { ItemDetailsComponent } from './item-details/item-details.component';


export var itemData: InvItem[] = [

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
    this.apiService.readItems().subscribe((res) => {
      itemData = res;
    })
  }

  openDialog() {
    this.dialog.open(ItemDetailsComponent, {
      data: this.clickedRow
    });

  }

  update(item: InvItem) {
    var index = itemData.findIndex(item => {
      item.id == item.id
    });
    itemData[index] = item;
  }


  // Function to send request to backend 
    // Set itemData array to array from Get@() request
  
  // Display array in table on Inventory Page
  displayedColumns: string[] = ['id', 'name', 'amount'];
  dataSource = itemData;
  clickedRow = new Set<InvItem>()

}

