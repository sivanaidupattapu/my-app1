import React from "react";
import { Formik, useFormik } from "formik";
import * as Yup from 'yup';
function StudentForm() {
    var StudentForm = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            age: '',
            password: ''
        },
        validationSchema: Yup.object({
            firstname: Yup.string()
                .required('Required')
                .max(15, 'Must be 15 characters or less'),
            lastname: Yup.string()
                .required('Required')
                .max(15, 'Must be 15 characters or less'),
            age: Yup.number().test('Check', 'Age is not correct', (x) => {
                console.log('inside custom validation', x)
                if (x > 18 && x < 45) {
                    return true
                }
                else {
                    return false
                }
            }),
            password: Yup.string().matches(/^(?=.{5,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W])/, 'Try again')
                .required()
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    })
    return <div className="p-2">
        <h2 className="text-center text-info">Student form</h2>
        <div>
            <form onSubmit={StudentForm.handleSubmit} >
                <label>First name :</label>
                <input className={StudentForm.touched.firstname && StudentForm.errors.firstname && 'border border-danger'}
                    type="text"  {...StudentForm.getFieldProps('firstname')}/>
                    {/* name='firstname' onChange={StudentForm.handleChange} onBlur={StudentForm.handleBlur} */}
                <div>
                    {StudentForm.touched.firstname && StudentForm.errors.firstname && <b className="text-danger">Enter your firstname</b>}
                </div>
                <br />
                <label>Last name :</label>
                <input type="text" {...StudentForm.getFieldProps('lastname')} />
                <div>
                    {StudentForm.touched.lastname && StudentForm.errors.lastname && <b className="text-danger-emphasis">Enter lastname</b>}
                </div>
                <br />
                <label>Age :</label>
                <input type="number" {...StudentForm.getFieldProps('age')} />
                <div>
                    {StudentForm.touched.age && StudentForm.errors.age && <b className="text-danger-emphasis">Enter age</b>}
                </div>

                <br />
                <label>Password :</label>
                <input type="password" {...StudentForm.getFieldProps('password')} />
                <div>
                    {StudentForm.touched.password && StudentForm.errors.password && <b className="text-warning">Please enter Special characters / numbers,@</b>}
                </div>
                <br />
                <button>Submit</button>
            </form>
        </div>
    </div>

}
export default StudentForm