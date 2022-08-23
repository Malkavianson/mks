import styled from 'styled-components';

interface TypeTitle {
	hoverColor: string;
}

export const Title = styled.h1<TypeTitle>`
	font-size: 32px;
	color: #ddd;
	transition: 0.42s;
	user-select: none;
	cursor: pointer;

	&:active {
		transform: scale(0.995);
	}

	&:hover {
		color: ${({ hoverColor }) => hoverColor};
	}
`;
export const Content = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
export const Button = styled.button`
	height: 20px;
	width: 100px;
	border-radius: 10px;
	color: white;
	background: #aaa;
`;
