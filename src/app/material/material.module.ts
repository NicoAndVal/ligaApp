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
    MatGridListModule
  ]
})
export class MaterialModule { }
