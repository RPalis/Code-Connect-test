// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=124-8256
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';
const instance = figma.selectedInstance;
export default { example: figma.code`<Notification body="${instance.getString('Body')}" dismissible={${instance.getBoolean('Dismissible')}} title="${instance.getString('Title')}" variant="${instance.getEnum('Variant', { Message: 'Message', Alert: 'Alert' })}" />`, imports: ['import { Notification } from "./src/components/Notification"'], id: 'notification' };