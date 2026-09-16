// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=2153-7834
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';

const instance = figma.selectedInstance;
const align = instance.getEnum('Align', { Start: 'Start', Center: 'Center' });
const hasSubheading = instance.getBoolean('Has Subheading');
const heading = instance.getString('Heading');
const subheading = instance.getString('Subheading');

export default {
  example: figma.code`<TextContentHeading align="${align}" hasSubheading={${hasSubheading}} heading="${heading}" subheading="${subheading}" />`,
  imports: ['import { TextContentHeading } from "./src/components/TextContentHeading"'],
  id: 'text-content-heading',
};