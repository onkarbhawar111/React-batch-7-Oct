// import {useFormik} from 'formik'
// import { signUpValidation } from './signUpValidations'

// const initialValues = {    name:'',
//     email:'',
//     password:'',
//     cpassword:'',}

// const FormValidation = () => {
//     const {handleSubmit, handleBlur, handleChange, errors} = useFormik({
//         initialValues: initialValues,
//         validationSchema: signUpValidation,
//         onSubmit: (values)=>{
    //             console.log(values)
    //         }
//     })
//   return (
//     <div>
//         <form style={{margin: '50px'}} onSubmit={handleSubmit}>
//             <div>
//             <label htmlFor="name">Name: </label>
//             <input type="text" name='name' placeholder='Enter your name' onBlur={handleBlur} onChange={handleChange} />
//             </div>
//             {errors.name && <small>{errors.name}</small>}
//             <br />
//             <br />
//             <div>
//             <label htmlFor="email">Email: </label>
//             <input type="email" name='email' placeholder='Enter your email' onBlur={handleBlur} onChange={handleChange} />
//             </div>
//             {errors.email && <small>{errors.email}</small>}
//             <br /><br />
//             <div>
//             <label htmlFor="password">Password: </label>
//             <input type="password" name='password' placeholder='Enter your password' onBlur={handleBlur} onChange={handleChange} />
//             </div>
//             {errors.password && <small>{errors.password}</small>}
//             <br /><br />
//             <div>
//             <label htmlFor="cpassword">Confirm Password: </label>
//             <input type="password" name='cpassword' placeholder='Enter your password' onBlur={handleBlur} onChange={handleChange} />
//             </div>
//             {errors.cpassword && <small>{errors.cpassword}</small>}
//             <br /><br />
//             <button type='submit'>Submit</button>
//         </form>
//     </div>
//   )
// }

// export default FormValidation




//////////////////////////////////////////////////////

import { signUpValidation } from "./signUpValidations";
import {Formik, Form, Field, ErrorMessage} from 'formik'

const initialValues = {    name:'',
    email:'',
    password:'',
    cpassword:'',}
const FormValidation = () => {
  return (
    <div>
        <Formik
        validationSchema={signUpValidation}
        onSubmit={(values)=>{
            console.log(values)
        }}
        initialValues={initialValues}
        >
            {(error)=>(
                <Form>
                    <label>Name: </label>
                    <Field type='text' name='name'></Field>
                    <ErrorMessage name="name" component='small' />
                    <br /><br />

                    <label>Email: </label>
                    <Field type='email' name='email'></Field>
                    <ErrorMessage name="email" component='small' />
                    <br /><br />
                    <label>Password: </label>
                    <Field type='password' name='password'></Field>
                    <ErrorMessage name="password" component='small' />
                    <br /><br />
                    <label>Confirm Password: </label>
                    <Field type='password' name='cpassword'></Field>
                    <ErrorMessage name="cpassword" component='small' />
                    <br /><br />
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    </div>
  )
}

export default FormValidation