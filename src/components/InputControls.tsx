export type RadioFieldProps = { className?: string; description?: string; hasDescription?: boolean; label?: string; state?: 'Default' | 'Disabled'; valueType?: boolean };

export function RadioField({ className, description = 'Description', hasDescription = true, label = 'Label', state = 'Default', valueType = true }: RadioFieldProps) {
  return <label className={`sds-radio-field sds-radio-field--${state.toLowerCase()} ${className ?? ''}`}><span className={`sds-radio ${valueType ? 'sds-radio--checked' : ''}`} /> <span>{label}</span>{hasDescription && <small>{description}</small>}</label>;
}

export function RadioGroup() {
  return <div className="sds-radio-group"><RadioField /><RadioField label="Label" valueType={false} /><RadioField label="Label" valueType={false} /></div>;
}

export function CheckboxGroup() {
  return <div className="sds-checkbox-group"><span>Checkbox Group</span><label><input type="checkbox" defaultChecked /> Label</label><label><input type="checkbox" /> Label</label></div>;
}

export type SelectFieldProps = { className?: string; description?: string; error?: string; hasDescription?: boolean; hasError?: boolean; hasLabel?: boolean; label?: string; open?: boolean; state?: 'Default' | 'Disabled' | 'Error'; value?: string; valueType?: 'Default' | 'Placeholder' };

export function SelectField({ className, description = 'Description', error = 'Error', hasDescription = false, hasError = false, hasLabel = true, label = 'Label', open = false, state = 'Default', value = 'Value', valueType = 'Default' }: SelectFieldProps) {
  return <label className={`sds-select-field sds-select-field--${state.toLowerCase()} ${className ?? ''}`}>{hasLabel && <span>{label}</span>}{hasDescription && <small>{description}</small>}<select disabled={state === 'Disabled'} defaultValue={valueType === 'Placeholder' ? '' : value} aria-expanded={open}><option value="">{value}</option><option>Option 2</option></select>{hasError && <small className="sds-field-error">{error}</small>}</label>;
}

export type SearchProps = { className?: string; state?: 'Default' | 'Disabled'; value?: string; valueType?: 'Filled' | 'Placeholder' };

export function Search({ className, state = 'Default', value = 'Value', valueType = 'Placeholder' }: SearchProps) {
  return <div className={`sds-search sds-search--${state.toLowerCase()} ${className ?? ''}`}><span>{value}</span><span aria-hidden="true">{valueType === 'Filled' ? '×' : '⌕'}</span></div>;
}