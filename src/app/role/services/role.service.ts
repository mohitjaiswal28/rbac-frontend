import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environment.prod';

@Injectable({
  providedIn: 'root'
})

export class RoleService {
  private readonly API_CONFIG = {
    baseUrl: environment.API_URL,
    version: 'v1',
    endpoint: 'roles'
  } as const;

  private get apiUrl(): string {
    return `${this.API_CONFIG.baseUrl}/api/${this.API_CONFIG.version}/${this.API_CONFIG.endpoint}`;
  }

  constructor(private readonly http: HttpClient) { }

  getRoles(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  searchRole(searchData: string): Observable<any[]> {
    const params = { search_data: searchData };
    return this.http.get<any[]>(this.apiUrl, { params })
      .pipe(catchError(this.handleError));
  }

  createRole(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data)
      .pipe(catchError(this.handleError));
  }

  getRoleById(roleId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${roleId}`)
      .pipe(catchError(this.handleError));
  }

  updateRole(roleId: string, data: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${roleId}`, data)
      .pipe(catchError(this.handleError));
  }

  deleteRole(roleId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${roleId}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An error occurred';

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
