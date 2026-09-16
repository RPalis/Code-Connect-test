// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=4039-12912
/// <reference path="../node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';

export default {
  example: figma.code`<Icon name="Volume" size={32} />`,
  imports: ['import { Icon } from "./src/primitives/Icon"'],
  id: 'icon-volume-32',
};
