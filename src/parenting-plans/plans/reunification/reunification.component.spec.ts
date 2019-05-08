import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReunificationComponent } from './reunification.component';

describe('ReunificationComponent', () => {
  let component: ReunificationComponent;
  let fixture: ComponentFixture<ReunificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReunificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReunificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
