// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=9762-1412
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';
const instance = figma.selectedInstance;
export default { example: figma.code`<RadioField description="${instance.getString('Description')}" hasDescription={${instance.getBoolean('Has Description')}} label="${instance.getString('Label')}" state="${instance.getEnum('State', { Default: 'Default', Disabled: 'Disabled' })}" valueType="${instance.getEnum('Value Type', { Unchecked: 'Unchecked', Checked: 'Checked' })}" />`, imports: ['import { RadioField } from "./src/components/InputControls"'], id: 'radio-field' };