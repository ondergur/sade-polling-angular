import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestChoiceComponent } from './test-choice.component';

describe('TestChoiceComponent', () => {
  let component: TestChoiceComponent;
  let fixture: ComponentFixture<TestChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
