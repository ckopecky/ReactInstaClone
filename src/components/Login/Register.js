import React from 'react';
import "./Login.css";
import logo from "../../assets/instagram_logo.jpg"
import appleLogo from "../../assets/appleLogo.svg"

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            fullname: '',
            username: '',
            password: '',
        }
    }

    toggle = event => {
        if(localStorage.getItem('loggedIn')) {
        localStorage.removeItem('loggedIn');
        this.setState({ loggedIn: false });
        } else {
        localStorage.setItem('loggedIn', true);
        this.setState({ loggedIn: true });
        }
    }

    render(){
        return (
            <>
            <div className="logo-image">
            <img src={logo} alt="instagram-logo"/>
            </div>
            <div className="login-container">
                    <h5>Log in to see photos and videos from your friends.</h5>
                    <div className="login-form" onSubmit={this.toggle}>
                        <a href="./Login"><button className="login-button" onClick={this.props.toggle}>Log in</button></a>
                        <p>By signing up you agree to our <a href="https://help.instagram.com/581066165581870">Terms</a>, <a href="https://help.instagram.com/519522125107875">Data Policy</a> and <a href="https://www.instagram.com/legal/cookies/">Cookies Policy</a></p>
                    </div>
                <p>Get the app.</p>
                <div className="download-from-app-store">
                    <a href="https://itunes.apple.com/us/app/instagram/id389801252?mt=8"><img id="apple" src={appleLogo} alt="Download at the  Store"/></a>
                    <a href='https://play.google.com/store/apps/details?id=com.instagram.android&hl=en_US&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img id="google" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/></a>
                </div>
            </div>
            </>
        )
    }
}

export default Register;