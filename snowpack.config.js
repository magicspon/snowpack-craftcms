module.exports = {
	mount: {
		static: '/',
		src: '/_dist_',
	},

	devOptions: {
		port: 9000,
		out: 'public/build',
	},

	alias: {
		'@': './src',
	},

	proxy: {
		'/': {
			target: 'http://nextjs.craft/',
		},
	},
}
