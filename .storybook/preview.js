import { addParameters, addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { withA11y } from "@storybook/addon-a11y";
import {withKnobs} from "@storybook/addon-knobs";
import { contexts } from "./contexts";
import { MemoryRouter } from "react-router";


addParameters({
  background: [
    { name: "Default theme", value: "#ffffff", default: true },
    { name: "Dark theme", value: "#050449" }
  ],
  options: {
    storySort: {
      order: ['Intro', [ 'Welcome', 'Getting Started' , 'Pages'], 'Styles', 'Components'],
    },
  },
});

addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);
addDecorator(withContexts(contexts));
addDecorator(withKnobs);
addDecorator(withA11y);
