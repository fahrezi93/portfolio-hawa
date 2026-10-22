# Hero Portrait Size

## Goal

Reduce the hero portrait so it does not dominate the first viewport while keeping
the image clear and responsive.

## Design

- Keep the existing hero grid, image aspect ratio, and object-fit behavior.
- Reduce the portrait figure's desktop maximum width from `410px` to `340px`.
- Keep the figure at `width: 100%` so it still fits the available column on
  smaller screens.
- Do not change the portrait source, content, fallback, or other page sections.

## Validation

- Run the production build to verify TypeScript and Vite compilation.
- Confirm the portrait remains responsive and does not overflow the hero layout.
