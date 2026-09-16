import { writeFile } from 'node:fs/promises';

const fileKey = 'CSe45kCpGg8PHrJarkfgKt';
const name = 'Simple-Design-System--Community-';

const items = [
  // [componentName, nodeId, importPath, id, propGetter]
  ['Header', '2287-22651', 'Sections', 'header', "figma.selectedInstance.getEnum('Platform', { Desktop: 'Desktop', Mobile: 'Mobile' })"],
  ['Footer', '321-11357', 'Sections', 'footer', "figma.selectedInstance.getEnum('Platform', { Desktop: 'Desktop', Mobile: 'Mobile' })"],
  ['HeroBasic', '348-15896', 'Sections', 'hero-basic', "figma.selectedInstance.getEnum('Platform', { Desktop: 'Desktop', Mobile: 'Mobile' })"],
  ['HeroActions', '348-15901', 'Sections', 'hero-actions', "figma.selectedInstance.getEnum('Platform', { Desktop: 'Desktop', Mobile: 'Mobile' })"],
  ['HeroNewsletter', '348-15919', 'Sections', 'hero-newsletter', "figma.selectedInstance.getEnum('Platform', { Desktop: 'Desktop', Mobile: 'Mobile' })"],
  ['HeroForm', '348-15933', 'Sections', 'hero-form', "figma.selectedInstance.getEnum('Platform', { Desktop: 'Desktop', Mobile: 'Mobile' })"],
  ['HeroImage', '348-15970', 'Sections', 'hero-image', "figma.selectedInstance.getEnum('Platform', { Desktop: 'Desktop', Mobile: 'Mobile' })"],
  ['HeroSlot', '6062-12592', 'Sections', 'hero-slot', "figma.selectedInstance.getEnum('Platform', { Desktop: 'Desktop', Mobile: 'Mobile' })"],
  ['PanelImageContent', '348-13474', 'Sections', 'panel-image-content', "figma.selectedInstance.getEnum('Platform', { Desktop: 'Desktop', Mobile: 'Mobile' })"],
  ['PanelImageContentReverse', '348-15101', 'Sections', 'panel-image-content-reverse', "figma.selectedInstance.getEnum('Platform', { Desktop: 'Desktop', Mobile: 'Mobile' })"],
  ['PanelImage', '348-15098', 'Sections', 'panel-image', "figma.selectedInstance.getEnum('Platform', { Desktop: 'Desktop', Mobile: 'Mobile' })"],
  ['PanelImageDouble', '348-13470', 'Sections', 'panel-image-double', "figma.selectedInstance.getEnum('Platform', { Desktop: 'Desktop', Mobile: 'Mobile' })"],
  ['PageAccordion', '348-13173', 'Sections', 'page-accordion', "figma.selectedInstance.getEnum('Platform', { Desktop: 'Desktop', Mobile: 'Mobile' })"],
  ['PageNewsletter', '348-15133', 'Sections', 'page-newsletter', "figma.selectedInstance.getEnum('Platform', { Desktop: 'Desktop', Mobile: 'Mobile' })"],
  ['PageProduct', '348-15147', 'Sections', 'page-product', "figma.selectedInstance.getEnum('Platform', { Desktop: 'Desktop', Mobile: 'Mobile' })"],
  ['PageProductResults', '348-13517', 'Sections', 'page-product-results', "figma.selectedInstance.getEnum('Platform', { Desktop: 'Desktop', Mobile: 'Mobile' })"],
  ['CardGridContentList', '348-13407', 'Sections', 'card-grid-content-list', "figma.selectedInstance.getEnum('Platform', { Desktop: 'Desktop', Mobile: 'Mobile' })"],
  ['CardGridIcon', '348-13221', 'Sections', 'card-grid-icon', "figma.selectedInstance.getEnum('Platform', { Desktop: 'Desktop', Mobile: 'Mobile' })"],
  ['CardGridImage', '348-14431', 'Sections', 'card-grid-image', "figma.selectedInstance.getEnum('Platform', { Desktop: 'Desktop', Mobile: 'Mobile' })"],
  ['CardGridPricing', '348-14983', 'Sections', 'card-grid-pricing', "figma.selectedInstance.getEnum('Platform', { Desktop: 'Desktop', Mobile: 'Mobile' })"],
  ['CardGridReviews', '348-15213', 'Sections', 'card-grid-reviews', "figma.selectedInstance.getEnum('Platform', { Desktop: 'Desktop', Mobile: 'Mobile' })"],
  ['CardGridTestimonials', '348-13347', 'Sections', 'card-grid-testimonials', "figma.selectedInstance.getEnum('Platform', { Desktop: 'Desktop', Mobile: 'Mobile' })"],
  ['ExamplesHomePage', '562-8332', 'Examples', 'examples-home-page', "figma.selectedInstance.getEnum('Platform', { Desktop: 'Desktop', Mobile: 'Mobile' })"],
  ['ExamplesAIChat', '5612-8819', 'Examples', 'examples-ai-chat', "figma.selectedInstance.getEnum('Platform', { Desktop: 'Desktop', Mobile: 'Mobile' })"],
  ['ExamplesAbout', '562-9044', 'Examples', 'examples-about', "figma.selectedInstance.getEnum('Platform', { Desktop: 'Desktop', Mobile: 'Mobile' })"],
  ['ExamplesArticle', '562-10260', 'Examples', 'examples-article', "figma.selectedInstance.getEnum('Platform', { Desktop: 'Desktop', Mobile: 'Mobile' })"],
  ['ExamplesContactUs', '562-9227', 'Examples', 'examples-contact-us', "figma.selectedInstance.getEnum('Platform', { Desktop: 'Desktop', Mobile: 'Mobile' })"],
  ['ExamplesLandingPage', '562-10124', 'Examples', 'examples-landing-page', "figma.selectedInstance.getEnum('Platform', { Desktop: 'Desktop', Mobile: 'Mobile' })"],
  ['ExamplesPortfolio', '562-11665', 'Examples', 'examples-portfolio', "figma.selectedInstance.getEnum('Platform', { Desktop: 'Desktop', Mobile: 'Mobile' })"],
  ['ExamplesPricing', '562-9558', 'Examples', 'examples-pricing', "figma.selectedInstance.getEnum('Platform', { Desktop: 'Desktop', Mobile: 'Mobile' })"],
  ['ExamplesProductDetailPage', '562-11271', 'Examples', 'examples-product-detail-page', "figma.selectedInstance.getEnum('Platform', { Desktop: 'Desktop', Mobile: 'Mobile' })"],
  ['ExamplesShop', '562-10872', 'Examples', 'examples-shop', "figma.selectedInstance.getEnum('Platform', { Desktop: 'Desktop', Mobile: 'Mobile' })"],
  ['ExamplesSlot', '6031-5160', 'Examples', 'examples-slot', "figma.selectedInstance.getEnum('Platform', { Desktop: 'Desktop', Mobile: 'Mobile' })"],
  ['ExamplesWaitlist', '562-9701', 'Examples', 'examples-waitlist', "figma.selectedInstance.getEnum('Platform', { Desktop: 'Desktop', Mobile: 'Mobile' })"],
];

for (const [componentName, nodeId, module, id, propGetter] of items) {
  const content = `// url=https://www.figma.com/design/${fileKey}/${name}?node-id=${nodeId}
/// <reference path="./node_modules/@figma/code-connect/figma-types.d.ts" />
import figma from 'figma';
export default { example: figma.code\`<${componentName} platform="\${${propGetter}}" />\`, imports: ['import { ${componentName} } from "./src/components/${module}"'], id: '${id}' };
`;
  await writeFile(`${componentName}.figma.ts`, content);
  console.log(`wrote ${componentName}.figma.ts`);
}
