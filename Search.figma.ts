// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=2236-14989
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';
const instance = figma.selectedInstance;
export default { example: figma.code`<Search state="${instance.getEnum('State', { Default: 'Default', Disabled: 'Disabled' })}" value="${instance.getString('Value')}" valueType="${instance.getEnum('Value Type', { Filled: 'Filled', Placeholder: 'Placeholder' })}" />`, imports: ['import { Search } from "./src/components/InputControls"'], id: 'search' };