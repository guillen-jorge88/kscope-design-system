import {
  ChangeDetectionStrategy,
  Component,
  computed,
  forwardRef,
  HostBinding,
  input,
  output,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IconComponent } from '../icon/icon';
import { InputProps } from './models/input.interface';
import { InputStatus, InputType, InputVariant } from './models/input.types';
import {
  DEFAULT_INPUT_SIZE,
  DEFAULT_INPUT_STATUS,
  DEFAULT_INPUT_TYPE,
  DEFAULT_INPUT_VARIANT,
} from './models/input.constants';
import { ComponentSizeT } from '../../types';
import { INPUT_TOKENS } from './models/input.tokens';
import { ButtonComponent } from '../button/button';

@Component({
  selector: 'ks-input',
  standalone: true,
  imports: [IconComponent, ButtonComponent],
  templateUrl: './input.html',
  styleUrl: './input.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements InputProps, ControlValueAccessor {
  /** ID del elemento */
  readonly id = input<string>('');

  /** Nombre del campo */
  readonly name = input<string>('');

  /** Tipo de campo HTML nativo */
  readonly type = input<InputType>(DEFAULT_INPUT_TYPE);

  /** Tamaño del campo */
  readonly size = input<ComponentSizeT>(DEFAULT_INPUT_SIZE);

  /** Variante estética */
  readonly variant = input<InputVariant>(DEFAULT_INPUT_VARIANT);

  /** Estado del campo (error, success, etc.) */
  readonly status = input<InputStatus>(DEFAULT_INPUT_STATUS);

  /** Placeholder */
  readonly placeholder = input<string>('');

  /** Estado deshabilitado */
  readonly disabled = input<boolean>(false);

  /** Modo sólo lectura */
  readonly readonly = input<boolean>(false);

  /** Indica si es obligatorio */
  readonly required = input<boolean>(false);

  /** Icono a la izquierda */
  readonly leftIcon = input<string>('');

  /** Icono a la derecha */
  readonly rightIcon = input<string>('');

  /** Texto prefijo (ej: '$') */
  readonly prefixText = input<string>('');

  /** Texto sufijo (ej: '.com') */
  readonly suffixText = input<string>('');

  /** Muestra un botón para limpiar el contenido */
  readonly clearable = input<boolean>(false);

  /** Eventos emitidos */
  readonly valueChange = output<string>();
  readonly focusEvent = output<FocusEvent>();
  readonly blurEvent = output<FocusEvent>();

  /** Estado interno reactivo del valor */
  protected readonly value = signal<string>('');

  /** Estado interno de foco */
  protected readonly isFocused = signal<boolean>(false);

  /** Estado de visibilidad para contraseña */
  protected readonly showPassword = signal<boolean>(false);

  /** Tipo computado dinámico (maneja la visibilidad de la contraseña) */
  protected readonly computedType = computed(() => {
    if (this.type() === 'password') {
      return this.showPassword() ? 'text' : 'password';
    }
    return this.type();
  });

  // Funciones de ControlValueAccessor
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
    // Manejado automáticamente por el input signal o estado de Reactive Forms
  }

  protected onInput(event: Event): void {
    const inputVal = (event.target as HTMLInputElement).value;
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

  protected clearValue(): void {
    this.value.set('');
    this.onChange('');
    this.valueChange.emit('');
  }

  protected togglePasswordVisibility(): void {
    this.showPassword.update((prev) => !prev);
  }

  @HostBinding('style.--ks-input-height')
  protected get hostHeight(): string {
    const sizeKey = this.size() as keyof typeof INPUT_TOKENS.size;
    return INPUT_TOKENS.size[sizeKey]?.height ?? '40px';
  }

  @HostBinding('style.--ks-input-padding')
  protected get hostPadding(): string {
    const sizeKey = this.size() as keyof typeof INPUT_TOKENS.size;
    return INPUT_TOKENS.size[sizeKey]?.padding ?? '0 12px';
  }

  @HostBinding('style.--ks-input-font-size')
  protected get hostFontSize(): string {
    const sizeKey = this.size() as keyof typeof INPUT_TOKENS.size;
    return INPUT_TOKENS.size[sizeKey]?.fontSize ?? '14px';
  }
}
