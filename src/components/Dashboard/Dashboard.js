import React, { useEffect, useState } from 'react';



  
const Dashboard = (props) => {

const {name} = props;
const {nameC} = props;


  // const handleChangeUsername = (event) => { props.setName({...props.name.username, [props.name.username]: event.target.value})}
  // const handleChangePassword = (event) => { props.setName({...props.name.password, [props.name.password]: event.target.value})}
 

  const [c,setC] = useState({
    'id': nameC.id,
    'username': nameC?.username,
    'password': nameC?.password
  });


  const handleChangeUsername = (event) => { setC({...c, username: event.target.value})}
  const handleChangePassword = (event) => { setC({...c, password: event.target.value})}



  
//}

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('input: ', c);
    console.log('props: ', name);

    let tontai = name.filter(item => {
      return item.id === c.id;
    });
    if (tontai.length>0) {  //day la edit

        
        let newtontai = name.map((item) => {
          if(item.id === c.id){
            return {id: c.id,
              name: c.username,
              pass: c.password
            };
          }
          return item;
        })
        props.setName(newtontai);

    } else { //day la create
        props.addNewAccount({
          id: Math.floor(Math.random() * 100),
          name: c.username,
          pass: c.password
        });
    

        setC({
          id: '',
          'username': '',
          'password': ''
        });
    }
  }

  useEffect(() => {
    console.log("Check arr: ",nameC);

    setC({id: nameC.id,
      username: nameC?.username,
      password: nameC?.password
    })

  }, [nameC])
  
  
  return (
    <>
    <div className="login-wrapper">
      <h1>Sign in / Edit</h1>

        </div>
        <div className="login-wrapper">
        <form>
        <label>
          <p>Username:</p>
          <input type="text"
          name="username"
          value={c.username}
            onChange={(event) => { handleChangeUsername(event) }}
              placeholder="Enter Username"/>
        </label>
        <label>
          <p>Password:</p>
          <input type="current-password"
          name='password'
          value={c.password}
          onChange={(event) => { handleChangePassword(event) }}
              placeholder="Enter Password"/>
        </label>
        <div>
          <button type="submit"
            onClick={(event) => { handleSubmit(event)}}
            >Submit</button>
          </div>
        </form>
        
        </div>
    </>
  );
} 
export default Dashboard;