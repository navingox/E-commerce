import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));


const AddProduct = () => {
const classes=useStyles();

  return (
    <div> 
      <Container>
         <Row>
         <Col md={12}>
         <FormControl >
           <TextField
          id="outlined-password-inputs"
          label="Password"
          type="text"
          autoComplete="current-password"
          variant="outlined"
        />
         <TextField
          id="outlined-password-input"
          label="Password"
          type="text"
          autoComplete="current-password"
          variant="outlined"
        /> 
       </FormControl>
         
         </Col>
         </Row>
      </Container>
    </div>
    )
}

export default AddProduct;
