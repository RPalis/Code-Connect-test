// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=1444-11846
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';
const instance = figma.selectedInstance;
export default { example: figma.code`<PricingCard device="${instance.getEnum('Device', { Desktop: 'Desktop', Mobile: 'Mobile' })}" variant="${instance.getEnum('Variant', { Stroke: 'Stroke', Brand: 'Brand' })}" />`, imports: ['import { PricingCard } from "./src/components/CardsExtended"'], id: 'pricing-card' };
