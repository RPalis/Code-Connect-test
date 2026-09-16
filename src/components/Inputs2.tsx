export type SliderFieldProps = { className?: string; description?: string; hasDescription?: boolean; hasLabel?: boolean; label?: string; state?: 'Default' | 'Disabled' };

export function SliderField({ className, description = 'Description', hasDescription = true, hasLabel = true, label = 'Label', state = 'Default' }: SliderFieldProps) {
  return <div className={`sds-slider-field sds-slider-field--${state.toLowerCase()} ${className ?? ''}`}>{hasLabel && <div className="sds-slider-field__label"><span>{label}</span><span>$0-100</span></div>}<input type="range" disabled={state === 'Disabled'} />{hasDescription && <small>{description}</small>}</div>;
}

export type SwitchFieldProps = { className?: string; description?: string; hasDescription?: boolean; hasLabel?: boolean; label?: string; state?: 'Disabled' | 'Default'; valueType?: boolean };

export function SwitchField({ className, description = 'Description', hasDescription = true, hasLabel = true, label = 'Label', state = 'Default', valueType = true }: SwitchFieldProps) {
  return <label className={`sds-switch-field sds-switch-field--${state.toLowerCase()} ${className ?? ''}`}><span>{hasLabel ? label : ''}</span><input type="checkbox" checked={valueType} disabled={state === 'Disabled'} readOnly />{hasDescription && <small>{description}</small>}</label>;
}

export type TextareaFieldProps = { className?: string; description?: string; error?: string; hasDescription?: boolean; hasError?: boolean; hasLabel?: boolean; label?: string; state?: 'Default' | 'Disabled' | 'Error'; value?: string; valueType?: 'Default' | 'Placeholder' };

export function TextareaField({ className, description = 'Description', error = 'Error', hasDescription = false, hasError = false, hasLabel = true, label = 'Label', state = 'Default', value = 'Value', valueType = 'Default' }: TextareaFieldProps) {
  return <label className={`sds-textarea-field sds-textarea-field--${state.toLowerCase()} ${className ?? ''}`}>{hasLabel && <span>{label}</span>}{hasDescription && <small>{description}</small>}<textarea disabled={state === 'Disabled'} placeholder={valueType === 'Placeholder' ? value : undefined} defaultValue={valueType === 'Default' ? value : undefined} />{hasError && <small className="sds-field-error">{error}</small>}</label>;
}

export type DatePickerFieldProps = { className?: string; description?: string; error?: string; hasDescription?: boolean; hasError?: boolean; hasLabel?: boolean; label?: string; state?: 'Default' | 'Error' | 'Disabled'; value?: string; valueType?: 'Default' | 'Placeholder' };

export function DatePickerField({ className, description = 'Description', error = 'Error', hasDescription = false, hasError = true, hasLabel = true, label = 'Label', state = 'Default', value = 'Value', valueType = 'Default' }: DatePickerFieldProps) {
  return <label className={`sds-date-picker-field sds-date-picker-field--${state.toLowerCase()} ${className ?? ''}`}>{hasLabel && <span>{label}</span>}{hasDescription && <small>{description}</small>}<span className="sds-date-picker-field__control"><input disabled={state === 'Disabled'} placeholder={valueType === 'Placeholder' ? value : undefined} defaultValue={valueType === 'Default' ? value : undefined} readOnly /> <span aria-hidden="true">📅</span></span>{hasError && <small className="sds-field-error">{error}</small>}</label>;
}

export type DateInputFieldProps = { className?: string; description?: string; error?: string; hasDescription?: boolean; hasError?: boolean; hasLabel?: boolean; label?: string; state?: 'Default' | 'Disabled' | 'Error'; valueType?: 'Default' | 'Placeholder'; day?: string; month?: string; year?: string };

export function DateInputField({ className, description = 'Description', error = 'Error', hasDescription = false, hasError = false, hasLabel = true, label = 'Label', state = 'Default', valueType = 'Default', day = 'DD', month = 'MM', year = 'YYYY' }: DateInputFieldProps) {
  return <label className={`sds-date-input-field sds-date-input-field--${state.toLowerCase()} ${className ?? ''}`}>{hasLabel && <span>{label}</span>}{hasDescription && <small>{description}</small>}<span className="sds-date-input-field__control"><input disabled={state === 'Disabled'} placeholder={valueType === 'Placeholder' ? day : day} /><input disabled={state === 'Disabled'} placeholder={month} /><input disabled={state === 'Disabled'} placeholder={year} /></span>{hasError && <small className="sds-field-error">{error}</small>}</label>;
}
