import * as yup from 'yup';
const formSchema = yup.object().shape({

Name:yup
.string()
.trim()
.required("Please write your name"),
Email:yup
.string()
.email('Valid email please')
.required("You forgot to enter an email address"),
Password: yup
.string()
.required('Password is required'),

TermsOfService: yup
.boolean()

})

export default formSchema;