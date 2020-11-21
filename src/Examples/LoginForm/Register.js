import React, {useState}from 'react';
import {useHistory} from 'react-router-dom';
 
function Register(props) {
    const username = useFormInput('');
    const email = useFormInput('');
    const password = useFormInput('');
    const confirmPassword = useFormInput('');
    const contact = useFormInput('');
    const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
    
  const history = useHistory();
  // handle click event of logout button
  const handleLogin = () => {    
    history.push('/login');
  }
 
  return (
    <div>
      Welcome User!<br /><br />
      <div>
      Username<br />
        <input type="text" {...username} autoComplete="new-password" />
      </div>
      <div>
      Email<br />
        <input type="text" {...email} autoComplete="new-password" />
      </div>
      <div>
      Password<br />
        <input type="password" {...password} autoComplete="new-password" />
      </div>
      <div>
      Confirm Password<br />
        <input type="password" {...confirmPassword} autoComplete="new-password" />
      </div>
      <div>
      Contact<br />
        <input type="text" {...contact} autoComplete="new-password" />
      </div>
      <input type="button" value={loading ? 'Loading...' : 'Register'} onClick={handleLogin} disabled={loading} />
    </div>
  );
}
const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);
   
    const handleChange = e => {
      setValue(e.target.value);
    }
    return {
      value,
      onChange: handleChange
    }
  }
export default Register;
