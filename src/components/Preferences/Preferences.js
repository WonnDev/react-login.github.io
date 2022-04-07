import React from 'react';
import { connect } from 'react-redux';

const Preferences = (props) => {
  const handleOnClickDelete = (account) => {
    console.log('ClickDelete: ', account);
    props.deleteOneAccount(account)
  }
  const handleOnClickEdit = (account) => {
    props.editAccount(account)
  }
  const name = props.name;



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
        <h1>Account List  </h1>
      </div>
      <div>
        {listUsers && listUsers.length > 0 &&
          listUsers.map((item, index) => {
            return (
              <div key={item.id}>
                id: {index + 1} - user: {item.name} - pw: {item.password}
                &nbsp; <span onClick={() => handleDeleteUser(item)}><button> x </button></span>

              </div>
            )
          })
        }
        <button onClick={() => handleCreateUser()}>Add new</button>
      </div>


      <div>
        {name && name?.length > 0 && name.map((item, index) => {
          return (
            <div key={item?.id}>
              <div>
                User: {item?.name} - Password: {item?.pass}
                <></> <button onClick={() => handleOnClickEdit(item)}>Edit</button>
                <></> <button onClick={() => handleOnClickDelete(item)}>Delete</button>
              </div>
            </div>
          )
        })
        }
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

export default connect(mapStateToProps, mapDisPatchToProps)(Preferences);