import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { editPost } from '../../../common/api.common';
import { fetchAllPosts } from '../../../common/actions.common';
import PostPageEdit from './post.edit.page';

class PostEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditPostDialog: false,
            id: -1,
            title: '',
            body: '',
            author: '',
            category: '',
            voteScore: 0
        }
    }

    componentWillMount() {
        Modal.setAppElement('body');
    }

    componentDidMount = () => {
        this.setState({
            id: this.props.postData.id,
            author: this.props.postData.author,
            title: this.props.postData.title,
            body: this.props.postData.body,
            category: this.props.postData.category,
            voteScore: this.props.postData.voteScore
        });
    };

    editPost = () => {        
        this.setState({ showEditPostDialog: true });
    };

    closeModal = () => {
        this.setState({ showEditPostDialog: false });
    };

    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            showEditPostDialog: false
        });

        const newPostData = Object.assign({}, this.state, {
            timestamp: new Date()
        });

        delete newPostData.showEditPostDialog;

        editPost(newPostData).then(() => {
            this.props.dispatch(fetchAllPosts());
        });
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        return <PostPageEdit
            editPost={this.editPost.bind(this)}
            closeModal={this.closeModal.bind(this)}
            handleSubmit={this.handleSubmit.bind(this)}
            handleChange={this.handleChange.bind(this)}
            showEditPostDialog={this.state.showEditPostDialog}
            title={this.state.title}
            author={this.state.author}
            body={this.state.body}
            category={this.state.category}
            voteScore={this.state.voteScore}
        />
    }
}

export default connect()(PostEdit);