import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {urlList} from '../settings/router';
import Authenticate from "../component/flow/control";
import TokenService from '../services/token.service';
import UserService from '../services/user.service';
import {connect} from "react-redux";
import {getUser, registerUser} from "../redux/actions/user";
import {Dimmer, Loader} from 'semantic-ui-react';
import {If} from "../px-lib/components/flow/statements";

class App extends React.Component {

    state = {
        appLoading: true
    };

    appLoading = (val) => {
        this.setState({appLoading: val});
    };

    componentDidMount = async () => {
        window.addEventListener('resize', (e) => {
            console.log(e)
        });
        if (!await TokenService.isValidToken()) {
            TokenService.clearToken();
            this.appLoading(false);
        } else {
            UserService.getUserInformation().then(data => {
                this.props.registerUser(data.data);
                this.appLoading(false);
            }).catch(error => {
                TokenService.clearToken();
                this.appLoading(false);
            });
        }
    };

    render() {
        return (
            <div className="page-wrapper">
                <Dimmer inverted active={this.state.appLoading}>
                    <Loader inverted/>
                </Dimmer>
                <If flag={!this.state.appLoading}>
                    <BrowserRouter>
                        <Authenticate>
                            {
                                urlList.filter(route => route.authenticate).map((route, index) => {
                                    return <Route key={index} {...route}/>
                                })
                            }
                        </Authenticate>
                        <Authenticate unauth={true}>
                            {
                                urlList.filter(route => !route.authenticate).map((route, index) => {
                                    return <Route key={index} {...route}/>
                                })
                            }
                        </Authenticate>
                    </BrowserRouter>
                </If>
            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return {...ownProps, ...state};
};
export default connect(mapStateToProps, {getUser, registerUser})(App);
