// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=7753-4634
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';

const instance = figma.selectedInstance;
const content = instance.getString('Content');
const state = instance.getBoolean('State');
const title = instance.getString('Title');

export default {
  example: figma.code`<AccordionItem content="${content}" state={${state}} title="${title}" />`,
  imports: ['import { AccordionItem } from "./src/components/AccordionItem"'],
  id: 'accordion-item',
};