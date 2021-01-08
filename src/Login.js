import React from 'react';

const Login = (props) => {
    const
    {
        email,
        setEmail,
        password,
        setPassword, 
        handleLogin, 
        handleSignup,
        hasAccount, 
        sethasAccount, 
        emailError, 
        passwordError
    }=props;
     
    return(
        <section classname="login">
            <div className="loginContainer">

            <label>Username</label>
            <input 
            type="text" 
            autoFocus 
            required 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            />
            <p className="errorMsg">{emailError}</p>

            <label>password</label>
            <input 
            type="password"
            required
            value={password}
            onChange={(e) =>{setPassword(e.target.value)}}
            />
            <p className="errorMsg">{passwordError}</p>
            <div className="btncontainer">
{
    hasAccount ?(
        <>
<button onClick={handleLogin}>SignIn</button>
<p>Don't have an account?<span onClick={()=>sethasAccount(!hasAccount)}>Sign Up</span></p>
</>
    ) : (
        <>
<button onClick={handleSignup}>SignUp</button>
<p>have an account?<span onClick={()=>sethasAccount(!hasAccount)}>SignIn</span></p>
</>
    )
}
            </div>
            </div>
        </section>
    );
}
export default Login;
