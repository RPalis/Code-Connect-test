// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=56-8830
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';
const instance = figma.selectedInstance;
export default { example: figma.code`<Tag label="${instance.getString('Label')}" removable={${instance.getBoolean('Removable')}} scheme="${instance.getEnum('Scheme', { Brand: 'Brand', Neutral: 'Neutral', Positive: 'Positive', Danger: 'Danger', Warning: 'Warning' })}" state="${instance.getEnum('State', { Default: 'Default', Hover: 'Hover' })}" variant="${instance.getEnum('Variant', { Primary: 'Primary', Secondary: 'Secondary' })}" />`, imports: ['import { Tag } from "./src/components/Remaining"'], id: 'tag' };
