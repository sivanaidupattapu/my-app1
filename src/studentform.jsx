import React from "react";
import { Formik, useFormik } from "formik";
import * as Yup from 'yup';
function StudentForm() {
    var StudentForm = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            age: '',
            password: '',
            username: ''
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
                .required(),
            username: Yup.string().test('uniqueusername', 'This username is already exists', function (un) {
                // console.log('hello username validator',un) 
                // in (un) data is passing 
                let { path, createError } = this;
                let p = new Promise((resolve, reject) => {
                    fetch(`https://api.github.com/users/${un}`)
                        .then((res) => res.json())
                        .then((data) => {
                            reject(createError({ path}))
                        })
                        .catch(error => {
                            resolve(true)
                        })
                })
                return p
            })
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
                <input type="text"  {...StudentForm.getFieldProps('firstname')} />
                <div>
                    {StudentForm.touched.firstname && StudentForm.errors.firstname && <b className="text-danger">Enter your firstname</b>}
                </div>
                <br />
                <label>Last name :</label>
                <input type="text" {...StudentForm.getFieldProps('lastname')} />
                <br />
                <br />
                <label>Age :</label>
                <input type="number" {...StudentForm.getFieldProps('age')} />
                <br />
                <br />
                <label>Password :</label>
                <input type="password" {...StudentForm.getFieldProps('password')} />
                <br />
                <br />
                <label>User name :</label>
                <input type="text" {...StudentForm.getFieldProps('username')} />
                <br />
                <button className="btn btn-success">Submit</button>
            </form>
        </div>
        {JSON.stringify(StudentForm.errors)}
    </div>

}
export default StudentForm