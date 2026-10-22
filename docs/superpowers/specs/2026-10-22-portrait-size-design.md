# Hero Portrait Size

## Goal

Reduce the hero portrait so it does not dominate the first viewport while keeping
the image clear and responsive.

## Design

- Keep the existing hero grid, image aspect ratio, and object-fit behavior.
- Reduce the portrait figure's desktop maximum width from `410px` to `340px`.
- Keep the figure at `width: 100%` so it still fits the available column on
  smaller screens.
- Set the portrait image's CSS `height: auto` so its native `height="4032"`
  does not override the intended 4:5 display ratio.
- Remove the wide-screen override that enlarged the portrait to 400px.
- Limit the mobile portrait to 300px wide (375px tall at 4:5).
- Do not change the portrait source, content, fallback, or other page sections.

## Validation

- Do not run the production build, per the user's instruction.
- Inspect the live Vite render on mobile, tablet, and desktop.
- Confirm the portrait remains responsive and does not overflow the hero layout.
