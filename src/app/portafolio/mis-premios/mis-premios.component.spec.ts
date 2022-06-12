import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisPremiosComponent } from './mis-premios.component';

describe('MisPremiosComponent', () => {
  let component: MisPremiosComponent;
  let fixture: ComponentFixture<MisPremiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisPremiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisPremiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
