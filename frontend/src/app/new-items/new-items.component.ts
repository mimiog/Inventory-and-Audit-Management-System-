import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-new-items',
  templateUrl: './new-items.component.html',
  styleUrls: ['./new-items.component.css']
})


export class NewItemsComponent implements OnInit {

  // dialogRef: MatDialogRef<any, any> | undefined ;
  // constructor(public dialog: MatDialog) { }

  ngOnInit() {
    // const dialogRef = this.dialog.open(NewItemsComponent, {
    //   width: '98vw', //sets width of dialog
    //   height:'70vh', //sets width of dialog
    //   maxWidth: '100vw', //overrides default width of dialog
    //   maxHeight: '100vh', //overrides default height of dialog
    //   disableClose: true //disables closing on clicking outside box. You will need to make a dedicated button to close
    // });
  }
  

//   openDialog() {
//     this.dialogRef = this.dialog.open(NewItemsComponent, {
//         height: '40%',
//         width: '60%'
//     });
//     this.dialogRef.afterClosed().subscribe((result: any) => {
//         this.dialogRef
//     });
// }

}
