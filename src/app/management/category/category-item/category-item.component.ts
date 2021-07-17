import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { BaseComponent } from '../../base.component';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent extends BaseComponent<Category> implements OnInit {
  public object = new Category();
  public nextRoute = '/management/category';

  constructor(public injector: Injector, protected toastr: ToastrService,
    public service: CategoryService) { 
    super(injector, toastr, service);
  }

  public createFormGroup(): void {
    this.formGroup = this.formBuilder.group({
        name: ['', Validators.required]
    });
  }

  public cancel() {
    this.goToPage(this.nextRoute);
  }

  protected getNextRoute(): string {
    return this.nextRoute;
  }

}
