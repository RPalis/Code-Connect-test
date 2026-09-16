// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=2136-2263
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';

const instance = figma.selectedInstance;
const description = instance.getString('Description');
const error = instance.getString('Error');
const hasDescription = instance.getBoolean('Has Description');
const hasError = instance.getBoolean('Has Error');
const hasLabel = instance.getBoolean('Has Label');
const label = instance.getString('Label');
const state = instance.getEnum('State', { Disabled: 'Disabled', Default: 'Default', Error: 'Error' });
const value = instance.getString('Value');
const valueType = instance.getEnum('Value Type', { Default: 'Default', Placeholder: 'Placeholder' });

export default {
  example: figma.code`<InputField
  description="${description}"
  error="${error}"
  hasDescription={${hasDescription}}
  hasError={${hasError}}
  hasLabel={${hasLabel}}
  label="${label}"
  state="${state}"
  value="${value}"
  valueType="${valueType}"
/>`,
  imports: ['import { InputField } from "./src/primitives/InputField"'],
  id: 'input-field',
};