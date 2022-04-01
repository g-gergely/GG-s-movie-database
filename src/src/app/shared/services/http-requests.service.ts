import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IVideoSnipet } from "src/app/video-viewer/video-list/video-snipet.interface";

@Injectable({
    providedIn: 'root',
})

export class HttpRequestsService {

    constructor(private http: HttpClient) {
    }

    getVideoData(): Observable<IVideoSnipet> {
       return this.http.get<IVideoSnipet>('https://api.themoviedb.org/3/movie/popular?api_key=e2f1613941375f36068d77452af7d938&language=en-US&page=1')
       .pipe(catchError(this.handleError<IVideoSnipet>('getVideoData')));
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        }
    }
}