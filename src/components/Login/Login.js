import React, { useState } from 'react';
import './Login.css';
import Preferences from '../Preferences/Preferences';
import Dashboard from '../Dashboard/Dashboard';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';


const Login = () => {
    const [a, setA] = useState({
        'name': '',
        'pass': ''
    });

    const [c, setC] = useState({
        'id': '',
        'username': '',
        'password': ''
    });

    const listUsers = useSelector(state => state.currentUser);
    console.log('checklistuser: ', listUsers);



    const [real_account, setB] = useState(
        [
            { id: 0, name: 'admin', pass: 'admin' },
            { id: 1, name: 'b', pass: 'b' }
        ],
    );


    const addNewAccount = (account) => {

        setB([...real_account, account])


    }
    const editAccount = (account) => {
        setC({
            ...c, id: account.id,
            username: account.name,
            password: account.pass
        });

    }


    console.log('Check real_account', real_account);


    const onHandleInputChange = (event) => {
        setA({ ...a, [event.target.name]: event.target.value });
        console.log('handInput check: ', a);
    }

    const handleLogin = (event) => {
        event.preventDefault();

        let flash = false;
        for (let x in real_account) {
            if (real_account[x].name === a.name && real_account[x].pass === a.pass) {



                flash = true;
                break;
            }

        }
        if (flash === true) {
            alert('Login success');
        } else { alert('Login fail'); }

    }

    const deleteOneAccount = (account) => {
        let delAccount = [];
        delAccount = real_account.filter(
            item => {
                return (
                    item.id !== account.id
                )
            });

        setB(delAccount);
    }

    return (
        <>
            <div className="login-wrapper">
                <div>
                    <img src='favicon.ico' alt='logo' />
                </div>
                <h1>Log In</h1>
                <form >
                    <label>
                        <p>Username:</p>
                        <input type="text"
                            name="name"
                            value={a.name}
                            onChange={(event) => { onHandleInputChange(event) }}
                            placeholder="Enter Username"
                        />
                    </label>
                    <label>
                        <p>Password:</p>
                        <input type="current-password"
                            name='pass'
                            value={a.pass}
                            onChange={(event) => { onHandleInputChange(event) }}
                            placeholder="Enter Password"
                        />
                    </label>
                    <div>
                        <button type="submit"
                            onClick={(event) => {
                                handleLogin(event)
                            }}
                        >Login</button>

                    </div>
                </form>





            </div>
            <Dashboard
                nameC={c}
                addNewAccount={addNewAccount}
                setName={setB}
                name={real_account}
            />
            <Preferences
                name={real_account}
                deleteOneAccount={deleteOneAccount}
                editAccount={editAccount}
            />

        </>
    )

}
const mapStateToProps = (state) => { //state of redux
    return {
        dataRedux: state.users
    }
}


export default connect(mapStateToProps)(Login); //connect is HOC(higher order component)(HOC => HOC) (mapState tao ket noi redux va react)

