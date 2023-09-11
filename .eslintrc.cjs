module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.vue', '.ts', '.d.ts'],
			},
			alias: {
				extensions: ['.js', '.ts', '.scss', '.d.ts'],
				map: [
					['@/icons', './src/icons'],
					['@/assets', './src/assets'],
					['@/components', './src/components'],
					['@/modules', './src/modules'],
				],
			},
		},
	},
};
