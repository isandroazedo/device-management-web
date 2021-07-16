import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { URLS } from "../app.url";
import { Category } from "../models/category";
import { BaseService } from "./base.service";

@Injectable()
export class CategoryService extends BaseService<Category> {
    constructor(public http: HttpClient) {
        super(http, URLS.CATEGORY);
    }
}