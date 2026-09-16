// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=4309-7636
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';
const state = figma.selectedInstance.getEnum('State', { Default: 'Default', Active: 'Active' });
export default { example: figma.code`<AIChatBox state="${state}" />`, imports: ['import { AIChatBox } from "./src/components/AIChatBox"'], id: 'ai-chat-box' };