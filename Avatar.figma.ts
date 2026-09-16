// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=9762-1103
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';

const instance = figma.selectedInstance;
const initials = instance.getString('Initials');
const shape = instance.getEnum('Shape', { Circle: 'Circle', Square: 'Square' });
const size = instance.getEnum('Size', { Large: 'Large', Medium: 'Medium', Small: 'Small' });
const type = instance.getEnum('Type', { Initial: 'Initial', Image: 'Image' });

export default {
  example: figma.code`<Avatar initials="${initials}" shape="${shape}" size="${size}" type="${type}" />`,
  imports: ['import { Avatar } from "./src/components/Avatar"'],
  id: 'avatar',
};