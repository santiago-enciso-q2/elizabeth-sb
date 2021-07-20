import { addParameters, addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { withA11y } from "@storybook/addon-a11y";
import {withKnobs} from "@storybook/addon-knobs";
import { contexts } from "./contexts";

addParameters({
  background: [
    { name: "Default theme", value: "#ffffff", default: true },
    { name: "Dark theme", value: "#050449" }
  ],
  options: {
    storySort: {
      order: ['Welcome', [ 'Intro', 'Getting Started' ], 'Styles', 'Components'],
    },
  },
});


addDecorator(withContexts(contexts));
addDecorator(withKnobs);
addDecorator(withA11y);
