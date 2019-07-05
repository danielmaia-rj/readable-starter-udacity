import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const PostPageEdit = (props) =>
    (
        <div>
            <i
                className="fas fa-edit fa-2x"
                style={{
                    float: 'right',
                    color: 'rgb(20, 86, 156)',
                    cursor: 'pointer',
                    marginRight: '10px'
                }}
                onClick={props.editPost}
                role="button"
                tabIndex="-1"
            >                
                </i>
            <Modal
                isOpen={props.showEditPostDialog}
                onRequestClose={props.closeModal}
                shouldCloseOnOverlayClick={false}
                contentLabel="Example Modal"
            >
                <i
                    onClick={props.closeModal}
                    role="button"
                    tabIndex="-1"
                    className="fas fa-times"
                    style={{
                        cursor: 'pointer',
                        marginLeft: '97%',
                        marginBottom: '10px'
                    }}
                >
                    close
          </i>
                <form onSubmit={props.handleSubmit}>
                    <div className="form-group row">
                        <div className="col">
                            <input
                                type="text"
                                name="title"
                                className="form-control"
                                placeholder="Title"
                                onChange={props.handleChange}
                                value={props.title}
                                autoFocus
                            />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                name="author"
                                className="form-control"
                                placeholder="Author"
                                onChange={props.handleChange}
                                value={props.author}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col">
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="5"
                                placeholder="body"
                                name="body"
                                onChange={props.handleChange}
                                value={props.body}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col">
                            <select
                                value={props.category}
                                className="custom-select"
                                name="category"
                                onChange={props.handleChange}
                                style={{ width: '100%' }}
                            >
                                <option defaultValue value="react">
                                    React
                                    </option>
                                <option value="redux">Redux</option>
                                <option value="udacity">Udacity</option>
                            </select>
                        </div>
                        <div
                            className="col"
                            style={{ textAlign: 'center', marginTop: '10px' }}
                        >
                            <label htmlFor="voteScore">
                                Vote score: <b>{props.voteScore}</b>
                            </label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ marginLeft: '86%' }}
                    >
                        Edit post
                        </button>
                </form>
            </Modal>
        </div>
    );

PostPageEdit.propTypes = {
    editPost: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    showEditPostDialog: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired,

};

export default PostPageEdit;