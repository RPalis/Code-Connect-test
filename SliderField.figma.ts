// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=589-17676
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';
const instance = figma.selectedInstance;
export default { example: figma.code`<SliderField description="${instance.getString('Description')}" hasDescription={${instance.getBoolean('Has Description')}} hasLabel={${instance.getBoolean('Has Label')}} label="${instance.getString('Label')}" state="${instance.getEnum('State', { Default: 'Default', Disabled: 'Disabled' })}" />`, imports: ['import { SliderField } from "./src/components/Inputs2"'], id: 'slider-field' };
