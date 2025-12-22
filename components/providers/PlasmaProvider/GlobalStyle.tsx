"use client";

import { createGlobalStyle } from "styled-components";
import { salutejs_sber__dark } from "@salutejs/plasma-tokens/themes"; // Или один из списка: salutejs_eva__dark, salutejs_joy__dark, salutejs_eva__light, salutejs_sber__light
import {
  text, // Цвет текста
  background, // Цвет подложки
  gradient, // Градиент
} from "@salutejs/plasma-tokens";

const DocumentStyle = createGlobalStyle`
    html:root {
        color: ${text};
        background-color: ${background};
        background-image: ${gradient};
    }
    body {
        margin: 0;
        padding: 0;
        font-family: 'SB Sans Text', -apple-system, BlinkMacSystemFont, Arial, Helvetica, sans-serif;
    }
`;

const ThemeStyle = createGlobalStyle(salutejs_sber__dark);

export const GlobalStyle = () => (
  <>
    <DocumentStyle />
    <ThemeStyle />
  </>
);
