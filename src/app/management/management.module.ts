import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { MatTableModule } from '@angular/material/table';
import { CategoryService } from '../services/category.service';

@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  providers: [
    CategoryService
  ]
})
export class ManagementModule { }
