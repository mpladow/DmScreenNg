import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpErrorResponse,
  HTTP_INTERCEPTORS
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            if (error.error !== ""){
              return throwError(error.error);
            }
            return throwError(error.statusText);
          }
          const applicationError = error.headers.get("Application-Error");
          if (applicationError) {
            console.error(applicationError);
            return throwError(applicationError);
          }
          // if using .net 2.2 the error is returned inside of another error object.
          // so use const serverError = error.error.errors; lol
          const serverError = error.error;
          let modelStateErrors = "";
          if (serverError && typeof serverError === "object") {
            for (const key in serverError) {
              if (serverError[key]) {
                modelStateErrors += serverError[key] + "\n";
              }
            }
          }
          return throwError(modelStateErrors || serverError || "Server Error");
        }
      })
    );
  }
}

export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true
};
