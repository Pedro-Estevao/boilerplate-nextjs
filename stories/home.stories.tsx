import { Meta } from '@storybook/react';
import Home from '@/app/page';

export default {
	title: 'Home',
	component: Home
} as Meta;

export const Basic = (args: any) => <Home {...args} />;
Basic.args = {
	title: 'React Avançado',
	description: 'TypeScript, ReactJS, NextJS e Styled Components'
};
