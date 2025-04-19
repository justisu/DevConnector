import React, { Fragment, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItem from '../posts/PostItem';
import Spinner from '../layouts/Spinner';
import { getPost } from '../../actions/post';

const Post = ({ getPost, post: { post, loading } }) => {
  let { id } = useParams();
  console.log("id: ", id);

  useEffect(() => {
    getPost(id);
  }, [getPost, id]);

  return (
    loading || post === null ? <Spinner /> : 
     (
      <Fragment>
        <Link to='/dev/posts' className='btn'>Back To Posts</Link>
        <PostItem post={post} showActions={false} />
      </Fragment>
     )
  )
}

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post)