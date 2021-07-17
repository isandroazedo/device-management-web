import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Device } from 'src/app/models/device';
import { DeviceService } from 'src/app/services/device.service';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent extends BaseComponent<Device> implements OnInit, OnDestroy {

  public displayedColumns: string[] = ['id', 'category', 'color', 'partNumber', 'action'];
  public nextRoute = '/management/device';

  constructor(public injector: Injector,
    public service: DeviceService,
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
