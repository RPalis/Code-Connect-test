// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=9762-743
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';
const instance = figma.selectedInstance;
export default { example: figma.code`<MenuItem description="${instance.getString('Description')}" hasDescription={${instance.getBoolean('Has Description')}} hasIcon={${instance.getBoolean('Has Icon')}} hasShortcut={${instance.getBoolean('Has Shortcut')}} label="${instance.getString('Label')}" state="${instance.getEnum('State', { Default: 'Default', Hover: 'Hover', Disabled: 'Disabled' })}" />`, imports: ['import { MenuItem } from "./src/components/MenuItem"'], id: 'menu-item' };