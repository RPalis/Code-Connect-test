// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=2072-9432
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';
const instance = figma.selectedInstance;
export default { example: figma.code`<ButtonGroup align="${instance.getEnum('Align', { Justify: 'Justify', Start: 'Start', End: 'End', Center: 'Center', Stack: 'Stack' })}" buttonEnd={${instance.getBoolean('Button End')}} buttonStart={${instance.getBoolean('Button Start')}} />`, imports: ['import { ButtonGroup } from "./src/components/ActionControls"'], id: 'button-group' };