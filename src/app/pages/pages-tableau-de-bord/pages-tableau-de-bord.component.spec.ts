import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesTableauDeBordComponent } from './pages-tableau-de-bord.component';

describe('PagesTableauDeBordComponent', () => {
  let component: PagesTableauDeBordComponent;
  let fixture: ComponentFixture<PagesTableauDeBordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesTableauDeBordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagesTableauDeBordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
