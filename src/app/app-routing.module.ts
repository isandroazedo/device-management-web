import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryItemComponent } from './management/category/category-item/category-item.component';
import { CategoryComponent } from './management/category/category.component';

const routes: Routes = [
  { path: '', redirectTo: 'management/category', pathMatch: 'full' },
  { path: 'management/category', component: CategoryComponent },
  { path: "management/category/:action", component: CategoryItemComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
