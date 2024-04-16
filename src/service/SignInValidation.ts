import * as Yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export default class Validation{
     static signInValidation = Yup.object({
        phonenumber:Yup.string().required("please Entrer phoneNumber"),
        password:Yup.string().required("please Entrer password")
    });


    static signUpValidation = Yup.object({
        phonenumber:Yup.string().required("please Entrer phoneNumber")
        .matches(phoneRegExp, 'Phone number is not valid'),
        password:Yup.string().required("please Entrer password").min(6),

         rePassword:Yup.string()
          .oneOf([Yup.ref('password')], 'Must match "password" field value')
          .required("please Entrer confirm password"),
       
        firstName:Yup.string().required("please entrer firstname").min(2,"min tow charachters"),
        lastName:Yup.string().required("please entrer lastname").min(2,"min tow charachters"),
        address:Yup.string().required("please entrer your address"),
    });


}