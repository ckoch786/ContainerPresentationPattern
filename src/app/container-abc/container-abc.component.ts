import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PublishingABCService } from '../publishing-abc.service';

@Component({
  selector: 'app-container-abc',
  templateUrl: './container-abc.component.html',
  styleUrls: ['./container-abc.component.css']
})
export class ContainerABCComponent implements OnInit {

  steps: string[];
  publishingSubscription: Subscription;

  constructor(private publishingService: PublishingABCService) { }

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
