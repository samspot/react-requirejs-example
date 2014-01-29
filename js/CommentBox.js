/**
 * @jsx React.DOM
 */
define([
  'react', 
  'CommentService', 
  'jsx!CommentList',
  'jsx!CommentForm'
], function(
  React, 
  CommentService,
  CommentList,
  CommentForm
){
  var CommentBox = React.createClass({
    loadComments: function(){
      this.setState({data: CommentService.load()});
    },
    handleCommentSubmit: function(comment){
      console.log("new comment: " + JSON.stringify(comment));
      var comments = this.state.data;
      var newComments = comments.concat([comment]);

      CommentService.save(newComments);
      this.setState({data: newComments});
    },
    handleCommentDelete: function(key){
      console.log("CommentBox.handleCommentDelete() delete key = " + key); 

      var comments = this.state.data;
      var newComments = _.filter(comments, function(c){
        return c.key != key
      });

      CommentService.save(newComments);
      this.setState({data: newComments});
    },
    getInitialState: function(){
      return {data: []};
    },
    componentWillMount: function(){
      this.loadComments();
    },
    render: function(){
      return (
        <div className="commentBox">
          <h1>Comments</h1>
          <CommentList data={this.state.data} onCommentDelete={this.handleCommentDelete} />
          <CommentForm onCommentSubmit={this.handleCommentSubmit} />
        </div>
      );
    }
  });


  React.renderComponent(
    <CommentBox/>,
    document.getElementById('content')
  );
});