import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h2> Questions</h2>
            <div>
                <h3> 1: Difference between authorization and authentication?</h3>
                <p> <span className='text-primary'>Authorization Answer :</span>  <span>Authentication is the process of determining the user’s identity via the available credentials, thus verifying the identity. Some ways to authenticate one’s identity are listed here:
                    Usernames or passwords can be used to establish one’s identity, thus gaining access to the system.
                    OTPs are another way to get access to the system for a single transaction
                    Apps that generate security codes via the third party, thus enabling access for the user
                    Biometrics such as an eye scan or fingerprints can be used to gain access</span></p>

                <p> <span className='text-primary'>Authentication Answer:</span> Authentication Answer: <span>Authorization, meanwhile, is the process of providing permission to access the system. Authorization often follows authentication and is listed as various types. They are:Single-Factor Authentication- use only a username and password, thus enabling the user to access the system quite easily.Two-level security asks for a two-step verification, thus authenticating the user to access the system. For this process, along with the username and password, some unique information including security questions, like first school name and such details, need to be answered. Or the user identity can also be verified with OTP.</span>
                </p>
            </div>
            <div>
                <h3>2: Why are you using firebase? </h3>
                <p><span className='text-primary' >using firebase Answer</span> <span>To go along with the current flow of technological development, every developer wants to build great apps, that will serve as business solutions. If you are one of them, then come on, you are in the right place. For this time, I’m going to help you discover the features and benefits of Firebase to help take your mobile app a notch higher. As a result, you'll understand which backend development solution works better for you, depending on your specific requirements, and the product type (final product, MVP, prototype).

                </span></p>
            </div>
            <div>
                <h3>3:  What other services does firebase?</h3>
                <p><span className='text-primary' >services does firebase Answer</span> <span>Firebase is a Backend-as-a-Service — BaaS — that started as a YC11 startup and grew up into a next-generation app-development platform on Google Cloud Platform.</span></p>
            </div>
        </div>
    );
};

export default Blogs;