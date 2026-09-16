// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=3729-12963
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';

const instance = figma.selectedInstance;
const active = instance.getBoolean('Active');
const label = instance.getString('Label');
const state = instance.getEnum('State', { Default: 'Default', Hover: 'Hover' });

export default {
  example: figma.code`<Tab active={${active}} label="${label}" state="${state}" />`,
  imports: ['import { Tab } from "./src/components/Tab"'],
  id: 'tab',
};