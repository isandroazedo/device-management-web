import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent extends BaseComponent<Category> implements OnInit, OnDestroy {
  public displayedColumns: string[] = ['id', 'name', 'action'];
  public nextRoute = '/management/category';

  constructor(public injector: Injector,
    public service: CategoryService,
    protected toastr: ToastrService
  ) {
    super(injector, toastr, service);
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.search();
  }

  public createFormGroup() {
  }

  protected getNextRoute(): string {
    return this.nextRoute;
  }

}
