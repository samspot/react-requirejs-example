/**
 * @jsx React.DOM
 */
define([
  'react',
  'jsx!Comment'
], function(
  React,
  Comment
){
  var CommentList = React.createClass({
    render: function(){
      var deleteHandle = this.props.onCommentDelete;
      var commentNodes = this.props.data.map(function(comment){
        return  <Comment key={comment.key} author={comment.author} onCommentDelete={deleteHandle}>
                  {comment.text}
                </Comment>;
      });
      return(
          <div className="commentList">
            {commentNodes}
          </div>
      );
    }
  });

  return CommentList;
});