import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinesList } from './medicines-list';

describe('MedicinesList', () => {
  let component: MedicinesList;
  let fixture: ComponentFixture<MedicinesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicinesList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicinesList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
