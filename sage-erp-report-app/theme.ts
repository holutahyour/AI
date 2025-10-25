import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'Geist Sans', sans-serif` },
        body: { value: `'Geist Sans', sans-serif` },
      },
    },
  },
});
