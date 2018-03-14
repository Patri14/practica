import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallecasaComponent } from './detallecasa.component';

describe('DetallecasaComponent', () => {
  let component: DetallecasaComponent;
  let fixture: ComponentFixture<DetallecasaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallecasaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallecasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
