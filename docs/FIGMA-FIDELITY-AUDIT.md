# Figma Fidelity Audit

Target file: `CSe45kCpGg8PHrJarkfgKt`

## Scope

The published inventory contains 1,850 records: 1,722 icons, 125 visible non-utility components, and 3 Utilities records. Utilities are intentionally excluded. Implementation proceeds in dependency order, with each visible Figma component represented by an atomic JSX/TypeScript component and a `.figma.ts` template.

## Atomic contract

- Every Figma component set maps to one exported component.
- Every variant property maps to a typed prop or an explicit template branch.
- Every boolean property remains independently toggleable; no shortcut may collapse distinct states.
- Every text property remains editable and defaults to Figma's value.
- Every instance-swap property maps to an explicit component slot.
- Every slot, annotation, hidden layer, and dependency is recorded before implementation.
- Shared icons and primitives are implemented once and composed into higher-level components.
- Tokens are named from Figma variables and are not replaced with per-component magic values.

## Anti-slop benchmark

Each component must pass all checks before publishing:

1. Variant matrix: every published variant renders through a deterministic code path.
2. Property matrix: every boolean, enum, text, and instance-swap property is represented.
3. Geometry: width, height, padding, gap, alignment, and icon leaf dimensions match the Figma node.
4. Token fidelity: colors, typography, spacing, border widths, and radii resolve through named tokens.
5. Structure: meaningful slots and invisible or annotated layers are not flattened away.
6. Behavior: keyboard focus, active state, disabled state, and responsive overflow are tested where applicable.
7. Asset fidelity: exported assets are used at their designed outer and leaf dimensions.
8. Visual evidence: a rendered preview is compared against Figma at desktop and mobile widths.
9. Code quality: no duplicated primitive, unexplained hard-coded value, placeholder asset, or generated filler is accepted.
10. Publish check: `npm run build` passes and the Code Connect dry-run reaches Figma without parser or template errors.

## Current audit result

Current JSX/TypeScript coverage is 12 visible components: Navigation Button List, Button, Input Field, Text, Navigation Pill, Pagination, Tab, Avatar, Accordion Item, Text Content Heading, Text Content Title, and Text Link List. Each completed component has a matching Code Connect template. Publishing remains gated by a valid Figma access token.

## Batch order

1. Primitives: icons, text, buttons, inputs.
2. Composition: navigation, tabs, tags, menu, pagination.
3. Containers: cards, calendar, accordion, dialog, notification.
4. Examples and invisible or annotation-only nodes.
5. Full library matrix, screenshot comparison, and publish.