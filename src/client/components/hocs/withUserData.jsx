import React from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../redux/user/user.actions.requests';
import { getCookie } from '../../utils/cookie';
import Logo from '../atoms/Logo/Logo.jsx';

const mapStateToProps = ({ user: { user } }) => ({ user });
const mapDispatchToProps = {
  getUser,
};

const withUserData = (Component) => connect(mapStateToProps, mapDispatchToProps)(
  class ComponentWithUserData extends React.Component {
    constructor(props) {
      super(props);
      this.uid = getCookie('uid');
    }

    componentDidMount() {
      const { getUser, user } = this.props;
      if (!user) {
        getUser(this.uid);
      }
    }

    render() {
      if (!this.props.user) {
        return (
          <div className='central-flex-container'>
            <Logo
              size='60px'
              isLoading
            />
          </div>
        );
      }

      return (
        <Component {...this.props} />
      );
    }
  },
);

export default withUserData;
