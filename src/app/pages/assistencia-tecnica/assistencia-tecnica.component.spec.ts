import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistenciaTecnicaComponent } from './assistencia-tecnica.component';

describe('AssistenciaTecnicaComponent', () => {
  let component: AssistenciaTecnicaComponent;
  let fixture: ComponentFixture<AssistenciaTecnicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssistenciaTecnicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssistenciaTecnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
