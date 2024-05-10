import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewProjectComponent } from './form-new-project.component';

describe('FormNewProjectComponent', () => {
  let component: FormNewProjectComponent;
  let fixture: ComponentFixture<FormNewProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormNewProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormNewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
