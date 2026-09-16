// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=4333-9359
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';
const instance = figma.selectedInstance;
export default { example: figma.code`<CalendarButton number="${instance.getString('Number')}" state="${instance.getEnum('State', { Default: 'Default', Hover: 'Hover', Active: 'Active', Disabled: 'Disabled', Range: 'Range', 'Range Disabled': 'Range Disabled', Hidden: 'Hidden' })}" />`, imports: ['import { CalendarButton } from "./src/components/CalendarControls"'], id: 'calendar-button' };