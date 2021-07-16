import {HttpClient, HttpUserEvent} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {from, Observable} from "rxjs";
import {environment} from "../../environments/environment";

export class BaseService<T> {

    public urlBase: string;
    public fullUrl: string;

    constructor(public http: HttpClient, public path: string) {
        this.urlBase = environment.urlBase;
        this.fullUrl = `${this.urlBase}${path}`;
    }

    public getAll(route?: string): Observable<T[]> {
        const url = route ? `${this.fullUrl}${route}/` : `${this.fullUrl}`;
        return this.http.get<T[]>(url)
            .pipe(
                tap(response => response as unknown as HttpUserEvent<T[]>),
                catchError(ex => from([]))
            );
    }
}