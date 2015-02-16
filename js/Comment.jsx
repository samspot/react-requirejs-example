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
  var Comment = React.createClass({
    deleteComment: function(){
      // calls onCommentDelete on CommentList, which calls onCommentDelete from CommentBox
      this.props.onCommentDelete(this.props.key);
    },
    render: function(){
      var rawMarkup = Utils.converter.makeHtml(this.props.children.toString());
      return (
        <div className="comment">
          <h2 className="commentAuthor">
            {this.props.author}
          </h2>
          <span dangerouslySetInnerHTML={{__html: rawMarkup}} />

          {/* delete button */}
          <button onClick={this.deleteComment}>delete</button>
        </div>
      );
    }
  });

  return Comment;
});
