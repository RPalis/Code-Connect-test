// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=7768-19970
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';

const instance = figma.selectedInstance;
const label = instance.getString('Label');
const state = instance.getEnum('State', { Default: 'Default', Active: 'Active', Hover: 'Hover' });

export default {
  example: figma.code`<NavigationPill label="${label}" state="${state}" />`,
  imports: ['import { NavigationPill } from "./src/components/NavigationPill"'],
  id: 'navigation-pill',
};