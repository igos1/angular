import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthorizationService } from '../../services/authorization/authorization.service';
import { By } from '@angular/platform-browser';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let authService: Partial<AuthorizationService>;

  beforeEach(async(() => {

    authService = {
      getUserInfo: jasmine.createSpy('getUserInfo').and.returnValue('email'),
      isAuthenticated: jasmine.createSpy('isAuthenticated').and.returnValue(true),
      logout: jasmine.createSpy('logout'),
      login: jasmine.createSpy('login'),
      goToHome: jasmine.createSpy('goToHome')
    };
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: AuthorizationService, useValue: authService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show login', () => {
    
    const LoginDeb = fixture.debugElement.query(By.css('.Login'));
    const Login = LoginDeb.nativeElement;
    expect(Login.textContent).toContain('email');

  });

  it('should call getUserInfo from service', () => {
    fixture.detectChanges();
    expect(authService.getUserInfo).toHaveBeenCalled();

  });
  it('should call isUserAuthorized from service', () => {
    component.isUserAuthorized();
    expect(authService.isAuthenticated).toHaveBeenCalled();

  });
  it('should call logOff from service', () => {
    const logOff = fixture.debugElement.query(By.css('.logOff'));
    logOff.triggerEventHandler('click', null);
    expect(authService.logout).toHaveBeenCalled();
  });

});
