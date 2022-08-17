import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { SelectionBarComponent } from './components/selection-bar/selection-bar.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { PageHeadComponent } from './components/page-head/page-head.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ParkingListComponent } from './components/parking-list/parking-list.component';
import { PageBodyComponent } from './components/page-body/page-body.component';
import { CheckboxesComponent } from './components/checkboxes/checkboxes.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ParkingAreaDetailsComponent } from './components/parking-area-details/parking-area-details.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    SelectionBarComponent,
    PageHeadComponent,
    ParkingListComponent,
    PageBodyComponent,
    CheckboxesComponent,
    ParkingAreaDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
