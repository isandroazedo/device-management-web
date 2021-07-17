import { HttpClient, HttpUserEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from "../../environments/environment";

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
                tap(response => response as unknown as HttpUserEvent<T[]>)
            );
    }

    public delete(id: number): Observable<any> {
        const url = `${this.fullUrl}/${id}/`;
        return this.http.delete<any>(url)
            .pipe(
                tap(response => response as HttpUserEvent<any>)
            );
    }

    public save(entity: T): Observable<T> {
        return this.http.post<T>(this.fullUrl, entity)
            .pipe(
                tap(response => response as unknown as HttpUserEvent<T>)
            );
    }
}