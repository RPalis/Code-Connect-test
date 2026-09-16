// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=2153-7838
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';

const instance = figma.selectedInstance;
const align = instance.getEnum('Align', { Start: 'Start', Center: 'Center' });
const hasSubtitle = instance.getBoolean('Has Subtitle');
const subtitle = instance.getString('Subtitle');
const title = instance.getString('Title');

export default {
  example: figma.code`<TextContentTitle align="${align}" hasSubtitle={${hasSubtitle}} subtitle="${subtitle}" title="${title}" />`,
  imports: ['import { TextContentTitle } from "./src/components/TextContentTitle"'],
  id: 'text-content-title',
};