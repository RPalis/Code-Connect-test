// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=562-8332
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';
export default { example: figma.code`<ExamplesHomePage platform="${figma.selectedInstance.getEnum('Platform', { Desktop: 'Desktop', Mobile: 'Mobile' })}" />`, imports: ['import { ExamplesHomePage } from "./src/components/Examples"'], id: 'examples-home-page' };
