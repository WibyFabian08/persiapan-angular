import { Injectable } from '@angular/core';

import { Observable} from 'rxjs';
import { Hero } from '../interface/hero';

import { HttpClient } from '@angular/common/http';

const baseUrl = "http://localhost:3000"

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${baseUrl}/heroes`)
  }

  getById(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${baseUrl}/heroes/${id}`)
  }
}
