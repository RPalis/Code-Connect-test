// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=2087-8487
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';

const text = figma.selectedInstance.getString('Text');

export default {
  example: figma.code`<Text text="${text}" />`,
  imports: ['import { Text } from "./src/primitives/Text"'],
  id: 'text',
};