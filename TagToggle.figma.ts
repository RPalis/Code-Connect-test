// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=157-10316
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';
const instance = figma.selectedInstance;
export default { example: figma.code`<TagToggle label="${instance.getString('Label')}" showIcon={${instance.getBoolean('Show Icon')}} state={${instance.getBoolean('State')}} />`, imports: ['import { TagToggle } from "./src/components/TagToggle"'], id: 'tag-toggle' };