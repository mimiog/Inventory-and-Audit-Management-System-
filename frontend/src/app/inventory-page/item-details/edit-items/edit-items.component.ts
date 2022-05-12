import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InvItem } from '../../../inv-item';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { itemData } from '../../inventory-page.component';
import { ItemDetailsComponent } from '../item-details.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-edit-items',
  templateUrl: './edit-items.component.html',
  styleUrls: ['./edit-items.component.css']
})
export class EditItemsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: InvItem, public dialog: MatDialog, private apiService: ApiService) { }

  ngOnInit(): void {
  }

  itemForm = new FormGroup({
    id: new FormControl(this.data.id),
    name: new FormControl(this.data.name),
    payment_id: new FormControl(this.data.payment_id),
    amount: new FormControl(this.data.amount),
    department: new FormControl(this.data.department),
    location: new FormControl(this.data.location),
    description: new FormControl(this.data.description),
    category: new FormControl(this.data.category),
    purchase_date: new FormControl(this.data.purchase_date),
    unit_price: new FormControl(this.data.unit_price),
    auditable: new FormControl(this.data.auditable),
    memo: new FormControl(this.data.memo),
    lifespan: new FormControl(this.data.lifespan)
  })

  onSubmit() {
    console.warn(this.itemForm.value);
    this.data = this.itemForm.value;
    this.apiService.updateItem(this.data).subscribe()
  }

  change(id: string) {
    return (<HTMLInputElement>document.getElementById(id)).value
  }

  openDialog() {
    this.dialog.open(ItemDetailsComponent, {
      data: this.data
    });
  }

  save(id: number) {
    var index = itemData.findIndex(item => {
      item.id == id
    });
    console.log('saved')
  }

}