import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { DirHomePageComponent } from './dir-home-page/dir-home-page.component';
import { AudHomePageComponent } from './aud-home-page/aud-home-page.component';
import { InventoryPageComponent } from './inventory-page/inventory-page.component';
import { AuditsPageComponent } from './audits-page/audits-page.component';
import { EditItemsComponent } from './inventory-page/item-details/edit-items/edit-items.component';
import { AddItemsComponent } from './add-items/add-items.component';
import { ItemDetailsComponent } from './inventory-page/item-details/item-details.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { NewItemsComponent } from './new-items/new-items.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddnewitemComponent } from './addnewitem/addnewitem.component';

@NgModule({
  declarations: [	
    AppComponent,
    AdminHomePageComponent,
    DirHomePageComponent,
    AudHomePageComponent,
    InventoryPageComponent,
    AuditsPageComponent,
    ItemDetailsComponent,
    NewItemsComponent,
    EditItemsComponent,
    AddItemsComponent,
    ItemDetailsComponent,
    AddnewitemComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    HttpClientModule,
    MatSelectModule,
    FormsModule,
    RouterModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
