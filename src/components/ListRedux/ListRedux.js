import React from 'react';
import { connect } from 'react-redux';

function ListRedux(props) {

    const handleDeleteUser = (user) => {
        console.log('>>checkUserDel: ', user);
        props.deleteUserRedux(user);
    }

    const handleCreateUser = () => {
        props.addUserRedux();
    }

    console.log('>>checkpropsdataredux: ', props.dataRedux)
    let listUsers = props.dataRedux;



    return (
        <>
            <div>
                <h1> Redux Account List  </h1>
            </div>
            <div>
                {listUsers && listUsers.length > 0 &&
                    listUsers.map((item, index) => {
                        return (
                            <div key={item.id}>
                                id: {index + 1} - user: {item.name} - pw: {item.password}
                                &nbsp;
                                <span onClick={() => handleDeleteUser(item)}>
                                    <button> x </button>
                                </span>
                            </div>
                        )
                    })
                }
                <button onClick={() => handleCreateUser()}>Add new</button>
            </div>


        </>
    );
}

const mapStateToProps = (state) => { //state of redux
    return {
        dataRedux: state.users
    }
}

const mapDisPatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' })
    }
}

export default connect(mapStateToProps, mapDisPatchToProps)(ListRedux);