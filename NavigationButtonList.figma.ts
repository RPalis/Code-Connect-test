// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=524-503
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';

const instance = figma.selectedInstance;
const direction = instance.getEnum('Direction', { Row: 'row', Column: 'column' });
const links = [1, 2, 3, 4, 5].map((index) => instance.getBoolean(`Link ${index}`));

export default {
  example: figma.code`<NavigationButtonList
  direction="${direction}"
  links={[${links.map((link) => String(link)).join(', ')}]}
/>`,
  imports: ['import { NavigationButtonList } from "./src/NavigationButtonList"'],
  id: 'navigation-button-list',
};