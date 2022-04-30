import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { withKnobs } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const defaultTheme = {
  name: "DEFAULT",
  backgroundColor: "azure",
  disabledColor: "blue",
  textColor: "dimgrey",
  borderRadius: "30px",
};

const darkTheme = {
  name: "DARK",
  backgroundColor: "black",
  disabledColor: "red",
  textColor: "seashell",
  borderRadius: "100px",
};

export const getAllThemes = () => {
  return [defaultTheme, darkTheme];
};

addDecorator(withThemesProvider(getAllThemes()));
addDecorator(withKnobs);

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};