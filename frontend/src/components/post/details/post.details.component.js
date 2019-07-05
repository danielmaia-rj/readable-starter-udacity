import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Post from '../post';
import CommentsList from '../comment/comment.list.container';
import { fetchCurrentPost } from '../../../common/actions.common';

class PostDetail extends Component {
  componentDidMount() {
    const { postId } = this.props.match.params;
    this.props.dispatch(fetchCurrentPost(postId));
  }

  render() {
    const { postId } = this.props.match.params;

    return (
      <div>
        <Link to="/">
          <i
            className="material-icons"
            style={{ color: '#FF00FF' }}
            role="button"
            tabIndex="-1"
          >
            home
          </i>
        </Link>
        {Object.keys(this.props.currentPostData).length === 0 && (
          <div>
            <p> Post not found </p>
            See more post in <Link to="/">home page</Link>
          </div>
        )}
        {Object.keys(this.props.currentPostData).length !== 0 && (
          <div>
            <Post
              data={this.props.currentPostData}
              postId={postId}
              showControls
            />
            <CommentsList postId={postId} />
          </div>
        )}
      </div>
    );
  }
}

PostDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      postId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  currentPostData: PropTypes.shape({}).isRequired
};

const mapStateToProps = state => ({
  currentPostData: state.currentPostData || {}
});

export default connect(mapStateToProps)(PostDetail);