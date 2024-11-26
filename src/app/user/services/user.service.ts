import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environment.prod';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private readonly API_CONFIG = {
    baseUrl: environment.API_URL,
    version: 'v1',
    usersEndpoint: 'users',
    rolesEndpoint: 'roles'
  } as const;

  private get usersApiUrl(): string {
    return `${this.API_CONFIG.baseUrl}/api/${this.API_CONFIG.version}/${this.API_CONFIG.usersEndpoint}`;
  }

  private get rolesApiUrl(): string {
    return `${this.API_CONFIG.baseUrl}/api/${this.API_CONFIG.version}/${this.API_CONFIG.rolesEndpoint}`;
  }

  constructor(private readonly http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.usersApiUrl).pipe(catchError(this.handleError));
  }

  createUser(data: any): Observable<any> {
    return this.http.post<any>(this.usersApiUrl, data).pipe(catchError(this.handleError));
  }

  searchUser(searchData: string): Observable<any[]> {
    const params = { search_data: searchData };
    return this.http.get<any[]>(this.usersApiUrl, { params }).pipe(catchError(this.handleError));
  }

  getActiveRoles(): Observable<any[]> {
    return this.http.get<any[]>(this.rolesApiUrl, { params: { is_active: 'true' } }).pipe(catchError(this.handleError));
  }

  getUserById(userId: string): Observable<any> {
    return this.http.get<any>(`${this.usersApiUrl}/${userId}`).pipe(catchError(this.handleError));
  }

  updateUser(userId: string, data: any): Observable<any> {
    return this.http.patch<any>(`${this.usersApiUrl}/${userId}`, data).pipe(catchError(this.handleError));
  }

  deleteUser(userId: string): Observable<any> {
    return this.http.delete<any>(`${this.usersApiUrl}/${userId}`).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An error occurred';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
