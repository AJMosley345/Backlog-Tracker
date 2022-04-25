import React from "react";
import { useFormik } from "formik";
import { 
    Box, 
    Container, 
    TextField, 
    Button, 
    Select, 
    MenuItem, 
    InputLabel, 
    FormControl,
    Typography
} from "@mui/material";
import game_info from "../get_game_info/gameinfo_a";

function AddGame () {
    const formik = useFormik({
        initialValues: {
            name:'',
            hours: 0,
            completion_status: '',
        },
        onSubmit: values  => {
            console.log('Form values', values)
            game_info.post('/game_info/', values)
            formik.resetForm();
        }
    })
    const csKeys = ['', 'I', 'P', 'C']

    return (
        <>
            <div>
                <Box mt={3} component="form" onSubmit={formik.handleSubmit}>
                    <Container 
                        display='flex' 
                        flexdirection='column' 
                        justifycontent='center'
                    >
                        {/*Name Field*/}
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
                        {/*Hours Field*/}
                        <Box mt={3}>
                            <TextField
                                type="number"
                                required
                                variant="outlined"
                                id='hours'
                                label='Hours'
                                onChange={formik.handleChange}
                                value={formik.values.hours}
                                />
                        </Box>
                        {/*Completion Status Field*/}
                        <FormControl variant="standard" sx={{ minWidth: 200 }}>
                            <InputLabel id="completion">Completion Status</InputLabel>
                            <Select
                                name='completion_status'
                                required
                                id='completion_status'
                                label='Completion Status'
                                onChange={formik.handleChange}
                                value={formik.values.completion_status}
                            >
                                <MenuItem value={''} id={''}>
                                    <em>None</em>
                                </MenuItem>
                                {csKeys.map((option) =>(
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Typography>I=Incomplete P=Playing C=Complete</Typography>
                        
                        {/*Submit*/}
                        <Box mt={1}>
                            <Button 
                            variant="contained" 
                            type='submit'
                            color="grey"
                            >
                                Add
                            </Button>
                        </Box>
                    </Container>
                </Box>
            </div>
        </>
  );
  
}

export default AddGame;