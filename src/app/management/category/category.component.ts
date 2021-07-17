import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { takeUntil } from 'rxjs/operators';
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

  public search(): void {
    this.service.getAll()
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(response => {
        this.dataSource.data = response;
    });
  }

  public remove(id: number) {
    this.service.delete(id)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(() => {
      this.toastr.success('Category removed successfully.')
      this.search();
    });
  }

  protected getNextRoute(): string {
    return this.nextRoute;
  }

}
