// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=315-32700
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';
const instance = figma.selectedInstance;
export default { example: figma.code`<Tooltip body="${instance.getString('Body')}" hasBody={${instance.getBoolean('Has Body')}} placement="${instance.getEnum('Placement', { Top: 'Top', Left: 'Left', Right: 'Right', Bottom: 'Bottom' })}" title="${instance.getString('Title')}" />`, imports: ['import { Tooltip } from "./src/components/Tooltip"'], id: 'tooltip' };