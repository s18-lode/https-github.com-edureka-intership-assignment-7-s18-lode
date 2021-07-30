import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

import '../Styles/header.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '450px'
    },
};

Modal.setAppElement('#root');

class Header extends Component {

    constructor() {
        super();
        this.state = {
            backgroundStyle: '',
            isLoginModalOpen: false,
            isSignupModalOpen: false
        }
    }

    componentDidMount() {
        const initialPath = this.props.history.location.pathname;
        this.setHeaderStyle(initialPath);

        this.props.history.listen((location, action) => {
            this.setHeaderStyle(location.pathname);
        });
    }

    setHeaderStyle = (path) => {
        let bg = '';
        if (path === '/' || path === '/home') {
            bg = 'transparent';
        } else {
            bg = 'coloured';
        }
        this.setState({
            backgroundStyle: bg
        });
    }

    goToHome = () => {
        this.props.history.push('/');
    }

    openLoginModal = () => {
        this.setState({
            isLoginModalOpen: true
        });
    }

    closeLoginModal = () => {
        this.setState({
            isLoginModalOpen: false
        });
    }

    loginHandler = () => {

    }

    loginCancelHandler = () => {
        this.closeLoginModal();
    }

    openSignupModal = () => {
        this.setState({
            isSignupModalOpen: true
        })
    }

    closeSignupModal = () => {
        this.setState({
            isSignupModalOpen: false
        });
    }

    signupHandler = () => {

    }

    signupCancelHandler = () => {
        this.closeSignupModal();
    }

    responseFacebook = () => {

    }

    responseGoogle = () => {

    }

    toggleAuth = (auth) => {
        if (auth === 'login') {
            this.signupCancelHandler();
            this.openLoginModal();
        } else {
            this.loginCancelHandler();
            this.openSignupModal();
        }
    }

    render() {
        const { backgroundStyle, isLoginModalOpen, isSignupModalOpen } = this.state;
        return (
            <React.Fragment>
                <div className="header" style={{ 'background': backgroundStyle === 'transparent' ? 'transparent' : '#eb2929' }}>
                    <div className="container">
                        <div className="row">
                            <div className="logoSection col-6">
                                {
                                    backgroundStyle === 'transparent'
                                        ?
                                        null
                                        :
                                        <div className="logo-small" onClick={this.goToHome}>e!</div>
                                }

                            </div>
                            <div className="loginSection col-6">
                                <button className="login-button" onClick={this.openLoginModal}>Login</button>
                                <button className="signup-button" onClick={this.openSignupModal}>Create an account</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal isOpen={isLoginModalOpen} style={customStyles}>
                    <h2 className="popup-heading">
                        Login
                        <button className="float-end btn btn-close mt-2" onClick={this.closeLoginModal}></button>
                    </h2>
                    <form className="my-4">
                        <input className="form-control" type="text" placeholder="Email" />
                        <input className="form-control my-2" type="password" placeholder="Password" />
                        <button className="btn form-control login-btn" onClick={this.loginHandler}>Login</button>
                        <button className="btn form-control" onClick={this.loginCancelHandler}>Cancel</button>
                    </form>
                    <div className="text-center mt-2">
                        <FacebookLogin 
                            appId=""
                            textButton="Continue with Facebook"
                            autoLoad={true}
                            fields="name,email,picture"
                            callback={this.responseFacebook}
                            cssClass="my-facebook-button-class mb-2"
                            icon="fa-facebook"
                        />
                        <GoogleLogin 
                            clientId=""
                            buttonText="Continue with Google"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            className="my-facebook-button-class"
                        />
                    </div> 
                    <hr className="mt-5"/>
                    <div className="bottom-text">
                        Don’t have account? <button className="text-danger btn m-0 p-0" onClick={() => this.toggleAuth('signup')}>Sign UP</button>
                    </div>
                </Modal>
                <Modal isOpen={isSignupModalOpen} style={customStyles}>
                    <h2 className="popup-heading">
                        Create an account
                        <button className="float-end btn btn-close mt-2" onClick={this.closeSignupModal}></button>
                    </h2>
                    <form className="my-4">
                        <input className="form-control" type="text" placeholder="Firstname" />
                        <input className="form-control my-2" type="text" placeholder="Lastname" />
                        <input className="form-control" type="text" placeholder="Email" />
                        <input className="form-control my-2" type="password" placeholder="Password" />
                        <button className="btn form-control login-btn" onClick={this.signupHandler}>Create account</button>
                        <button className="btn form-control" onClick={this.signupCancelHandler}>Cancel</button>
                    </form>
                    <div className="text-center mt-2">
                        <FacebookLogin 
                            appId=""
                            textButton="Continue with Facebook"
                            autoLoad={true}
                            fields="name,email,picture"
                            callback={this.responseFacebook}
                            cssClass="my-facebook-button-class mb-2"
                            icon="fa-facebook"
                        />
                        <GoogleLogin 
                            clientId=""
                            buttonText="Continue with Google"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            className="my-facebook-button-class"
                        />
                    </div> 
                    <hr className="mt-5"/>
                    <div className="bottom-text">
                        Already have an account? <button className="text-danger btn m-0 p-0" onClick={() => this.toggleAuth('login')}>Login</button>
                    </div>
                </Modal>

            </React.Fragment>
        )
    }
}

export default withRouter(Header);
