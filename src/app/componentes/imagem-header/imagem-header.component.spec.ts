import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagemHeaderComponent } from './imagem-header.component';

describe('ImagemHeaderComponent', () => {
  let component: ImagemHeaderComponent;
  let fixture: ComponentFixture<ImagemHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagemHeaderComponent]
    });
    fixture = TestBed.createComponent(ImagemHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
