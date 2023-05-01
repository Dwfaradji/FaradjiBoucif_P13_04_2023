import axios from "axios"


export async function Login(email, password) {
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
            return response.data
        }
    } catch (error) {
        console.log('Erreur lors de la requête POST', error);
    }
}


export async function updateProfile(email, password, token) {
    const url = 'http://localhost:3001/api/v1/user/profile';
    const headers = {
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    };

    const data = {
        "firstName": email,
        "lastName": password
    };
    try {
        const response = await axios.put(url, data, {headers});
        const rawData = await response.data;
        return rawData.body
    } catch (error) {
        console.log('Erreur lors de la requête POST', error);
    }
}


export async function getProfile(token) {
    const url = 'http://localhost:3001/api/v1/user/profile';
    const headers = {
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    };
    try {
        const response = await axios.post(url, {}, {headers});
        const rawData = await response.data
        return {
            id: rawData.body.id,
            firstName: rawData.body.firstName,
            lastName: rawData.body.lastName,
            email: rawData.body.email
        };
    } catch (error) {
        console.log('Erreur lors de la requête POST', error);
    }
}




