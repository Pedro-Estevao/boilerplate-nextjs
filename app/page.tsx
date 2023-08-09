'use client'

import * as Style from "@/public/styles/styles";

const Home = ({
	title = "React Avançado",
	description = "TypeScript, ReactJS, NextJS e Styled Components"
}) => {
	return (
		<Style.Wrapper>
			<Style.Logo src="/img/logo.svg" width={25} height={25} alt="Imagem de um átomo e React Avançado escrito ao lado." />
			<Style.Title>{title}</Style.Title>
			<Style.Description>{description}</Style.Description>
			<Style.Illustration src="/img/hero-illustration.svg" width={30} height={30} alt="Um desenvolvedor de frente para uma tela com código." />
		</Style.Wrapper>
	);
};

export default Home;