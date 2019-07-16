import { connect } from 'react-redux';
import { createPost } from './actions/index';
import NewPost from './Newpost';

const mapDispatchToProps = dispatch => {
  return {
    onAddPost: post => {
      dispatch(createPost(post));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewPost);