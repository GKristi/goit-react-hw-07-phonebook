import { useDispatch } from 'react-redux';
import {
    ContactDeleteBtn,
    ContactItem,
    ContactTextName,
    ContactTextNumber,
} from './ContactListItem.styled';
import { deleteContactThunk } from 'redux/contact/thunks';

const ContactListItem = ({ contacts }) => {
    const dispatch = useDispatch();
    return contacts.map(({ id, name, phone }) => {
        return (
            <ContactItem key={id}>
                <ContactTextName>{name}:</ContactTextName>
                <ContactTextNumber>{phone}</ContactTextNumber>
                <ContactDeleteBtn onClick={() => dispatch(deleteContactThunk(id))}>
                    delete
                </ContactDeleteBtn>
            </ContactItem>
        );
    });
};

export default ContactListItem;