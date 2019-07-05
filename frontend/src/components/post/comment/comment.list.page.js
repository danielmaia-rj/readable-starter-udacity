import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import Comment from './comment.container';

const CommentsListPage = (props) => (
    <div>
        <i
            className="far fa-plus-square"
            style={{ cursor: 'pointer', color: '#539453' }}
            role="button"
            tabIndex="0"
            onClick={props.addComment}
        >
            Add a new comment
        </i>
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.closeAddPostComment}
            shouldCloseOnOverlayClick={false}
            contentLabel="Modal"
        >
            <p style={{ textAlign: 'center' }}>
                <b>Add a new comment </b>
            </p>
            <div>
                <div className="form-group">
                    <label htmlFor="commentAuthor">Author</label>
                    <input
                        className="form-control"
                        id="commentAuthor"
                        placeholder="Comment author"
                        name="commentAuthorName"
                        value={props.commentAuthorName}
                        onChange={props.onChange}
                        autoFocus
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="commentBody">Description:</label>
                    <textarea
                        id="commentBody"
                        className="form-control"
                        placeholder="feel free to leave your comment"
                        rows="5"
                        name="commentBody"
                        value={props.commentBody}
                        onChange={props.onChange}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-1">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => props.closeAddPostComment(true)}
                    >
                        Yes
              </button>
                </div>
                <div className="col-1">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => props.closeAddPostComment(false)}
                    >
                        No
              </button>
                </div>
            </div>
        </Modal>
        <div>
            {props.allPostComments.length === 0 ? (
                <p>There is no post comments</p>
            ) : (
                    <div>
                        <h4>Post comments: </h4>
                        <ul>
                            {props.allPostComments.map(item => (
                                <Comment key={item.id} data={item} />
                            ))}
                        </ul>
                    </div>
                )}
        </div>
    </div>
)

CommentsListPage.defaultProps = {
    postId: ''
};

CommentsListPage.propTypes = {
    postId: PropTypes.string,
    allPostComments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string
        })
    ).isRequired
};

export default CommentsListPage;