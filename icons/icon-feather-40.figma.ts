// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=4039-12760
/// <reference path="../node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';

export default {
  example: figma.code`<Icon name="Feather" size={40} />`,
  imports: ['import { Icon } from "./src/primitives/Icon"'],
  id: 'icon-feather-40',
};
