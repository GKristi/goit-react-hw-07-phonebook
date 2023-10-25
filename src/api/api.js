import axios from 'axios';

axios.defaults.baseURL =
    'https://6538d946a543859d1bb20c08.mockapi.io/contacts';

export const getAllContacts = async () => {
    return (await axios.get('/contacts')).data;
};

export const createContact = async data => {
    return (await axios.post('/contacts', data)).data;
};

export const deleteContact = async id => {
    return (await axios.delete(`/contacts/${id}`)).data;
};