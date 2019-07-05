import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const CommentPage = (props) => (
    <div>
        <Modal
            isOpen={props.editPostCommentIsOpen}
            onRequestClose={props.closeEditPostCommentModal}
            shouldCloseOnOverlayClick={false}
            contentLabel="Modal"
        >
            <div className="form-group">
                <label htmlFor="commentAuthor">Author</label>
                <input
                    className="form-control"
                    id="commentAuthor"
                    placeholder="Comment author"
                    name="tempPostCommentAuthor"
                    value={props.tempPostCommentAuthor}
                    onChange={props.handleChange}
                    autoFocus
                />
            </div>
            <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                placeholder="body"
                name="tempPostComment"
                onChange={props.handleChange}
                value={props.tempPostComment}
            />
            <div className="row">
                <div className="col-1">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => props.closeEditPostCommentModal(true)}
                    >
                        Edit
              </button>
                </div>
                <div className="col-1">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => props.closeEditPostCommentModal(false)}
                    >
                        Cancel
              </button>
                </div>
            </div>
        </Modal>
        <Modal
            isOpen={props.deletePostCommentIsOpen}
            onRequestClose={props.closeDeletePostCommentModal}
            shouldCloseOnOverlayClick={false}
            contentLabel="Modal"
        >
            <p>Are you sure you want to delete this comment?</p>
            <div className="row">
                <div className="col-1">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => props.closeDeletePostCommentModal(true)}
                    >
                        Yes
              </button>
                </div>
                <div className="col-1">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => props.closeDeletePostCommentModal(false)}
                    >
                        No
              </button>
                </div>
            </div>
        </Modal>
        <div className="row">
            <div className="col-4">
                Author: {props.data.author}
                <br />
                {props.data.body}
                <br />
                Vote score: {props.data.voteScore}
            </div>
            <div className="col-2">
                <i
                    className="fas fa-trash"
                    style={{ float: 'right', color: '#e25151', cursor: 'pointer' }}
                    onClick={props.deletePost}
                    role="button"
                    tabIndex="-1"
                >
                </i>
                <i
                    className="fas fa-edit"
                    style={{
                        float: 'right',
                        color: 'rgb(20, 86, 156)',
                        cursor: 'pointer'
                    }}
                    onClick={props.editPost}
                    role="button"
                    tabIndex="-1"
                >
                </i>
                <i
                    className="fas fa-arrow-down"
                    style={{ float: 'right', cursor: 'pointer' }}
                    onClick={() => props.votePostComment('downVote')}
                    role="button"
                    tabIndex="-1"
                >
                    Vote
            </i>
                <i
                    className="fas fa-arrow-up"
                    style={{ float: 'right', cursor: 'pointer' }}
                    onClick={() => props.votePostComment('upVote')}
                    role="button"
                    tabIndex="-1"
                >
                    Vote
            </i>
            </div>
        </div>
        <hr style={{ marginRight: '25%' }} />
    </div>
)

CommentPage.propTypes = {
    data: PropTypes.shape({
        body: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        parentId: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        voteScore: PropTypes.number.isRequired
    }).isRequired
};

export default CommentPage;