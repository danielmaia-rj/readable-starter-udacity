import React from 'react';
import Modal from 'react-modal';

const PostPageAdd = (props) => (
    <div>    
        <i
            className="fas fa-plus fa-2x"
            onClick={props.openModal}            
            role="button"
            tabIndex="0"
        ></i>
        <Modal
            isOpen={props.modalIsOpen}
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
                    marginBottom: '10px',
                    color: 'red'
                }}
            >                
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
                            Vote score: <b>1</b>
                        </label>
                    </div>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ marginLeft: '86%' }}
                >
                    Add post
            </button>
            </form>
        </Modal>
    </div>
)

export default PostPageAdd;