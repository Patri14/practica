import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadocasaComponent } from './listadocasa.component';

describe('ListadocasaComponent', () => {
  let component: ListadocasaComponent;
  let fixture: ComponentFixture<ListadocasaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadocasaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadocasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
