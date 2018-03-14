import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevacasaComponent } from './nuevacasa.component';

describe('NuevacasaComponent', () => {
  let component: NuevacasaComponent;
  let fixture: ComponentFixture<NuevacasaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevacasaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevacasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
