import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    // Show all items in inventory on initialization
    this.listFunc();
  }
  
  searchForm = new FormGroup ({
    search: new FormControl
  });

  // Search inventory for one item
  searchFunc() {
    this.apiService.readItems().subscribe((res) => {
      this.dataSource = [];
      res.forEach(item => {
        if (item.name.toLowerCase().includes(this.searchForm.value.search) || item.id == this.searchForm.value.search) {
          this.dataSource.push(item);
        }
      });
    });
  }

  listFunc() {
    this.apiService.readItems().subscribe((res) => {
      console.log(res)
      this.dataSource = res;
    })
  }

  remVal() {
    var sum = 0;
    this.dataSource.forEach(item => {
      sum = sum + item.amount;
    });
    return sum;
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
  clickedRow = new Set<InvItem>();
}

