import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { CategoryService } from '../services/category.service';
import { DeviceService } from '../services/device.service';
import { CategoryItemComponent } from './category/category-item/category-item.component';
import { CategoryComponent } from './category/category.component';
import { DeviceItemComponent } from './device/device-item/device-item.component';
import { DeviceComponent } from './device/device.component';


@NgModule({
  declarations: [
    CategoryComponent,
    CategoryItemComponent,
    DeviceComponent,
    DeviceItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [
    CategoryService,
    DeviceService
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ManagementModule { }
