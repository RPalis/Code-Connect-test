// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=2142-11380
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';
const instance = figma.selectedInstance;
export default { example: figma.code`<Card asset={${instance.getBoolean('Asset')}} assetType="${instance.getEnum('Asset Type', { Icon: 'Icon', Image: 'Image' })}" body="${instance.getString('Body')}" button={${instance.getBoolean('Button')}} direction="${instance.getEnum('Direction', { Horizontal: 'Horizontal', Vertical: 'Vertical' })}" heading="${instance.getString('Heading')}" variant="${instance.getEnum('Variant', { Stroke: 'Stroke', Default: 'Default' })}" />`, imports: ['import { Card } from "./src/components/Card"'], id: 'card' };