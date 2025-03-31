import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect }  from 'react-redux';

const PostItem = ({
  post: { _id, text, name, avatar, user, likes, comments, date },
  auth,
}) => {

  return (
    <div class="post bg-white p-1 my-1">
      <div>
        <Link to={`/dev/profile/${_id}`}>
          <img
            class="round-img"
            src={avatar}
            alt=""
          />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p class="my-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          possimus corporis sunt necessitatibus! Minus nesciunt soluta
          suscipit nobis. Amet accusamus distinctio cupiditate blanditiis
          dolor? Illo perferendis eveniet cum cupiditate aliquam?
        </p>
          <p class="post-date">
            Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
        </p>
        <button type="button" class="btn btn-light">
          <i class="fas fa-thumbs-up"></i>
          <span>{likes && likes.length > 0 && likes.length}</span>
        </button>
        <button type="button" class="btn btn-light">{' '}
          <i class="fas fa-thumbs-down"></i>
        </button>
        <Link to={`/dev/posts/${_id}`} class="btn btn-primary-app">
          Discussion <span class='comment-count'>{comments && comments.length > 0 && comments.length}</span>
        </Link>
        {!auth.loading && user === auth.user._id && (
          <button type="button" class="btn btn-danger-app">{' '}
            <i class="fas fa-times"></i>
          </button>
        )}

      </div>
    </div>
  )
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  // deletePost: PropTypes.func.isRequired,
  // setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {})(PostItem);