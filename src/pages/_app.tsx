import GlobalStyle from 'styles/global';
import type { AppProps } from 'next/app';
import { store } from '../../store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<GlobalStyle />
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
