import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagejoblistComponent } from './managejoblist.component';

describe('ManagejoblistComponent', () => {
  let component: ManagejoblistComponent;
  let fixture: ComponentFixture<ManagejoblistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagejoblistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagejoblistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
