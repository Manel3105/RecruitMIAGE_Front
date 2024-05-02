import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesSignInComponent } from './pages-sign-in.component';

describe('PagesSignInComponent', () => {
  let component: PagesSignInComponent;
  let fixture: ComponentFixture<PagesSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesSignInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagesSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
