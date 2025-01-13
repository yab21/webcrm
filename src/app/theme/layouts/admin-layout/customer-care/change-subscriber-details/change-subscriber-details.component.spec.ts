import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeSubscriberDetailsComponent } from './change-subscriber-details.component';

describe('ChangeSubscriberDetailsComponent', () => {
  let component: ChangeSubscriberDetailsComponent;
  let fixture: ComponentFixture<ChangeSubscriberDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeSubscriberDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeSubscriberDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
