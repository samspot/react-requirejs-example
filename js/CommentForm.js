/**
 * @jsx React.DOM
 */
define([
  'react',
  'Utils'
], function(
  React,
  Utils
){
  var CommentForm = React.createClass({
    handleSubmit: function(){
      var author = this.refs.author.getDOMNode().value.trim();
      var text = this.refs.text.getDOMNode().value.trim();
      if(!text || !author){
        return false;
      }
      this.props.onCommentSubmit({author: author, text: text, key: Utils.guid()});
      this.refs.author.getDOMNode().value = '';
      this.refs.text.getDOMNode().value = '';
      return false;
    },
    render: function() {
      return (
        <form className="commentForm" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Your name" ref="author"/>
          <input type="text" placeholder="Say something..." ref="text" />
          <input type="submit" value="Post" />
        </form>
      );
    }
  });

  return CommentForm;
});