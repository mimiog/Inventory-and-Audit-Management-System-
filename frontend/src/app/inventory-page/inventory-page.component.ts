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

  // Search inventory for items by ID or name
  searchFunc() {
    this.apiService.readItems().subscribe((res) => {
      this.dataSource = [];
      res.forEach(item => {
        if ((item.name.toLowerCase()+ " ").includes(this.searchForm.value.search) || item.id == this.searchForm.value.search) {
          this.dataSource.push(item);
        }
      });
    });
  }

  // Function to list all items in inventory
  listFunc() {
    this.apiService.readItems().subscribe((res) => {
      console.log(res)
      this.dataSource = res;
    })
  }

  // Calculate remaining value
  remVal() {
    var sum = 0;
    this.dataSource.forEach(item => {
      sum = sum + item.amount;
    });
    return sum;
  }

  // View an item's details
  openDialog() {
    this.dialog.open(ItemDetailsComponent, {
      data: this.clickedRow
    });

  }

  displayedColumns: string[] = ['id', 'name', 'amount'];
  dataSource: InvItem[] = [];
  clickedRow = new Set<InvItem>();
}

