import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { CategoryService } from '../services/category.service';
import { CategoryItemComponent } from './category/category-item/category-item.component';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    CategoryComponent,
    CategoryItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [
    CategoryService
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ManagementModule { }
