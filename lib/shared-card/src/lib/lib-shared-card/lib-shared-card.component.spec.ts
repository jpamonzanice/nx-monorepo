import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibSharedCardComponent } from './lib-shared-card.component';

describe('LibSharedCardComponent', () => {
  let component: LibSharedCardComponent;
  let fixture: ComponentFixture<LibSharedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibSharedCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibSharedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
