import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitdialogComponent } from './exitdialog.component';

describe('ExitdialogComponent', () => {
  let component: ExitdialogComponent;
  let fixture: ComponentFixture<ExitdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExitdialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExitdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
