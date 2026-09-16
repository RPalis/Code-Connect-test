// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=322-9321
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';

const instance = figma.selectedInstance;
const density = instance.getEnum('Density', { Default: 'Default', Tight: 'Tight' });
const hasTitle = instance.getBoolean('Has Title');

export default {
  example: figma.code`<TextLinkList density="${density}" hasTitle={${hasTitle}} />`,
  imports: ['import { TextLinkList } from "./src/components/TextLinkList"'],
  id: 'text-link-list',
};