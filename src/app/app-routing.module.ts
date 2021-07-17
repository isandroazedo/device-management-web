import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CategoryItemComponent } from './management/category/category-item/category-item.component';
import { CategoryComponent } from './management/category/category.component';
import { DeviceItemComponent } from './management/device/device-item/device-item.component';
import { DeviceComponent } from './management/device/device.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'management/category', component: CategoryComponent },
  { path: "management/category/:action", component: CategoryItemComponent },
  { path: 'management/device', component: DeviceComponent },
  { path: "management/device/:action", component: DeviceItemComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
