import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { URLS } from "../app.url";
import { Device } from "../models/device";
import { BaseService } from "./base.service";

@Injectable()
export class DeviceService extends BaseService<Device> {
    constructor(public http: HttpClient) {
        super(http, URLS.DEVICE);
    }
}