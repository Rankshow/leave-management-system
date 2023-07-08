import React, {useEffect, useState} from "react";
import { Form, FormControl, FormLabel, FormGroup, Button } from "react-bootstrap";


const AddEdit = () => {
  const value = {
    name: "",
    procurement: "",
    accounting: "",
  };

  // useState
  const [initialState, useInitialState] = useState(value);
  const {name, procurement, accounting} = useInitialState;

  // handleInputOnChange
  const handleInputOnchange = () => {
    
  }

  // handleSubmit
  const handleSubmit = () => {

  }

  return(
    <>
      <div className="py-4">
        <div className="w-50 mx-auto justify-content-center">
          <div className="w-100">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                <Form.Control onChange={handleInputOnchange} type="email" placeholder="Enter Name" />  
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicProcurement">
                  <Form.Label>Procurement</Form.Label>
                  <Form.Control value={procurement} onChange={handleInputOnchange} type="text" placeholder="Enter Procurement" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAccounting">
                   <Form.Label>Accounting</Form.Label>
                  <Form.Control value={accounting} onChange={handleInputOnchange} type="text" placeholder="Accounting" />
                </Form.Group>
                <Button className="mr-4" variant="primary">
                  Cancel
                </Button>
                <Button variant="success" type="submit">
                  Submit
                </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}
export default AddEdit;