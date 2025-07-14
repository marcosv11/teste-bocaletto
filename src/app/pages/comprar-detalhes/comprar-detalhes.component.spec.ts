import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarDetalhesComponent } from './comprar-detalhes.component';

describe('ComprarDetalhesComponent', () => {
  let component: ComprarDetalhesComponent;
  let fixture: ComponentFixture<ComprarDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComprarDetalhesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComprarDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
