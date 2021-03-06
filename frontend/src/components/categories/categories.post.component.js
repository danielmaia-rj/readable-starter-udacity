import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPostsByCategory } from '../../common/actions.common';
import Post from '../post/post';
import Categories from '../categories/categories.component';

const CategoryPosts = (props) => {
    const { category } = props.match.params;
    props.dispatch(fetchPostsByCategory(category));

    return (

        <div>
            <Categories />
            <h4 style={{ margin: '2%' }}>{props.match.params.category} posts:</h4>
            <ul>
                {
                    props.categoryPosts &&
                    props.categoryPosts.map(item => (
                        <Post key={item.id} data={item} showControls />
                    ))}
                {
                    props && props.categoryPosts && props.categoryPosts.length === 0 && (
                    <p>There is no added posts </p>
                )}
            </ul>
        </div>
    );
};

CategoryPosts.propTypes = {
    dispatch: PropTypes.func.isRequired,
    categoryPosts: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string
        })
    ).isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            category: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};

const mapStateToProps = state => ({
    categoryPosts: state.finalPosts || []
});

export default connect(mapStateToProps)(CategoryPosts);