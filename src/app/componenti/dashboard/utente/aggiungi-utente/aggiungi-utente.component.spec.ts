import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiUtenteComponent } from './aggiungi-utente.component';

describe('AggiungiUtenteComponent', () => {
  let component: AggiungiUtenteComponent;
  let fixture: ComponentFixture<AggiungiUtenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggiungiUtenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggiungiUtenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
