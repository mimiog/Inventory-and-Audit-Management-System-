import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InvItem } from '../../inv-item';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ItemDetailsComponent } from '../item-details/item-details.component';
import { clickedRow } from '../inventory-page.component';

@Component({
  selector: 'app-edit-items',
  templateUrl: './edit-items.component.html',
  styleUrls: ['./edit-items.component.css']
})
export class EditItemsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: InvItem,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(ItemDetailsComponent,{
        data: clickedRow
    });
  }

}
