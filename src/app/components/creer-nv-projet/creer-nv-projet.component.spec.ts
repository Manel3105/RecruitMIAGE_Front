import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerNvProjetComponent } from './creer-nv-projet.component';

describe('CreerNvProjetComponent', () => {
  let component: CreerNvProjetComponent;
  let fixture: ComponentFixture<CreerNvProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreerNvProjetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreerNvProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
