import React from 'react';

const Preferences = (props) => {
  
  const handleOnClickDelete = (account) => {
    console.log('ClickDelete: ', account);
    props.deleteOneAccount(account)
  }

  const handleOnClickEdit = (account) => {
    props.editAccount(account)
  }

  const name = props.name;
 
  return (
   
   <>
      <div>
      <h1>Account List  </h1>
      </div>
      
      <div>
        { name && name?.length > 0 && name.map((item, index) => {
          return(
            <div key={item?.id}>
              <div>
                User: {item?.name} - Password: {item?.pass}
                <></> <button onClick={ ()=> handleOnClickEdit(item)}>Edit</button>
                <></> <button onClick={ ()=> handleOnClickDelete(item)}>Delete</button>
              
              </div>
            </div>
          )
         })
        }
        
      </div>
    
    </>
  );
}
export default Preferences;