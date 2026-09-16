// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=11-11508
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';
const instance = figma.selectedInstance;
export default { example: figma.code`<IconButton size="${instance.getEnum('Size', { Medium: 'Medium', Small: 'Small' })}" state="${instance.getEnum('State', { Default: 'Default', Hover: 'Hover', Disabled: 'Disabled' })}" variant="${instance.getEnum('Variant', { Primary: 'Primary', Neutral: 'Neutral', Subtle: 'Subtle' })}" />`, imports: ['import { IconButton } from "./src/components/ActionControls"'], id: 'icon-button' };