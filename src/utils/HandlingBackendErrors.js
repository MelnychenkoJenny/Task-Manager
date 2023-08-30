const errMessageList = {
    400: 'Please enter correct email or password',
    401: 'Password or email is incorrect',
    403: 'Forbidden',
    404: 'No Such Page',
    409: 'The email address you have entered is already associated with another account'
}

export default function HandlingBackendErrors(err){
    return errMessageList[err];
}