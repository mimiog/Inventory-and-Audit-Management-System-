import { Component, OnInit, Inject } from '@angular/core';
import { Router } from 'express';
import { InvItem } from '../../inv-item';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: InvItem){}

  ngOnInit(): void {
  }

}
