import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnAtrasComponent } from './btn-atras.component';

describe('BtnAtrasComponent', () => {
  let component: BtnAtrasComponent;
  let fixture: ComponentFixture<BtnAtrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnAtrasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnAtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
