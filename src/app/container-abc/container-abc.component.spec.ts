import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerABCComponent } from './container-abc.component';

describe('ContainerABCComponent', () => {
  let component: ContainerABCComponent;
  let fixture: ComponentFixture<ContainerABCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerABCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerABCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
