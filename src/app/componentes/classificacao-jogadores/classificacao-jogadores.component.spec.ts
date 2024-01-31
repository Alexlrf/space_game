import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClassificacaoJogadoresComponent } from './classificacao-jogadores.component';


describe('ClassificacaoJogadoresComponent', () => {
  let component: ClassificacaoJogadoresComponent;
  let fixture: ComponentFixture<ClassificacaoJogadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassificacaoJogadoresComponent]
    });
    fixture = TestBed.createComponent(ClassificacaoJogadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
