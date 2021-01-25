import { Link, withRouter, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import './contact-page.css'
import { deleteContact } from '../redux/actions'

const ContactPage = (props) => {
    const history = useHistory();

    function deleteContactAndGoToHome(event) {
        let phone = contact.phone
        let action = deleteContact(phone);
        props.dispatch(action)
        history.push("/");
    }

    let contact = props.match.params
    let index = contact.phone
    return (
        <div className="contact-page">
            <div>Имя: {props.contacts[index].name}</div>
            <div>Номер: {props.contacts[index].phone}</div>
            <div></div>
            <Link to='/'>
                <div>К списку контактов</div>
            </Link>
                <button href='/' onClick={deleteContactAndGoToHome}>Удалить контакт</button>
        </div>
    )
}

const mapDispatchToProps = {
    deleteContact
}

const mapStateToProps = state => {
    return {
        contacts: state.contacts.contacts
    }
}

export default connect(mapStateToProps, null)(withRouter(ContactPage));