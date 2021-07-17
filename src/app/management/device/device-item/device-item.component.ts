import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { takeUntil } from 'rxjs/operators';
import { Category } from 'src/app/models/category';
import { Device } from 'src/app/models/device';
import { CategoryService } from 'src/app/services/category.service';
import { DeviceService } from 'src/app/services/device.service';
import { BaseComponent } from '../../base.component';

@Component({
  selector: 'app-device-item',
  templateUrl: './device-item.component.html',
  styleUrls: ['./device-item.component.scss']
})
export class DeviceItemComponent extends BaseComponent<Device> implements OnInit {

  public object = new Device();
  public nextRoute = '/management/device';
  public categories: Category[] = [];

  constructor(public injector: Injector, protected toastr: ToastrService,
    public service: DeviceService, public categoryService: CategoryService) { 
    super(injector, toastr, service);
  }

  public ngOnInit() {
    super.ngOnInit();
    this.categoryService.getAll()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(response => {
        this.categories = response;
      });
  }

  public createFormGroup(): void {
    this.formGroup = this.formBuilder.group({
        category: ['', Validators.required],
        color: ['', Validators.required],
        partNumber: ['', Validators.required]
    });
  }

  public cancel() {
    this.goToPage(this.nextRoute);
  }
  

  protected getNextRoute(): string {
    return this.nextRoute;
  }

}
