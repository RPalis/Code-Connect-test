// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=562-9044
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';
export default { example: figma.code`<ExamplesAbout platform="${figma.selectedInstance.getEnum('Platform', { Desktop: 'Desktop', Mobile: 'Mobile' })}" />`, imports: ['import { ExamplesAbout } from "./src/components/Examples"'], id: 'examples-about' };
