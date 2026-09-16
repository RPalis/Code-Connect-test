import { Button } from '../primitives/Button';
import { InputField } from '../primitives/InputField';
import { TextLink } from '../primitives/TextVariants';

export function FormLogIn({ className }: { className?: string }) {
  return <form className={`sds-form-login ${className ?? ''}`}>
    <InputField label="Email" valueType="Placeholder" />
    <InputField label="Password" valueType="Placeholder" />
    <div className="sds-form-login__actions"><Button label="Sign In" /></div>
    <TextLink text="Forgot password?" />
  </form>;
}