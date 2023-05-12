import axios from "axios"


/**
 *
 * @param {string} email
 * @param {string} password
 * @returns {Promise<any>}
 * @constructor
 */
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
            localStorage.setItem('active', "true")
            console.log(response.data)
            return rawData
        }
    } catch (error) {
        console.log('Erreur lors de la requête POST', error);
    }
}


/**
 *
 * @param {string}firstName
 * @param {string} lastName
 * @param {string} token
 * @returns {Promise<*>}
 */
export async function updateProfile(firstName, lastName, token) {
    const url = 'http://localhost:3001/api/v1/user/profile';
    const headers = {
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    };

    const data = {
        "firstName": firstName,
        "lastName": lastName
    };

    try {
        const response = await axios.put(url, data, {headers});
        const rawData = await response.data;
        console.log(rawData)
        return rawData.body
    } catch (error) {
        console.log('Erreur lors de la requête POST', error);
    }
}


/**
 *
 * @param {string} token
 * @returns {Promise<{firstName: (string|*), lastName: (string|*), id, email}>}
 */
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




