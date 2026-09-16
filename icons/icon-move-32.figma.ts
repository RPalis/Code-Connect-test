// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=4039-11799
/// <reference path="../node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';

export default {
  example: figma.code`<Icon name="Move" size={32} />`,
  imports: ['import { Icon } from "./src/primitives/Icon"'],
  id: 'icon-move-32',
};
