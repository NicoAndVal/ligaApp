import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import {MatSortModule} from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';



 @NgModule({
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatGridListModule,
    MatSelectModule,
    MatSortModule,
     MatTabsModule,
     MatProgressSpinnerModule,
     MatTableModule
  ]
})
export class MaterialModule { }
