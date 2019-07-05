import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewComment } from '../../../common/api.common';
import { fetchPostComments } from '../../../common/actions.common';
import CommentsListPage from './comment.list.page';

class CommentsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            commentBody: '',
            commentAuthorName: ''
        };
    }

    componentDidMount() {
        this.props.dispatch(fetchPostComments(this.props.postId));
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    addComment = () => {
        this.setState({ isOpen: true });
    };

    closeAddPostComment = modalResponse => {
        if (modalResponse) {
            const postCommentData = {
                id: Date.now(),
                timestamp: new Date(),
                body: this.state.commentBody,
                author: this.state.commentAuthorName,
                parentId: this.props.postId,
                voteScore: 0
            };
            addNewComment(postCommentData).then(() => {
                this.props.dispatch(fetchPostComments(this.props.postId));
            });
        }

        this.setState({
            isOpen: false,
            commentAuthorName: '',
            commentBody: ''
        });
    };

    render() {
        return <CommentsListPage
            addComment={this.addComment.bind(this)}
            isOpen={this.state.isOpen}
            closeAddPostComment={this.closeAddPostComment.bind(this)}
            commentAuthorName={this.state.commentAuthorName}
            onChange={this.onChange.bind(this)}
            commentBody={this.state.commentBody}
            allPostComments={this.props.allPostComments}
        />
    }
}

const mapStateToProps = state => ({
    allPostComments: state[state.currentPostId] || []
});

export default connect(mapStateToProps)(CommentsList);