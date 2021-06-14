import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PublishingService } from '../publishing.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, OnDestroy {

  steps: string[];
  publishingSubscription: Subscription;

  constructor(private publishingService: PublishingService) { }

  ngOnInit(): void {
      this.publishingSubscription = this.publishingService.onProgress()
        .subscribe(subject => {
            this.steps = subject;
        });
  }

  ngOnDestroy() {
        this.publishingSubscription.unsubscribe();
  }
}    


