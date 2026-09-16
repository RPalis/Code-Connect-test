export type InputFieldState = 'Disabled' | 'Default' | 'Error';
export type InputFieldValueType = 'Default' | 'Placeholder';

export type InputFieldProps = {
  className?: string;
  description?: string;
  error?: string;
  hasDescription?: boolean;
  hasError?: boolean;
  hasLabel?: boolean;
  label?: string;
  state?: InputFieldState;
  value?: string;
  valueType?: InputFieldValueType;
};

export function InputField({
  className,
  description = 'Description',
  error = 'Error',
  hasDescription = false,
  hasError = false,
  hasLabel = true,
  label = 'Label',
  state = 'Default',
  value = 'Value',
  valueType = 'Default',
}: InputFieldProps) {
  const isDisabled = state === 'Disabled';
  const isError = state === 'Error';

  return (
    <label className={`sds-input-field ${className ?? ''}`} data-name="Input Field">
      {!isDisabled && hasLabel && <span className="sds-input-field__label">{label}</span>}
      {isDisabled && hasLabel && <span className="sds-input-field__label sds-input-field__label--disabled">{label}</span>}
      {!isDisabled && hasDescription && <span className="sds-input-field__description">{description}</span>}
      {isDisabled && hasDescription && <span className="sds-input-field__description">{description}</span>}
      <span className={`sds-input-field__control sds-input-field__control--${state.toLowerCase()}${valueType === 'Placeholder' ? ' sds-input-field__control--placeholder' : ''}`}>
        <input
          aria-invalid={isError}
          disabled={isDisabled}
          placeholder={valueType === 'Placeholder' ? value : undefined}
          value={valueType === 'Default' ? value : undefined}
          readOnly
        />
      </span>
      {!isDisabled && state === 'Default' && hasError && <span className="sds-input-field__error">{error}</span>}
      {isError && hasError && <span className="sds-input-field__error">{error}</span>}
      {isDisabled && hasError && <span className="sds-input-field__error">{error}</span>}
    </label>
  );
}