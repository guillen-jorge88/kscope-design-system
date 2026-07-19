import { ComponentFixture, TestBed } from '@testing-browser/angular'; // Adaptado a tu suite de pruebas
import { IconComponent } from './icon';
import { ICON_TOKENS } from './icon.tokens';

describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
  });

  it('should create the icon component instance', () => {
    expect(component).toBeTruthy();
  });

  it('should apply correct dimensions based on ComponentSize token mapping', () => {
    // Seteamos la entrada usando la API de testing de Signals
    fixture.componentRef.setInput('name', 'user');
    fixture.componentRef.setInput('size', 'lg');
    fixture.detectChanges();

    const svgElement = fixture.nativeElement.querySelector('svg');
    expect(svgElement.getAttribute('width')).toBe(ICON_TOKENS.size.lg);
    expect(svgElement.getAttribute('height')).toBe(ICON_TOKENS.size.lg);
  });

  it('should support custom hexadecimal stroke override colors', () => {
    const customHex = '#FF5733';
    fixture.componentRef.setInput('name', 'settings');
    fixture.componentRef.setInput('customColor', customHex);
    fixture.detectChanges();

    const svgElement = fixture.nativeElement.querySelector('svg');
    expect(svgElement.style.color).toBe('rgb(255, 87, 51)'); // El navegador parsea a RGB en estilos computados
  });

  it('should include accessibility tags to avoid screen reader double-announcements', () => {
    fixture.componentRef.setInput('name', 'home');
    fixture.detectChanges();

    const svgElement = fixture.nativeElement.querySelector('svg');
    expect(svgElement.getAttribute('aria-hidden')).toBe('true');
    expect(svgElement.getAttribute('focusable')).toBe('false');
  });
});
