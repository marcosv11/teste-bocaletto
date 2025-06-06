import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsapButtonFloatComponent } from './whatsap-button-float.component';

describe('WhatsapButtonFloatComponent', () => {
  let component: WhatsapButtonFloatComponent;
  let fixture: ComponentFixture<WhatsapButtonFloatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsapButtonFloatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatsapButtonFloatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
