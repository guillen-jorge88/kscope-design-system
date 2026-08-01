import {
  ChangeDetectionStrategy,
  Component,
  computed,
  forwardRef,
  HostBinding,
  input,
  numberAttribute,
  output,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TextareaProps } from './models/textarea.interface';
import { ComponentSizeT } from '../../types';
import {
  DEFAULT_TEXTAREA_RESIZE,
  DEFAULT_TEXTAREA_ROWS,
  DEFAULT_TEXTAREA_SIZE,
  DEFAULT_TEXTAREA_STATUS,
  DEFAULT_TEXTAREA_VARIANT,
} from './models/textarea.constants';
import { TextareaResize, TextareaStatus, TextareaVariant } from './models/textarea.types';
import { TEXTAREA_TOKENS } from './models/textarea.tokens';

@Component({
  selector: 'ks-textarea',
  standalone: true,
  imports: [],
  templateUrl: './textarea.html',
  styleUrl: './textarea.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true,
    },
  ],
})
export class TextareaComponent implements TextareaProps, ControlValueAccessor {
  /** ID del elemento */
  readonly id = input<string>('');

  /** Nombre del campo */
  readonly name = input<string>('');

  /** Tamaño del área de texto */
  readonly size = input<ComponentSizeT>(DEFAULT_TEXTAREA_SIZE);

  /** Variante estética */
  readonly variant = input<TextareaVariant>(DEFAULT_TEXTAREA_VARIANT);

  /** Estado visual de validación */
  readonly status = input<TextareaStatus>(DEFAULT_TEXTAREA_STATUS);

  /** Control de redimensionamiento (`none`, `vertical`, `horizontal`, `both`) */
  readonly resize = input<TextareaResize>(DEFAULT_TEXTAREA_RESIZE);

  /** Número inicial de filas visibles */
  readonly rows = input<number, number | string>(DEFAULT_TEXTAREA_ROWS, {
    transform: numberAttribute,
  });

  /** Longitud máxima de caracteres opcional */
  readonly maxlength = input<number | null, number | string | null>(null, {
    transform: (val) => (val !== null ? numberAttribute(val) : null),
  });

  /** Si es verdadero, muestra el contador de caracteres en la esquina inferior */
  readonly showCharacterCount = input<boolean>(false);

  /** Placeholder */
  readonly placeholder = input<string>('');

  /** Estado deshabilitado */
  readonly disabled = input<boolean>(false);

  /** Modo sólo lectura */
  readonly readonly = input<boolean>(false);

  /** Indica si es obligatorio */
  readonly required = input<boolean>(false);

  /** Eventos emitidos */
  readonly valueChange = output<string>();
  readonly focusEvent = output<FocusEvent>();
  readonly blurEvent = output<FocusEvent>();

  /** Estado interno reactivo del valor */
  protected readonly value = signal<string>('');

  /** Estado interno de foco */
  protected readonly isFocused = signal<boolean>(false);

  /** Conteo dinámico de caracteres */
  protected readonly characterCount = computed(() => this.value().length);

  /** Determina si se alcanzó el límite máximo */
  protected readonly isAtLimit = computed(() => {
    const max = this.maxlength();
    return max !== null && this.characterCount() >= max;
  });

  // ControlValueAccessor implementation
  private onChange: (val: string) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(val: string): void {
    this.value.set(val || '');
  }

  registerOnChange(fn: (val: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Manejado por input signals
  }

  protected onInput(event: Event): void {
    const inputVal = (event.target as HTMLTextAreaElement).value;
    this.value.set(inputVal);
    this.onChange(inputVal);
    this.valueChange.emit(inputVal);
  }

  protected onFocus(event: FocusEvent): void {
    this.isFocused.set(true);
    this.focusEvent.emit(event);
  }

  protected onBlur(event: FocusEvent): void {
    this.isFocused.set(false);
    this.onTouched();
    this.blurEvent.emit(event);
  }

  @HostBinding('style.--ks-textarea-padding')
  protected get hostPadding(): string {
    const sizeKey = this.size() as keyof typeof TEXTAREA_TOKENS.size;
    return TEXTAREA_TOKENS.size[sizeKey]?.padding ?? '10px 12px';
  }

  @HostBinding('style.--ks-textarea-font-size')
  protected get hostFontSize(): string {
    const sizeKey = this.size() as keyof typeof TEXTAREA_TOKENS.size;
    return TEXTAREA_TOKENS.size[sizeKey]?.fontSize ?? '14px';
  }

  @HostBinding('style.--ks-textarea-resize')
  protected get hostResize(): string {
    return this.resize();
  }
}
