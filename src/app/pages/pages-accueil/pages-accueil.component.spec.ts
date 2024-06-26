import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesAccueilComponent } from './pages-accueil.component';

describe('PagesAccueilComponent', () => {
  let component: PagesAccueilComponent;
  let fixture: ComponentFixture<PagesAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesAccueilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagesAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
