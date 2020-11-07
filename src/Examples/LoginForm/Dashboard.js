import React from 'react';
//import Login from './Login';
import {useHistory} from 'react-router-dom';
 
function Dashboard(props) {
  const history = useHistory();
  // handle click event of logout button
  const handleLogout = () => {    
    history.push('/login');
  }
 
  return (
    <div>
      Welcome User!<br /><br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}
 
export default Dashboard;

