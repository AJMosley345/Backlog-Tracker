import React from "react";
import { Formik, useFormik } from "formik";
import { Box, Container, TextField, Button, Select, MenuItem } from "@mui/material";
import game_info from "./gameinfo_a";

function AddGame () {
    const [value, setValue] = React.useState("");

    const formik = useFormik({
        initialValues: {
            name:'',
            hours:0,
            completion: ""
        },
        onSubmit: values  => {
            console.log('Form values', values)
            game_info.post('/game_info/', values)
            formik.resetForm();
        }
    })

    return (
        <>
            <div>
                <Box mt={3} component="form" onSubmit={formik.handleSubmit}>
                    <Container 
                        display='flex' 
                        flexdirection='column' 
                        justifycontent='center'
                    >
                        <Box mt={1}>
                        <TextField
                            required
                            variant="outlined"
                            id='name'
                            label='Game Title'
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            />
                        </Box>
                        <Select
                            id="completion"
                            value={formik.values.completion}
                            label="completion"
                            onChange={formik.handleChange}
                        >
                            <MenuItem value={formik.values.comp_choices}>Incomplete</MenuItem>
                            <MenuItem value={formik.values.completion}>Playing</MenuItem>
                            <MenuItem value={formik.values.completion}>Complete</MenuItem>
                        </Select>
                        <Box mt={1}>
                        <TextField
                            required
                            variant="outlined"
                            id='hours'
                            label='hours'
                            onChange={formik.handleChange}
                            value={formik.values.hours}
                        />
                        </Box>
                        <Box mt={1}>
                        <Button 
                        variant="contained" 
                        type='submit'
                        color="grey"
                        >
                            Add
                        </Button>
                        <Button 
                            variant="contained" 
                            type='reset'
                            color="grey"
                            onClick={formik.resetForm}
                        >
                            Clear
                        </Button>
                        </Box>
                    </Container>
                </Box>
            </div>
        </>
  );
}


export default AddGame;