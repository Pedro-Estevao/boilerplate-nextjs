'use client';

import styled from 'styled-components';
import Image from 'next/image';

export const Wrapper = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #06092b;
	color: #fff;
	width: 100%;
	height: 100%;
	padding: 3rem;
	text-align: center;
`;

export const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 1.5rem /* 24px */;
`;

export const Logo = styled(Image)`
	width: 25rem;
	margin-bottom: 2rem;
`;

export const Title = styled.h1`
	font-size: 2.5rem;
`;

export const Description = styled.h2`
	font-size: 2rem;
	font-weight: 400;
`;

export const Illustration = styled(Image)`
	margin-top: 3rem;
	width: min(30rem, 100%);
`;
