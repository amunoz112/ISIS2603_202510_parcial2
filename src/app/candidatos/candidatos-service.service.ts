import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidato } from './candidato';
import { environment } from '../../enviroments/enviroment.development';
@Injectable({
  providedIn: 'root'
})
export class CandidatosServiceService {

constructor(private http: HttpClient) { }
  private apiUrl = environment.baseUrl;
  getCandidatos(): Observable<Candidato[]> {
    return this.http.get<Candidato[]>(this.apiUrl);
  }

  getCandidato(id: string): Observable<Candidato> {
    return this.http.get<Candidato>(this.apiUrl + '/' + id);
  }

    ngOnInit() {
    this.getCandidatos();
  }
}
