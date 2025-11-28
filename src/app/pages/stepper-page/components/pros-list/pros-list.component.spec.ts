import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsListComponent } from './pros-list.component';

describe('ProsListComponent', () => {
  let component: ProsListComponent;
  let fixture: ComponentFixture<ProsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
