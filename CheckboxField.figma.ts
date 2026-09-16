// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=9762-1441
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';
const instance = figma.selectedInstance;
export default { example: figma.code`<CheckboxField description="${instance.getString('Description')}" hasDescription={${instance.getBoolean('Has Description')}} label="${instance.getString('Label')}" state="${instance.getEnum('State', { Default: 'Default', Disabled: 'Disabled' })}" valueType="${instance.getEnum('Value Type', { Unchecked: 'Unchecked', Checked: 'Checked', Indeterminate: 'Indeterminate' })}" />`, imports: ['import { CheckboxField } from "./src/components/ActionControls"'], id: 'checkbox-field' };