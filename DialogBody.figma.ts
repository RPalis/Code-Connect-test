// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=9762-696
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';
const instance = figma.selectedInstance;
export default { example: figma.code`<DialogBody body="${instance.getString('Body')}" dismissible={${instance.getBoolean('Dismissible')}} heading="${instance.getString('Heading')}" />`, imports: ['import { DialogBody } from "./src/components/MenuAndDialog"'], id: 'dialog-body' };