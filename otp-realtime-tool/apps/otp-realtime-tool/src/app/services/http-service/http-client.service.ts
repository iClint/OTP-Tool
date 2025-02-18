import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { httpClientServiceConfig } from './http-client.service.config';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  private config = httpClientServiceConfig;

  constructor(private http: HttpClient) {}

  // Get
  public getWebConfig() {
    return this.http.get(`${this.config.apiUrl}/WebConfigs`);
  }

  public getFixtureList(proposition: string) {
    return this.http.get(`${this.config.apiUrl}/Fixtures/${proposition}`);
  }

  public getFixture(proposition: string, fixtureName: string) {
    return this.http.get(
      `${this.config.apiUrl}/Fixtures/${proposition}/${fixtureName}`
    );
  }

  public getSendPresetMessage(
    proposition: string,
    fixtureName: string
  ): Observable<{ success: boolean; message: string }> {
    return this.http
      .get<{ success: boolean; message: string }>(
        `${this.config.apiUrl}/Messages/${proposition}/${fixtureName}`
      )
      .pipe(
        catchError(this.handleError) // Catch errors globally
      );
  }

  // Post
  public postCustomMessage(message: any) {
    return this.http
      .post<{ success: boolean; message: string }>(
        `${this.config.apiUrl}/Messages`,
        message
      )
      .pipe(catchError(this.handleError));
  }

  public postLocationUpdateMessage(message: any) {
    return this.http
      .post<{ success: boolean; message: string }>(
        `${this.config.apiUrl}/mapUpdate`,
        message
      )
      .pipe(catchError(this.handleError));
  }

  // Handle different types of HTTP errors
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';

    if (error.error instanceof ErrorEvent) {
      // Client-side error (e.g., network issue)
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Server-side error (e.g., 404, 500)
      errorMessage = `Server returned: \ncode ${error.status}, \nmessage: ${error.message}`;
    }

    console.error(errorMessage); // Log error to the console for debugging
    return throwError(() => new Error(errorMessage));
  }
}
