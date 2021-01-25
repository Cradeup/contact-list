import { Contact } from './contact'
import './contact-list.css'
import { connect } from 'react-redux'
import React from 'react'
import { updateContactPhone, createContact, updateContactName, assignId } from '../redux/actions'

const ContactList = (props) => {

    assignOnPageId();

    function assignOnPageId(event) {
        let action = assignId()
        props.dispatch(action);
    }

    function handleSubmit(event) {
        event.preventDefault();
        let action = createContact();
        props.dispatch(action)
    }

    function handleChangePhone(event) {
        let text = newContactPhone.current.value;
        let action = updateContactPhone(text);
        props.dispatch(action)
    }

    function handleChangeName(event) {
        let text = newContactName.current.value;
        let action = updateContactName(text);
        props.dispatch(action)
    }

    let newContactPhone = React.createRef();
    let newContactName = React.createRef();

    return (
        <div className="list-body">
            <div className="list">
                {
                    props.contacts.contacts.map(contact => <Contact contact={contact} key={contact.phone} />)
                }
            </div>
            <div className="add-body">
                <img className="add-contact-img" src="https://cdn.icon-icons.com/icons2/1806/PNG/512/iconfinder-contat-us-10add-contact-4211837_115058.png" />
                <div className="add-contact">Создать контакт</div>
                <form onSubmit={handleSubmit}>
                    <input type='text' ref={newContactName} value={props.contacts.name} placeholder="Имя" onChange={handleChangeName} />
                    <input type='text' ref={newContactPhone} value={props.contacts.phone} placeholder="Номер телефона" onChange={handleChangePhone} />
                    <input type='submit' value="Добавить" />
                </form>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        contacts: state.contacts
    }
}

const mapDispatchToProps = {
    updateContactPhone,
    createContact,
    updateContactName,
    assignId
}

export default connect(mapStateToProps, null)(ContactList)