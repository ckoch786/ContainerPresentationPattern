import { Observable } from "rxjs";

export interface Publishing {
    onProgress(): Observable<string[]>;
}