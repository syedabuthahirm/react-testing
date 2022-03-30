import React from 'react';
import { connect } from 'react-redux';
import { getUser } from '../store/action-reducers/user';

function User(props) {
  const { getUser, loading, user } = props;

  React.useEffect(() => {
    getUser();
  }, [getUser]);

  return <>
  {loading ? <div data-testid='username'>loading...</div> : <div>
      <h1>{user?.email}</h1>
  </div> }
  </>;
}

const mapStateToProps = (state) => {
  return {
    loading: state.user.loading,
    user: state.user.user,
  };
};

export default connect(mapStateToProps, { getUser })(User);
