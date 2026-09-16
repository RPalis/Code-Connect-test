// url=https://www.figma.com/design/CSe45kCpGg8PHrJarkfgKt/Simple-Design-System--Community-?node-id=348-15919
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';
export default { example: figma.code`<HeroNewsletter platform="${figma.selectedInstance.getEnum('Platform', { Desktop: 'Desktop', Mobile: 'Mobile' })}" />`, imports: ['import { HeroNewsletter } from "./src/components/Sections"'], id: 'hero-newsletter' };
