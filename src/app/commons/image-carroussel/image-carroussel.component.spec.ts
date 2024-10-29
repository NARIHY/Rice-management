import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCarrousselComponent } from './image-carroussel.component';

describe('ImageCarrousselComponent', () => {
  let component: ImageCarrousselComponent;
  let fixture: ComponentFixture<ImageCarrousselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageCarrousselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageCarrousselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
