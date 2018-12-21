import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IMan} from './man';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MenService {

    private readonly API_URL = 'http://localhost:3000/awesomes';

    constructor(private http: HttpClient) {
    }

    getAwesomes(count = 5): Observable<IMan[]> {
        return this.http.get<IMan[]>(this.API_URL).pipe(
            map(response => response.filter((todo, i) => i < count))
        );
    }

    getAwesomeById(id: number): Observable<IMan> {
        return this.http.get<IMan>(`${this.API_URL}/${id}`);
    }

    deleteAwesome(id: number): Observable<any> {
        return this.http.delete<IMan>(`${this.API_URL}/${id}`);
    }

    createAwesome(awesome: Partial<IMan>): Observable<IMan> {
        return this.http.post<IMan>(this.API_URL, awesome);
    }

    updateAwesome(awesome: IMan): Observable<IMan> {
        return this.http.patch<IMan>(`${this.API_URL}/${awesome.id}`, awesome);
    }
}
