import React, { useState } from 'react'
import './Register.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
const Register = () => {
    const [DateOfJoining, setDateOfJoining] = useState();
    const [DOB, setDOB] = useState();
    return (
        <>
        <div className="sign-upBackground">
            <div className="sign-upCard">
                <section class="signup">
                <div class="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <h2 class="form-title">Sign up</h2>
                                <form method="POST" class="register-form" id="register-form">
                                    <div class="form-group">
                                        <input type="text" name="name" id="name" placeholder="Full Name (in Bank Account)" spellcheck="false" data-ms-editor="true"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="pan"><i class="zmdi zmdi-email"></i></label>
                                        <input type="pan" name="pan" id="pan" placeholder="PAN Number"/>
                                    </div>
                                    <div class="form-group">
                                        <DatePicker 
                                            selected={DateOfJoining}
                                            onChange={date => setDateOfJoining(date)}
                                            dateFormat = "yyyy/MM/dd"
                                            maxDate={new Date()}
                                            placeholderText="Date Of Birth: YYYY/MM/DD"
                                            isClearable
                                        />
                                    </div>
                                    <div class="form-group">  
                                        <span>
                                            <input type="radio" name="radio_btn" id="male" value="male"/>
                                            <label for="male" class="label-agree-term">
                                                <span><span></span></span>Male</label>
                                        </span>  

                                        <span>
                                            <input type="radio" name="radio_btn" id="female" value="female"/>
                                            <label for="female" class="label-agree-term">
                                                <span><span></span></span>Female</label>
                                        </span>

                                        <span>
                                            <input type="radio" name="radio_btn" id="other" value="other"/>
                                            <label for="other" class="label-agree-term">
                                                <span><span></span></span>Other</label>
                                        </span>
                                    </div>
                                    <div class="form-group">
                                        <DatePicker 
                                            selected={DOB}
                                            onChange={date => setDOB(date)}
                                            dateFormat = "yyyy/MM/dd"
                                            placeholderText="Date Of Joining: YYYY/MM/DD"
                                            isClearable
                                        />
                                    </div>
                                    <div class="form-group">
                                        <span>
                                            <input type="radio" name="user_radio_btn" id="admin" value="admin"/>
                                            <label for="admin" class="label-agree-term">
                                                <span><span></span></span>Admin</label>
                                        </span>  

                                        <span>
                                            <input type="radio" name="user_radio_btn" id="candidate" value="candidate"/>
                                            <label for="candidate" class="label-agree-term">
                                                <span><span></span></span>Candidate</label>
                                        </span>

                                        <span>
                                            <input type="radio" name="user_radio_btn" id="user" value="user"/>
                                            <label for="user" class="label-agree-term">
                                                <span><span></span></span>User</label>
                                        </span>
                                    </div>
                                    <div class="form-group">
                                        <label for="email"><i class="zmdi zmdi-lock"></i></label>
                                        <input type="email" name="email" id="email" placeholder="Email"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                                        <input type="password" name="pass" id="pass" placeholder="Password"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                                        <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="permanent-Flat"><i class="zmdi zmdi-lock-outline"></i></label>
                                        <input type="per_flat" name="per_flt" id="per_flt" placeholder="Permanent Flat"/>
                                    </div>
                                    <div class="form-group form-button">
                                        <input type="submit" name="signup" id="signup" class="form-submit" value="Register"/>
                                    </div>
                                </form>
                        </div>
                        <div className="col-lg-7 col-md-6 col-sm-12">
                            <div class="signup-image">
                                <figure><img src="images/signup-image.jpg" alt="sing_up_image"/></figure>
                                <a href="/sign-in" class="signup-image-link">I am already member</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </div>
        </>        
    );
}
export default Register;