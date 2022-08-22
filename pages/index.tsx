import styled from 'styled-components';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, selectValue } from '../slices/counterSlice';

const Content = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const Title = styled.h1`
	font-size: 32px;
	color: #ddd;
`;
const Button = styled.button`
	height: 20px;
	width: 100px;
	border-radius: 10px;
	color: white;
	background: #aaa;
`;

const Home: NextPage = () => {
	const count = useSelector(selectValue);
	const dispatch = useDispatch();

	return (
		<>
			<Head>
				<title>MKS LandingPage</title>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
			<Content>
				<Title>Title</Title>
				<p>Counter State value testing</p>
				<p> {count} </p>
				<Button onClick={() => dispatch(decrement())}> - </Button>
				<Button onClick={() => dispatch(increment())}> + </Button>
			</Content>
		</>
	);
};

export default Home;
