import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InvItem } from '../../inv-item';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditItemsComponent } from './edit-items/edit-items.component';


@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: InvItem, public dialog: MatDialog){}

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(EditItemsComponent, {
      data: this.data
    });
  }

  newnew = this.data;

}
