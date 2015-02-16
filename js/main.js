require.config({
	deps: ["main"],

	paths: {
		react: 'lib/react',
		jsx: 'lib/jsx',
		JSXTransformer: 'lib/JSXTransformer',
		_: 'lib/underscore-min',
		showdown: 'lib/showdown.min',
		text: 'lib/text',
		Utils: 'lib/Utils'
	},

	shim: {
		JSXTransformer: {
			exports: "JSXTransformer"
		}
	},

	jsx: {
		fileExtension: '.jsx'
	}
});

require([
	"react",
	"jsx!CommentBox"
], function(
	React,
	CommentBox
){
  React.renderComponent(
    CommentBox(null),
    document.getElementById('content')
  );
});

