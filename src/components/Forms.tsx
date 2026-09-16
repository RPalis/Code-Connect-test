import { Button } from '../primitives/Button';
import { InputField } from '../primitives/InputField';
import { TextLink } from '../primitives/TextVariants';

function Field({ label, type = 'text' }: { label: string; type?: string }) {
  return <InputField hasLabel label={label} valueType="Placeholder" />;
}

export function FormRegister({ className }: { className?: string }) {
  return <form className={`sds-form ${className ?? ''}`}><Field label="Email" /><Field label="Password" type="password" /><Button label="Register" /></form>;
}

export function FormContact({ className }: { className?: string }) {
  return <form className={`sds-form ${className ?? ''}`}><Field label="Name" /><Field label="Email" /><Field label="Message" /><Button label="Submit" /></form>;
}

export function FormShipping({ className }: { className?: string }) {
  return <form className={`sds-form ${className ?? ''}`}><Field label="Address" /><Field label="City" /><Field label="Postal Code" /><Button label="Continue" /></form>;
}

export function FormForgotPassword({ className }: { className?: string }) {
  return <form className={`sds-form ${className ?? ''}`}><Field label="Email" /><Button label="Reset Password" /><TextLink text="Back to login" /></form>;
}

export function FormNewsletter({ className }: { className?: string }) {
  return <form className={`sds-form sds-form--inline ${className ?? ''}`}><InputField hasLabel={false} label="Email address" value="you@example.com" valueType="Default" /><Button label="Submit" /></form>;
}

export function FormSlot({ className }: { className?: string }) {
  return <form className={`sds-form ${className ?? ''}`} />;
}
