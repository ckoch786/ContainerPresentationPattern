import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Publishing } from './publishing';

@Injectable({
  providedIn: 'root'
})
export class PublishingABCService implements Publishing {

  private _subject: BehaviorSubject<string[]>;
  private _initialSteps = [
                          "Step A",
                          "Step B"
                        ];

  private _steps: string[];

  constructor() { 
    this._steps = this._initialSteps;
    this._subject = new BehaviorSubject<string[]>(this._steps);
  }

  onProgress(): Observable<string[]> {
    return this._subject.asObservable();
  }

  private progress(): void {
    this._subject.next(this._steps);
  }

  addStepC() {
    this._steps.push("Step C");
    this.progress();
  }

  addStepD() {
    this._steps.push("Step D");
    this.progress();
  }
}
