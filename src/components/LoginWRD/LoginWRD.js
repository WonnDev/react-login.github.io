import React from "react";
import { connect } from "react-redux";
import { useState } from "react";



function LoginWRD(props) {
    console.log(props.dataRedux)
    const [data, setData] = useState({});
    const [inputText, setInputText] = useState({}); //arr
    const onTextInputNameChange = (e) => {
        setInputText({ ...inputText, [e.target.name]: e.target.value });
        console.log(">>check input name: ", e.target.value)
    };
    // const onTextInputPasswordChange = (e) => {
    //     setInputText(e.target.value);
    //     console.log(">>check input password: ", e.target.value)
    // };
    const handleLogin = () => {
        props.checkLoginWRD(inputText.user, inputText.password)
    }

    return (
        <div className="login-wrapper">
            <div>
                <img src='favicon.ico' alt='logo' />
            </div>
            <div><h1>LoginWRD</h1></div>

            <form >
                <label>
                    <p>Username:</p>
                    <input type="text"
                        name="user"
                        placeholder="Enter Username"
                        value={inputText?.user}
                        onChange={onTextInputNameChange}
                    />
                </label>
                <label>
                    <p>Password:</p>
                    <input type="text"
                        name='password'
                        placeholder="Enter Password"
                        value={inputText?.password}
                        onChange={onTextInputNameChange}

                    />
                </label>
                <div>
                    <button type="submit"
                        onClick={handleLogin}
                    >Login</button>
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => { //state of redux
    return {
        dataRedux: state.users
    }
}

const mapDisPatchToProps = (dispatch) => {
    return {
        checkLoginWRD: (user, password) => dispatch({ type: 'LOGIN_USER', payload: { user, password } })
    }
}

export default connect(mapStateToProps, mapDisPatchToProps)(LoginWRD);