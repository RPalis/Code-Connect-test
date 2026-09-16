// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=9762-739
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';
const shortcut = figma.selectedInstance.getString('Shortcut');
export default { example: figma.code`<MenuShortcut shortcut="${shortcut}" />`, imports: ['import { MenuShortcut } from "./src/components/Remaining"'], id: 'menu-shortcut' };
