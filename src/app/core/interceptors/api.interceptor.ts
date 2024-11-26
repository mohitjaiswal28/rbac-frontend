import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

@Injectable()

export class HttpInterceptorService implements HttpInterceptor {
    constructor(private loadingService: LoadingService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Show the loading spinner before making the request
        this.loadingService.show();

        return next.handle(req).pipe(
            finalize(() => {
                // Hide the loading spinner after request is complete
                this.loadingService.hide();
            })
        );
    }
}
