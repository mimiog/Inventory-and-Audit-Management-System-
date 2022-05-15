import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NewItem } from '../new-item';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {

  constructor(private apiService: ApiService) { }



  addItem = new FormGroup({
    name: new FormControl(),
    payment_id: new FormControl(),
    amount: new FormControl(),
    department: new FormControl(),
    location: new FormControl(),
    description: new FormControl(''),
    category: new FormControl(),
    purchase_date: new FormControl(),
    unit_price: new FormControl(),
    auditable: new FormControl(),
    memo: new FormControl(''),
    lifespan: new FormControl()
  })

  ngOnInit(): void {
  }

  onSubmit() {
    var item = new NewItem();
    item = this.addItem.value;
    this.apiService.createItem(item).subscribe();
    console.log("Submitted!");
    alert("New Item Created!");
    this.addItem.reset();
  }

}
