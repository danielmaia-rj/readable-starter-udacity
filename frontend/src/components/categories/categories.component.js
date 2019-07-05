import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PostAdd from '../post/add/post.add.container';

const Categories = (props) => (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
        <Link to="/">
            <i
                className="fas fa-home"
                style={{ padding: '10px' }}
                role="button"
                tabIndex="-1"
            >
                Main
            </i>
        </Link>
        <a className="navbar-brand">
            <strong>Categories</strong>
        </a>
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                {props.categories &&
                    props.categories.map(item => (
                        <li className="nav-item" key={item.name}>
                            <Link className="nav-link" to={`/${item.path}`}>
                                <span>{item.name}</span>
                            </Link>
                        </li>
                    ))}
            </ul>
            <PostAdd />
        </div>
    </nav>
)

Categories.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired
        })
    ).isRequired
};

const mapStateToProps = state => ({
    categories: state.categories || []
});

export default connect(mapStateToProps)(Categories);