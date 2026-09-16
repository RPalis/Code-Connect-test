// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=9762-880
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';
const state = figma.selectedInstance.getEnum('State', { Default: 'Default', Hover: 'Hover', Disabled: 'Disabled' });
export default { example: figma.code`<PaginationPrevious state="${state}" />`, imports: ['import { PaginationPrevious } from "./src/components/Pagination"'], id: 'pagination-previous' };
