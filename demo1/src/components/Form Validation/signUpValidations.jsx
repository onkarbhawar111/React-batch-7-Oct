import * as Yup from 'yup'


export const signUpValidation = Yup.object({
    name: Yup.string().required('Name is required....!!!!'),
    email: Yup.string().email().required('Email is compulsory...'),
    password: Yup.string().min(3).max(10).required('Password is required...'),
    cpassword: Yup.string().oneOf([Yup.ref('password')], "Password not matched..").required('Compulsory field !!!')
})