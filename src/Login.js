import React, { useState } from 'react'; 
import './Login.css'; // Create a separate CSS file for styling 
import Navbar from './Navbar'; 


function Login() { 
const [formData, setFormData] = useState({ 
name: '', 
email: '', 
phone: '', 
birthdate: '', 
city: '', 
state: '', 
country: '', 
password: '', 
}); 

const handleChange = (e) => { 
const { name, value } = e.target; 
setFormData({ 
...formData, 
[name]: value, 
}); 
}; 

const handleSubmit = (e) => { 
e.preventDefault(); 
// Add your login logic here (e.g., send data to the server) 
}; 


return ( 

<div className="login-container"> 

<Navbar /> 
<div className="login-box"> 
<form onSubmit={handleSubmit}> 
<label> 

Name: 
<input
type="text" 
name="name" 
value={formData.name} 
onChange={handleChange} 
/> 
</label> 

<label> 
Email id: 
<input 
type="email" 
name="email" 
value={formData.email} 
onChange={handleChange} 
/> 
</label> 

<label> 
Phone: 
<input 
type="text" 
name="phone" 
value={formData.phone} 
onChange={handleChange} 
/> 
</label> 

<label> 
Birthdate: 
<input 
type="text" 
name="birthdate" 
value={formData.birthdate} 
onChange={handleChange} 
/> 
</label>

<label> 
Location: 
<input 
type="text" 
name="city" 
value={formData.city} 
onChange={handleChange} 
placeholder="City" 
/> 

<input 
type="text" 
name="state" 
value={formData.state} 
onChange={handleChange} 
placeholder="State" 
/> 

<input 
type="text" 
name="country" 
value={formData.country} 
onChange={handleChange} 
placeholder="Country" 
/> 
</label> 
<label> 
Create Password: 
<input
type="password" 
name="password"
value={formData.password} 
onChange={handleChange} 
/> 
</label> 
<button type="submit">Log In</button> 
</form> 
</div> 
</div> 
); 
} 

export default Login;