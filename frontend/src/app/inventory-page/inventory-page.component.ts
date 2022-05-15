import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { InvItem } from '../inv-item';
import { ItemDetailsComponent } from './item-details/item-details.component';

@Component({
  selector: 'app-inventory-page',
  templateUrl: './inventory-page.component.html',
  styleUrls: ['./inventory-page.component.css']
})
export class InventoryPageComponent implements OnInit {

  constructor(private apiService: ApiService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.listFunc();
  }

  searchFunc() {
    this.apiService.readItem().subscribe((res) => {
      this.dataSource.push(res);
    })
  }

  listFunc() {
    this.apiService.readItems().subscribe((res) => {
      console.log(res)
      this.dataSource = res;
    })
  }

  openDialog() {
    this.dialog.open(ItemDetailsComponent, {
      data: this.clickedRow
    });

  }


  // Function to send request to backend 
    // Set itemData array to array from Get@() request
  
  // Display array in table on Inventory Page
  displayedColumns: string[] = ['id', 'name', 'amount'];
  dataSource: InvItem[] = [];
  clickedRow = new Set<InvItem>()

}

