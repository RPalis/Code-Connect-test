// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=2194-14984
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';
const instance = figma.selectedInstance;
export default { example: figma.code`<NavigationPillList direction="${instance.getEnum('Direction', { Row: 'Row', Column: 'Column' })}" link1={${instance.getBoolean('Link 1')}} link2={${instance.getBoolean('Link 2')}} link3={${instance.getBoolean('Link 3')}} link4={${instance.getBoolean('Link 4')}} link5={${instance.getBoolean('Link 5')}} link6={${instance.getBoolean('Link 6')}} link7={${instance.getBoolean('Link 7')}} />`, imports: ['import { NavigationPillList } from "./src/components/NavigationAdvanced"'], id: 'navigation-pill-list' };