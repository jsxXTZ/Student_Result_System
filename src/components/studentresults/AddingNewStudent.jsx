import { useState } from 'react'
import validator from 'validator'
import { Link } from 'react-router-dom'
import './HomePage.css'
import axios from 'axios'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import moment from 'moment'
import { addNewStudentApi } from "./api/StudentService"
import {useNavigate} from 'react-router-dom'

function AddingNewStudent() {
    const[username, setUsername] = useState('')
    const[familyname, setFamilyname] = useState('')
    const[dateofbirth, setDateofbirth] = useState('')
    const[email, setEmail] = useState('')
    const navigate = useNavigate()


    function onSubmit(values){
        const student = {
            name: values.name,
            familyname: values.familyname,
            dob: values.dob,
            email: values.email,
            done: false
        }

        console.log(student)

        addNewStudentApi(values.name, student)
            .then(response => {
                navigate('/studentList')
            })
            .catch(error => console.log(error))
    }

    function validate(values) {
        let errors = {
            name: 'Enter a valid name',
            dob: 'Enter a valid dob'
        }

        if(values.name.length<5) {
            errors.description = 'Enter atleast 5 characters'
        }

        if(values.dob == null || values.dob=='' || !moment(values.dob).isValid()) {
            errors.dob = 'Enter a dob'
        }

        console.log(values)
        return errors
    }
    
        return (
            <div className="container">
                <div>
                <Formik 
                    onSubmit = {onSubmit}
                    validate = {validate}
                    validateOnChange = {false}
                    validateOnBlur = {false}
                >
                {
                    (props) => (
                        <Form>
                            <ErrorMessage 
                                name="name"
                                component="div"
                                className = "alert alert-warning"
                            />
                            
                            <ErrorMessage 
                                name="dob"
                                component="div"
                                className = "alert alert-warning"
                            />

                            <fieldset className="form-group">
                                <label>FirstName:</label>
                                <Field type="text" className="form-control" name="name" />
                            </fieldset>
                            <fieldset className="form-group">
                                <label>FamilyName:</label>
                                <Field type="text" className="form-control" name="familyname" />
                            </fieldset>
                            <fieldset className="form-group">
                                <label>dob</label>
                                <Field type="date" className="form-control" name="dob"/>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Email:</label>
                                <Field type="text" className="form-control" name="email" />
                            </fieldset>
                            <div>
                                <button className="btn btn-success m-5" type="submit">Save</button>
                            </div>
                        </Form>
                    )
                }
                </Formik>
                </div>
            </div>
        )
    }
    
    
    export default AddingNewStudent
    