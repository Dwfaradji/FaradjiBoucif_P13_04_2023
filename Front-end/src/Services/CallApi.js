import axios from "axios"


export default async function CallApi(email, password) {
    const data = {
        "email": email,
        "password": password
    };
    try {
        const response = await axios.post('http://localhost:3001/api/v1/user/login', data);
        const rawData = await response.data;
        if (rawData.status === 200) {
            localStorage.setItem('token', rawData.body.token);
            localStorage.setItem('active', "true");
            return true
        }
    } catch (error) {
        console.log('Erreur lors de la requête POST', error);
    }
};

