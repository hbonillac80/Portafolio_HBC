import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiVidaLaboralComponent } from './mi-vida-laboral.component';

describe('MiVidaLaboralComponent', () => {
  let component: MiVidaLaboralComponent;
  let fixture: ComponentFixture<MiVidaLaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiVidaLaboralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiVidaLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
