import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule} from '@angular/material/checkbox';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';

import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatBadgeModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatRadioModule,
    MatMenuModule, 
    MatTableModule, 
    MatPaginatorModule, 
    MatSortModule, 
    MatSnackBarModule, 
    MatDialogModule,
    MatCheckboxModule
  ],
  exports: [
    MatButtonModule,
    MatBadgeModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatDatepickerModule,  
    MatRadioModule, MatMenuModule,
    MatTableModule, MatPaginatorModule, MatSortModule, MatCheckboxModule, MatSnackBarModule, MatDialogModule
  ]
})

// tslint:disable-next-line:eofline
export class AppMaterialModule { }