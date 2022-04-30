import React, { useState } from 'react'

import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
// import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import AddIcon from "@material-ui/icons/Add";
import { Fab } from "@material-ui/core";
import axios from "axios"
import { useHistory } from "react-router-dom";
const Signup = () => {


    let history = useHistory()

    function register(event) {
        event.preventDefault()
        axios.post("https://ndrfassemble.herokuapp.com/profile", { info })
            .then((result) => {
                console.log(result)
                // localStorage.setItem("token",result.data)
                history.push("/")
            })
    }





    const paperStyle = { padding: '30px 20px', width: 400, margin: 0 }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    const [selectedFile, setSelectedFile] = useState(null);
    const [info, setinfo] = useState({
        username: "",
        email: "",
        phone_number: "",
        currentlocationlatitude: "",
        currentlocationlongitude: "",
        password: "",

    })

    function register(event) {
        event.preventDefault()
        axios.post("https://ndrfassemble.herokuapp.com/profile", info)
            .then((result) => {
                console.log(result)
                localStorage.setItem("token", info)
                history.push("/")
            })
    }


    console.log(info)


    async function getLocation(event) {


        event.preventDefault()

        if (navigator.geolocation) {
            (navigator.geolocation.getCurrentPosition(showPosition))


        }


    }

    async function showPosition(position) {
        console.log(position)

        setinfo((prev) => {
            return {
                ...prev,
                currentlocationlatitude: position.coords.latitude,
                currentlocationlongitude: position.coords.longitude
            }
        })

        // setViewport((prev) => {
        //     return {
        //         ...prev,
        //         latitude: position.coords.latitude,
        //         longitude: position.coords.longitude

        //     }
        // })
        // const cuser = localStorage.getItem("token")

        // const res = await axios.post(`${url}/log/location`, { username: cuser, lat: position.coords.latitude, lang: position.coords.longitude })
        // setcurrentuser(res.data)

    }


    function setName(e, name) {
        setinfo((prev) => {
            return {
                ...prev,
                [name]: e.target.value
            }
        })
    }

    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField onChange={(e) => setName(e, "name")} fullWidth label='Name' placeholder="Enter your name" />
                    <TextField onChange={(e) => setName(e, "email")} fullWidth label='Email' placeholder="Enter your email" />
                    <TextField fullWidth onChange={(e) => setName(e, "phonenumber")} label='Phone-Number' placeholder="Enter your email" />


                    <TextField fullWidth onChange={(e) => setName(e, "password")} label='Password' placeholder="Enter your password" />
                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password" />
                    <button onClick={(event) => getLocation(event)}>Access Location</button>
                    {/* <label>User Image 
                    <input
                     fullWidth
                     type="file"
                         //value={values.link}
                         //onChange={handleInputChange}
                         vafilelue={selectedFile}
                         onChange={(e) => setSelectedFile(e.target.files[0])}
                         name="link"
                         label="Image"
                     />
                    </label>
                    <label>Aadhar Image 
                    <input
                     
                     type=""
                         //value={values.link}
                         //onChange={handleInputChange}
                         value={selectedFile}
                         onChange={(e) => setSelectedFile(e.target.files[0])}
                         name="link"
                         label="Image"
                     />
                    </label> */}
                    <label htmlFor="upload-photo">
                        <Fab color="primary" size="small" component="span" aria-label="add" style={{ margin: '15px' }}>
                            <AddIcon />
                        </Fab>
                        <p> Add image
                        </p>
                    </label>
                    <input
                        onChange={(e) => console.log(e.target.files[0])}
                        style={{ visibility: 'hidden' }}
                        id="upload-photo"
                        name="upload-photo"
                        type="file"
                    />

                    <label htmlFor="upload-photo">
                        <Fab color="primary" size="small" component="span" aria-label="add" style={{ margin: '15px' }}>
                            <AddIcon />
                        </Fab>
                        <p> Add Aadhar image
                        </p>
                    </label>
                    <input
                        onChange={(e) => console.log(e.target.files[0])}
                        style={{ visibility: 'hidden' }}
                        id="upload-photo"
                        name="upload-photo"
                        type="file"
                    />

                    <br />
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button onClick={register} fullWidth type='submit' variant='contained' color='primary'>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;