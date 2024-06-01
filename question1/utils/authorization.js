import axios from "axios"
const BASE_URL = 'http://20.244.56.144/test';

//function to get token...
export default async function getToken () {
    const authResponse = await axios.post(`${BASE_URL}/auth`, {
        "companyName": "goMart",
  "clientID": "93946e57-89e6-40f9-947f-2532c2071e4a",
  "clientSecret": "KtWFvOKEKGdzJnuQ",
  "ownerName": "Aditya Tyagi",
  "ownerEmail": "aditya.2125cs1001@kiet.edu",
  "rollNo": "2100290120020"
    });

    return authResponse.data.access_token;
};