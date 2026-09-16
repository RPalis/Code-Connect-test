// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=9762-890
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';
const instance = figma.selectedInstance;
export default { example: figma.code`<PaginationPage number="${instance.getString('Number')}" state="${instance.getEnum('State', { Default: 'Default', Hover: 'Hover', Current: 'Current', 'Current Hover': 'Current Hover' })}" />`, imports: ['import { PaginationPage } from "./src/components/Pagination"'], id: 'pagination-page' };