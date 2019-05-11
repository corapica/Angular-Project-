import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsidenavbarUserComponent } from './asidenavbar-user.component';

describe('AsidenavbarUserComponent', () => {
  let component: AsidenavbarUserComponent;
  let fixture: ComponentFixture<AsidenavbarUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsidenavbarUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsidenavbarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
