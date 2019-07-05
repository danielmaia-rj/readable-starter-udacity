import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePostComment, editPostComment, changeVoteCommentScore } from '../../../common/api.common';
import { fetchPostComments } from '../../../common/actions.common';
import CommentPage from './comment.page';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deletePostCommentIsOpen: false,
            editPostCommentIsOpen: false,
            tempPostComment: '',
            tempPostCommentAuthor: ''
        };
    }

    deletePost = () => {
        this.setState({ deletePostCommentIsOpen: true });
    };

    closeDeletePostCommentModal = commentState => {
        this.setState({ deletePostCommentIsOpen: false });
        if (commentState) {
            deletePostComment(this.props.data.id).then(() => {
                this.props.dispatch(fetchPostComments(this.props.data.parentId));
            });
        }
    };

    editPost = () => {
        this.setState({
            editPostCommentIsOpen: true,
            tempPostComment: this.props.data.body,
            tempPostCommentAuthor: this.props.data.author
        });
    };

    closeEditPostCommentModal = editCommentState => {
        this.setState({ editPostCommentIsOpen: false });
        if (editCommentState) {
            const newComment = {
                id: this.props.data.id,
                body: this.state.tempPostComment,
                author: this.state.tempPostCommentAuthor,
                timestamp: new Date()
            };
            editPostComment(newComment).then(() => {
                this.props.dispatch(fetchPostComments(this.props.data.parentId));
            });
        }
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    votePostComment = voteType => {
        changeVoteCommentScore(this.props.data.id, voteType).then(() => {
            this.props.dispatch(fetchPostComments(this.props.data.parentId));
        });
    };

    render() {
        return <CommentPage
            editPostCommentIsOpen={this.state.editPostCommentIsOpen}
            closeEditPostCommentModal={this.closeEditPostCommentModal.bind(this)}
            tempPostCommentAuthor={this.state.tempPostCommentAuthor}
            handleChange={this.handleChange.bind(this)}
            tempPostComment={this.state.tempPostComment}
            deletePostCommentIsOpen={this.state.deletePostCommentIsOpen}
            closeDeletePostCommentModal={this.state.closeDeletePostCommentModal}
            data={this.props.data}
            deletePost={this.deletePost.bind(this)}
            editPost={this.editPost.bind(this)}
            votePostComment={this.votePostComment.bind(this)}
        />
    }
}

export default connect()(Comment);