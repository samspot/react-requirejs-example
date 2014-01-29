require.config({
	deps: ["main"],

	paths: {
		react: 'lib/react',
		jsx: 'lib/jsx',
		JSXTransformer: 'lib/JSXTransformer',
		_: 'lib/underscore-min',
		showdown: 'lib/showdown.min'
	},

	shim: {
		JSXTransformer: {
			exports: "JSXTransformer"
		}
	}
});

require([
	"jsx!CommentBox"
], function(
	CommentBox
){
	/* CommentBox inits react */
});

