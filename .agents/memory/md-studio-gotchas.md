---
name: MD Studio build gotchas
description: Sharp edges discovered during the md-studio react-vite artifact build
---

## WebGL in Replit preview

The Replit sandboxed iframe does NOT support WebGL. Three.js / @react-three/fiber will fail silently but the Vite runtime-error overlay intercepts the console error and shows a blocking modal.

**Fix:** call `isWebGLAvailable()` (create a canvas, try `getContext("webgl2"/"webgl")`) at the top of the orb component BEFORE rendering `<Canvas>`. Return the CSS fallback immediately if WebGL is absent. This way no error is thrown and the overlay never fires.

**Why:** The Vite `@replit/vite-plugin-runtime-error-modal` plugin hooks `console.error` globally. A React ErrorBoundary can't catch Three.js internal errors because they don't propagate through the React tree.

## esbuild / api-server zod import

The api-server uses esbuild to bundle. `import { z } from "zod/v4"` fails with `Could not resolve "zod/v4"` because esbuild treats it as a separate package specifier. Use `import { z } from "zod"` and install zod as a dependency of the api-server package (`pnpm --filter @workspace/api-server add zod`).
