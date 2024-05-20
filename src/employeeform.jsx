import React from "react";
import { Field, Form, Formik } from "formik";
function Employee(){
    return <div className="p-2 border border-2 border-warning m-1">
        <h2 className="p-2 text-danger">Employee Form</h2>
        <Formik
        initialValues={{
            fullname:'',
            dateofbirth:'',
            place:''
        }}
        onSubmit={(values)=>{
            console.log(values)
        }}
        >
        {/* {
            (empform)=>{
                return <form onSubmit={empform.handleSubmit}>
                  Full name : <input type="text" {...empform.getFieldProps('fullname')}/>
                  <br />
                  <br />
                  Date of Birth : <input type="date" {...empform.getFieldProps('dateofbirth')}/>
                  <br />
                  <br />
                  Place : <input type="text" {...empform.getFieldProps('place')}/>
                  <br />
                  <button>Save Details</button>
                </form>
            }
        } */}

            {/* We can write forms using input fields and field components-> shown below */}

        <Form>
            <label>Fullname :</label>
            <Field name='fullname' type='text'></Field>
            <br />
            <label htmlFor="">Date of birth :</label>
            <Field name='dateofbirth' type='date'></Field>
            <br />
            <label htmlFor="">Place :</label>
            <Field name='place' type='text'></Field>
            <br />
            <br />
            <button className="btn btn-success">Add Employee details</button>
        </Form>

        </Formik>
    </div>
}
export default Employee