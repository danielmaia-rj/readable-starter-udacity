import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import sortBy from 'sort-by';
//import '../../../node_modules/material-design-icons/iconfont/material-icons.css';
import Post from './post';

class PostAll extends Component {
    constructor() {
        super();
        this.state = {
            descendantScore: true,
            descendantTimeStamp: true,
            orderCriteria: '-voteScore'
        };
    }

    orderByProperty = (property, criteria) => {
        const changedOrder = !this.state[criteria];
        const orderCriteria = changedOrder ? `-${property}` : property;
        this.setState({
            [criteria]: changedOrder,
            orderCriteria
        });
    };

    render() {
        const { posts } = this.props;
        posts.sort(sortBy(this.state.orderCriteria));

        return (
            <div>
                <hr />
                <div className="container">
                    <div className="row">
                        <h3>All posts</h3>
                    </div>
                    <div className="row">
                        Order by:
                        <button
                            type="button"
                            className="btn btn-link"
                            style={{
                                paddingLeft: '20px',
                                paddingRight: '15px',
                                marginRight: '15px',
                                marginLeft: '15px'
                            }}
                            onClick={() =>
                                this.orderByProperty('voteScore', 'descendantScore')
                            }
                        >
                            <div className="row">
                                vote score
                                {this.state.descendantScore && <i className="fas fa-arrow-down"></i>}
                                {!this.state.descendantScore && <i className="fas fa-arrow-up"></i>}
                            </div>
                        </button>
                        <button
                            type="button"
                            className="btn btn-link"
                            style={{
                                paddingLeft: '20px',
                                paddingRight: '15px',
                                marginRight: '15px'
                            }}
                            onClick={() =>
                                this.orderByProperty('timestamp', 'descendantTimeStamp')
                            }
                        >
                            <div className="row">
                                timestamp
                                {this.state.descendantTimeStamp && (
                                    <i className="fas fa-arrow-down"></i>
                                )}
                                {!this.state.descendantTimeStamp && (
                                    <i className="fas fa-arrow-up"></i>
                                )}
                            </div>
                        </button>
                    </div>
                </div>
                <ul>
                    {posts.map(item => (
                        <Post key={item.id} data={item} showControls />
                    ))}
                </ul>
            </div>
        );
    }
}

PostAll.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired
        })
    ).isRequired
};

const mapStateToProps = state => ({
    posts: state.posts || []
});

export default connect(mapStateToProps)(PostAll);