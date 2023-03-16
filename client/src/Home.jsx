import React, { useState } from 'react';
import axios from "axios";
import User from "./User";
import TextField from '@mui/material/TextField';

const Home = () =>{

      const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const [tableData,setTableData] = useState([]);

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });        
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        getUsers();
      };

      const getUsers = async ()=>{
        try {
          const res = await axios.get("/users");
          console.log(res);
          setTableData(res.data);
        } catch (error) {
          console.log(error);
        }
      }

    return (
        <>        
            <div className="container" style={{width:"60%", margin:"2%"}}>
            <form onSubmit={handleSubmit}>
            <div className="form-row">
                <TextField id="outlined-basic" label="Email" variant="outlined" name="email" onChange={handleChange} style={{marginRight:"5%"}}/>
                <TextField id="outlined-basic" label="Phone" variant="outlined" name="phone" onChange={handleChange}/>
            </div>
            <div className="form-row" style={{marginTop:"5%"}}>
                <TextField id="outlined-basic" label="Payment Channel" variant="outlined" name="paymentChannel" onChange={handleChange} style={{marginRight:"5%"}}/>
                <TextField id="outlined-basic" label="Status" variant="outlined" name="status" onChange={handleChange}/>
            </div>
            <br />
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>

            <User data={tableData} />
        </>
    );
}

export default Home;