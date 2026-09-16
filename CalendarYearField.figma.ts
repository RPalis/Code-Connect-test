// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=4333-12221
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';
const value = figma.selectedInstance.getString('Value');
export default { example: figma.code`<CalendarYearField value="${value}" />`, imports: ['import { CalendarYearField } from "./src/components/CalendarControls"'], id: 'calendar-year-field' };