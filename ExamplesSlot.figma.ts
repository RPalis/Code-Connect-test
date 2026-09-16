// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=6031-5160
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';
export default { example: figma.code`<ExamplesSlot platform="${figma.selectedInstance.getEnum('Platform', { Desktop: 'Desktop', Mobile: 'Mobile' })}" />`, imports: ['import { ExamplesSlot } from "./src/components/Examples"'], id: 'examples-slot' };
