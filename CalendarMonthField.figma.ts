// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=4333-10557
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';
const instance = figma.selectedInstance;
export default { example: figma.code`<CalendarMonthField hasLabel={${instance.getBoolean('Has Label')}} label="${instance.getString('Label')}" open={${instance.getBoolean('Open')}} value="${instance.getString('Value')}" />`, imports: ['import { CalendarMonthField } from "./src/components/CalendarControls"'], id: 'calendar-month-field' };