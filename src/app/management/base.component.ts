import { Component, Injector, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";
import { NavigationExtras, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Subject } from "rxjs";
import { take, takeUntil } from "rxjs/operators";
import { BaseService } from "../services/base.service";

@Component({
  template: ''
})
export abstract class BaseComponent<T> implements OnInit, OnDestroy {

  protected router: Router;
  public object: T | {};
  public rawObject: T | {};
  public unsubscribe = new Subject();
  public formBuilder: FormBuilder;
  public formGroup: FormGroup;
  public dataSource: MatTableDataSource<T>;
  public service: BaseService<T>;

  protected constructor(public injector: Injector, protected toastr: ToastrService, public _service: BaseService<T>) {
    this.router = injector.get(Router);
    this.dataSource = new MatTableDataSource<T>();
    this.formBuilder = injector.get(FormBuilder);
    this.service = _service;
  }

  public ngOnInit(): void {
    this.createFormGroup();
  }

  public ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public goToPage(route: string): void {
    const extras: NavigationExtras = { queryParamsHandling: "merge" };
    this.router.navigate([route], extras).then();
  }

  public save() {
    Object.assign(this.object, this.rv);
    const data = this.object;
    this.service.save(data as T)
      .pipe(take(1))
      .subscribe((response: any) => {
        this.toastr.success("Success", "Operation performed successfully");
        this.rawObject = response;
        this.goToPage(this.getNextRoute());
      }, (response) => this.toastr.error("Error", "Operation performed unsuccessfully. " + response.error));
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
        this.toastr.success('Removed successfully.')
        this.search();
      }, (err) => this.toastr.error('Remove error. ' + err.error));
  }

  get rv() {
    return this.formGroup.getRawValue();
  }

  public abstract createFormGroup(): void;

  protected abstract getNextRoute(): string;
}