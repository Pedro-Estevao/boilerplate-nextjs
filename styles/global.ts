'use client';

import { createGlobalStyle } from 'styled-components';
import './tailwind-import.css';
import { Inter } from "next/font/google";

const interFont = Inter({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ['latin'],
    style: ['normal'],

});

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
}

html, 
body,
#__next {
    height: 100%;
}

body {
    font-family: ${interFont.style.fontFamily}, sans-serif;
}
`;

export default GlobalStyles;
