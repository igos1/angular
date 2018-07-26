import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page.component';
import { AuthorizationService } from '../../services/authorization/authorization.service';
import { By } from '@angular/platform-browser';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let authService: Partial<AuthorizationService>;

  beforeEach(async(() => {

    authService = {
      getUserInfo: jasmine.createSpy('getUserInfo'),
      isAuthenticated: jasmine.createSpy('isAuthenticated'),
      logout: jasmine.createSpy('logout'),
      login: jasmine.createSpy('login'),
      goToHome: jasmine.createSpy('goToHome')
    };
    TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
      imports: [FormsModule],
      providers: [{ provide: AuthorizationService, useValue: authService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call login from service', () => {
    component.loginIn('log', 'pas')
    expect(authService.login).toHaveBeenCalled();
  });
  it('should call login after click', () => {

    const loginBut = fixture.debugElement.query(By.css('.LoginBut'));
    const emailDeb = fixture.debugElement.query(By.css('.email'));
    let emailInput = emailDeb.nativeElement;
    emailInput.value = 'email';
    const passwordDeb = fixture.debugElement.query(By.css('.password'));
    let passwordInput = passwordDeb.nativeElement;
    passwordInput.value = 'password';
    emailInput.dispatchEvent(new Event('input'));
    passwordInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    loginBut.triggerEventHandler('click', null);
    expect(authService.login).toHaveBeenCalled();
  });
});
