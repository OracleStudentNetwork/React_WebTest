import React from 'react'
import GoogleLogin from 'react-google-login'

class Googlesignin extends React.Component {
    render(){
        const responseGoogle = response => {
            console.log(response);
        }
        return(<div className = "googlelogin">
            <h1>Login with Google </h1>
            <GoogleLogin
                clientId="136122883712-eue6mcej6psh8meqkcemd8sklr277544.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                >

                </GoogleLogin>
          </div>)
    }
    
}
export default Googlesignin