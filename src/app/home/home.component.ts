import { Component, OnInit } from '@angular/core';
import { PublishingABCService } from '../publishing-abc.service';
import { PublishingService } from '../publishing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private publishingService: PublishingService,
    private publishingABCService: PublishingABCService
    ) { }

  ngOnInit(): void {
  }


  addStepThree(){
    this.publishingService.addStepThree();
  }

  addStepFour(){
    this.publishingService.addStepFour();
  }

  addStepC(){
    this.publishingABCService.addStepC();
  }

  addStepD(){
    this.publishingABCService.addStepD();
  }

}
