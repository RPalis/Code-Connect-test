// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=9762-1902
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';
const instance = figma.selectedInstance;
export default { example: figma.code`<SwitchField description="${instance.getString('Description')}" hasDescription={${instance.getBoolean('Has Description')}} hasLabel={${instance.getBoolean('Has Label')}} label="${instance.getString('Label')}" state="${instance.getEnum('State', { Default: 'Default', Disabled: 'Disabled' })}" valueType={${instance.getBoolean('Value Type')}} />`, imports: ['import { SwitchField } from "./src/components/Inputs2"'], id: 'switch-field' };
