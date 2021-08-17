import React from 'react';
import './Login.css';
import { Icon } from '@iconify/react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const Login = () => {
    return (
        <>
        <div className="sign-upBackground">
            <div className="sign-inCard">
                <section class="signup">
                <div class="container">
                    <div className="row">
                    <div className="col-lg-5 col-md-6 col-sm-12">
                            <div class="signup-image">
                                <figure><img src="images/signin-image.jpg" alt="signin-image"/></figure>
                                <a href="/" class="signup-image-link">Create an account</a>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <h2 class="form-title">Sign up</h2>
                                <form method="POST" class="register-form" id="register-form">
                                    <div class="form-group">
                                        <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                        <input type="text" name="name" id="name" placeholder="Your Name" spellcheck="false" data-ms-editor="true"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                                        <input type="password" name="pass" id="pass" placeholder="Password"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="remember-me" class="label-agree-term">
                                        <input type="checkbox" name="remember-me" id="remember-me" class="agree-term"/>
                                            <span><span></span></span>Remember me</label>
                                    </div>
                                    <div class="form-group form-button">
                                        <input type="submit" name="signup" id="signup" class="form-submit" value="Login"/>
                                    </div>
                                </form>
                                {/* <div class="social-login">
                                    <span class="social-label">Or login with</span>
                                    <ul class="socials">
                                        <li><a href="#"><Icon icon="zmdi:facebook-box" color="lightblue" /></a></li>
                                        <li><a href="#"><i class="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                        <li><a href="#"><i class="display-flex-center zmdi zmdi-google"></i></a></li>
                                    </ul>
                                </div> */}
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </div>
        </>        
    );
}
export default Login;