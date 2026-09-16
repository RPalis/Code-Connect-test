// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=2010-15581
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';
const instance = figma.selectedInstance;
export default { example: figma.code`<AvatarBlock description="${instance.getString('Description')}" title="${instance.getString('Title')}" />`, imports: ['import { AvatarBlock } from "./src/components/MenuAndDialog"'], id: 'avatar-block' };