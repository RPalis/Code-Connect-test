// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=56-15608
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';
const instance = figma.selectedInstance;
export default { example: figma.code`<AvatarGroup number="${instance.getString('Number')}" showOverflow={${instance.getBoolean('Show Overflow')}} spacing="${instance.getEnum('Spacing', { Overlap: 'Overlap', Spaced: 'Spaced' })}" />`, imports: ['import { AvatarGroup } from "./src/components/MenuAndDialog"'], id: 'avatar-group' };