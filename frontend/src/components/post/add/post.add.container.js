import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostPageAdd from './post.add.page';
import { addNewPost } from '../../../common/api.common';
import { fetchAllPosts } from '../../../common/actions.common';

class PostAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            id: Date.now(),
            timestamp: Date.now(),
            title: '',
            body: '',
            author: '',
            category: 'react'
        }
    }

    openModal = () => {
        this.setState({ modalIsOpen: true });
    };

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    };

    clearNewPostState = () =>
        this.setState({
            id: Date.now(),
            timestamp: Date.now(),
            title: '',
            body: '',
            author: '',
            category: 'react',
            voteScore: 1,
            deleted: false
        });

    handleSubmit = event => {
        event.preventDefault();
        this.closeModal();
        const newPost = Object.assign({}, this.state);
        delete newPost.modalIsOpen;
        addNewPost(newPost).then(() => {
            this.clearNewPostState();
            this.props.dispatch(fetchAllPosts());
        });
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return <PostPageAdd
            openModal={this.openModal.bind(this)}
            modalIsOpen={this.state.modalIsOpen}
            closeModal={this.closeModal.bind(this)}
            handleSubmit={this.handleSubmit.bind(this)}
            handleChange={this.handleChange.bind(this)}
            title={this.state.title}
            author={this.state.author}
            body={this.state.body}
            category={this.state.category}
        />
    }
}

export default connect()(PostAdd);