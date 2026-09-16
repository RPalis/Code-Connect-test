// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=4331-7191
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';
const device = figma.selectedInstance.getEnum('Device', { Desktop: 'Desktop', Mobile: 'Mobile' });
export default { example: figma.code`<AIChatbot device="${device}" />`, imports: ['import { AIChatbot } from "./src/components/Sections"'], id: 'ai-chatbot' };
