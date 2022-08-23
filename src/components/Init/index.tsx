import * as Content from 'styles/Init';
import {ReactNode, FC} from 'react';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, selectValue } from 'slices/counterSlice';

interface TitleProps {
	hoverColor: string;
	children: ReactNode;
}

const Init: FC<TitleProps> = ({ hoverColor, children }) => {
   	const count = useSelector(selectValue);
	const dispatch = useDispatch();

	return (
		<>
			<Head>
				<title>MKS LandingPage</title>
				<meta
					property='og:title'
					content='MKS LandingPage'
					key='title'
				/>
			</Head>
			<Content.Content>
				<Content.Title hoverColor={hoverColor}>MKS Titulo {children}</Content.Title>
				<p>Counter State value testing</p>
				<p> {count} </p>
				<Content.Button onClick={() => dispatch(decrement())}> - </Content.Button>
				<Content.Button onClick={() => dispatch(increment())}> + </Content.Button>
			</Content.Content>
		</>
	);
};



export default Init;
