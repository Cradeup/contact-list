import './contact.css'
import { Link } from "react-router-dom";

export function Contact({ contact }) {
    return (
        <div>
            <Link to={'/' + contact.id}>
                <div className="contact-par">
                    <img className="contact-img" src="https://fansitemi.ru/wp-content/uploads/2018/04/kak-postavit-fotografiyu-na-imya-abonenta-v-syaomi-redmi.png" />
                    <div className="contact-name">{contact.name}</div>
                </div>
            </Link>
        </div>
    )
}