// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=18-9389
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';
const state = figma.selectedInstance.getEnum('State', { Default: 'Default' });
export default { example: figma.code`<HeaderAuth state="${state}" />`, imports: ['import { HeaderAuth } from "./src/components/Sections"'], id: 'header-auth' };
