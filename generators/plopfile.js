module.exports = (plop) => {
	plop.setGenerator('component', {
		description: 'Create a component',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'What is your component name?'
			}
		],
		actions: [
			{
				type: 'add',
				path: '../components/{{pascalCase name}}/index.tsx',
				templateFile: 'templates/Component.tsx.hbs'
			},
			{
				type: 'add',
				path: '../components/{{pascalCase name}}/styles/index.ts',
				templateFile: 'templates/styles.ts.hbs'
			},
			{
				type: 'add',
				path: '../components/{{pascalCase name}}/stories/index.stories.tsx',
				templateFile: 'templates/stories.tsx.hbs'
			},
			{
				type: 'add',
				path: '../components/{{pascalCase name}}/__tests__/index.tsx',
				templateFile: 'templates/test.tsx.hbs'
			}
		]
	});
};
