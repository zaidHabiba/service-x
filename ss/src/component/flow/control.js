import React from 'react';
import {connect} from "react-redux";
import {getUser} from "../../redux/actions/user";

class Authenticate extends React.Component {

    unauth; // in case unauth = true it will render if not auth


    render() {
        console.log(this.props);
        if (!this.props.unauth) {
            if (this.props.user && this.props.user.id) {
                return this.props.children;
            }
        } else {
            if (!this.props.user || !this.props.user.id) {
                return this.props.children;
            }
        }
        return null;
    }

}

const mapStateToProps = (state, ownProps) => {
    return {...ownProps, user: state.user};
};
export default connect(mapStateToProps, {getUser})(Authenticate);