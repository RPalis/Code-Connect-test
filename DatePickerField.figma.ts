// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=4300-6892
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';
const instance = figma.selectedInstance;
export default { example: figma.code`<DatePickerField description="${instance.getString('Description')}" error="${instance.getString('Error')}" hasDescription={${instance.getBoolean('Has Description')}} hasError={${instance.getBoolean('Has Error')}} hasLabel={${instance.getBoolean('Has Label')}} label="${instance.getString('Label')}" state="${instance.getEnum('State', { Default: 'Default', Error: 'Error', Disabled: 'Disabled' })}" value="${instance.getString('Value')}" valueType="${instance.getEnum('Value Type', { Default: 'Default', Placeholder: 'Placeholder' })}" />`, imports: ['import { DatePickerField } from "./src/components/Inputs2"'], id: 'date-picker-field' };
