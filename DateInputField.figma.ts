// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=4302-7505
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';
const instance = figma.selectedInstance;
export default { example: figma.code`<DateInputField description="${instance.getString('Description')}" error="${instance.getString('Error')}" hasDescription={${instance.getBoolean('Has Description')}} hasError={${instance.getBoolean('Has Error')}} hasLabel={${instance.getBoolean('Has Label')}} label="${instance.getString('Label')}" state="${instance.getEnum('State', { Default: 'Default', Disabled: 'Disabled', Error: 'Error' })}" valueType="${instance.getEnum('Value Type', { Default: 'Default', Placeholder: 'Placeholder' })}" />`, imports: ['import { DateInputField } from "./src/components/Inputs2"'], id: 'date-input-field' };
