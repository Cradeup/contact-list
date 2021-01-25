import { CREATE_CONTACT,  UPDATE_PHONE_AREA, UPDATE_NAME_AREA, DELETE_CONTACT, ASSIGN_ID } from "./types";

export function createContact() {
    return{
        type: CREATE_CONTACT,
    }
}

export function updateContactPhone(text) {
    return{
        type: UPDATE_PHONE_AREA,
        payload: text
    }
}

export function updateContactName(text) {
    return{
        type: UPDATE_NAME_AREA,
        payload: text
    }
}

export function deleteContact(phone) {
    return{
        type: DELETE_CONTACT,
        payload: phone
    }
}

export function assignId() {
    return{
        type: ASSIGN_ID,
    }
}