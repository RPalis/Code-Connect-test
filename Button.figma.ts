// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=4185-3778
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';

const instance = figma.selectedInstance;
const size = instance.getEnum('Size', { Medium: 'Medium', Small: 'Small' });
const state = instance.getEnum('State', { Default: 'Default', Hover: 'Hover', Disabled: 'Disabled' });
const variant = instance.getEnum('Variant', { Primary: 'Primary', Neutral: 'Neutral', Subtle: 'Subtle' });
const hasIconStart = instance.getBoolean('Has Icon Start');
const hasIconEnd = instance.getBoolean('Has Icon End');
const label = instance.getString('Label');

export default {
  example: figma.code`<Button
  hasIconEnd={${hasIconEnd}}
  hasIconStart={${hasIconStart}}
  label="${label}"
  size="${size}"
  state="${state}"
  variant="${variant}"
/>`,
  imports: ['import { Button } from "./src/primitives/Button"'],
  id: 'button',
};