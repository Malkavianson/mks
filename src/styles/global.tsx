import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

@media (prefers-color-scheme: dark) {
	html {
		color-scheme: dark;
	}
	body {
		color: white;
		background: black;
	}
}
`;

export default GlobalStyle;
