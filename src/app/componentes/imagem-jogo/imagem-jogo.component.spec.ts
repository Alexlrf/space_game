import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagemJogoComponent } from './imagem-jogo.component';

describe('ImagemJogoComponent', () => {
  let component: ImagemJogoComponent;
  let fixture: ComponentFixture<ImagemJogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagemJogoComponent]
    });
    fixture = TestBed.createComponent(ImagemJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
