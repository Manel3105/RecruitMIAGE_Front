import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInFormComponent } from './login-in-form.component';

describe('LoginInFormComponent', () => {
  let component: LoginInFormComponent;
  let fixture: ComponentFixture<LoginInFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginInFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginInFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
