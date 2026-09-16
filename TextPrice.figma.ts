// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=1443-10386
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';
const instance = figma.selectedInstance;
export default { example: figma.code`<TextPrice currency="${instance.getString('Currency')}" hasLabel={${instance.getBoolean('Has Label')}} label="${instance.getString('Label')}" price="${instance.getString('Price')}" size="${instance.getEnum('Size', { Large: 'Large', Small: 'Small' })}" />`, imports: ['import { TextPrice } from "./src/components/Remaining"'], id: 'text-price' };
