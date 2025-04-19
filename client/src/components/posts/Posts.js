import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect} from 'react-redux'
import Spinner from '../layouts/Spinner'
import PostItem from './PostItem';
import PostForm from './PostForm';
import { getPosts } from '../../actions/post';


const Posts = ({ getPosts, post: { posts, loading } }) => {

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    loading ? <Spinner /> : (
    <Fragment>
      <h1 className="large text-primary-app">Posts</h1>
      <p className="lead">
        <i className="ti.fas.fa-user">Welcome to the community</i>
      </p>
      <PostForm />
      { posts.length > 0 ? (
        <div className="posts">
          {posts.map(post => (
            <PostItem post={post} />
          ))}
        </div>
      ) : (
        <h4>No posts found...</h4>
      )}
    </Fragment>
    )
  )
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  post: state.post,
})

export default connect(mapStateToProps, { getPosts})(Posts)