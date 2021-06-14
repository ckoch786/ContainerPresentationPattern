import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Publishing } from './publishing';

@Injectable({
  providedIn: 'root'
})
export class PublishingService implements Publishing  {

  private _subject: BehaviorSubject<string[]>;
  private _initialSteps = [
                          "Step one",
                          "Step two"
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

  addStepThree() {
    this._steps.push("Step three");
    this.progress();
  }

  addStepFour() {
    this._steps.push("Step four");
    this.progress();
  }
}
