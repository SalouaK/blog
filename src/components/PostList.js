import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

const PostList = ({posts}) => {

    useEffect(() => {
        fetchPosts();
    });
    console.log(posts)
    return (
        <div>
            Post List 
        </div>
    );
    
};

const mapStateToProps = (state) => {
    return { posts: state.posts };
    
}

export default connect(mapStateToProps, { fetchPosts })(PostList);