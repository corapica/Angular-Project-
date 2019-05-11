import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectKeyComponent } from './project-key.component';

describe('ProjectKeyComponent', () => {
  let component: ProjectKeyComponent;
  let fixture: ComponentFixture<ProjectKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
