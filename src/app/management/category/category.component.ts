import { HttpClient } from '@angular/common/http';
import {Component, InjectionToken, Injector, OnDestroy, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { URLS } from 'src/app/app.url';
import { Category } from 'src/app/models/category';
import { BaseService } from 'src/app/services/base.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'name', 'action'];

  public dataSource: MatTableDataSource<Category>;
  public http: HttpClient;
  public unsubscribe = new Subject();

  constructor(public injector: Injector, public service: CategoryService, 
    private toastr: ToastrService) {
    this.dataSource = new MatTableDataSource<Category>();
  }

  public ngOnInit(): void {
    this.search();
  }

  public ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
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

}
