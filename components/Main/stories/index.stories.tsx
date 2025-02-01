import { Meta, StoryObj } from '@storybook/react';
import Main from '@/components/Main';

export default {
	title: 'Main',
	component: Main,
	parameters: {
		layout: 'fullscreen'
	},
	decorators: [
		(Story) => (
			<div style={{ width: '100%', height: '100vh' }}>
				<div
					style={{ maxWidth: '104rem', margin: '0 auto', padding: '50px 0' }}
				>
					<Story />
				</div>
			</div>
		)
	]
} as Meta;

export const Default: StoryObj = {};

export const Basic: StoryObj = {
	args: {
		title: 'title basic',
		description: 'description basic'
	}
};
