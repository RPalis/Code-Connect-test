// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=348-13221
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';
export default { example: figma.code`<CardGridIcon platform="${figma.selectedInstance.getEnum('Platform', { Desktop: 'Desktop', Mobile: 'Mobile' })}" />`, imports: ['import { CardGridIcon } from "./src/components/Sections"'], id: 'card-grid-icon' };
