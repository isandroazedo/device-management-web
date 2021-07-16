import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CategoryService } from '../services/category.service';

@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [
    CategoryService
  ]
})
export class ManagementModule { }
