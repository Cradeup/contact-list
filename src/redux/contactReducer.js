import { CREATE_CONTACT, UPDATE_PHONE_AREA, UPDATE_NAME_AREA, DELETE_CONTACT, ASSIGN_ID } from "./types"
import { createReducer } from '@reduxjs/toolkit'

let initialState = {
    contacts: [
        { name: 'Denis', phone: 11111111111, id: '' },
        { name: 'Pavel', phone: 11111111112, id: '' },
        { name: 'Igor', phone: 11111111113, id: '' },
        { name: 'Igor', phone: 11111111114, id: '' },
    ],
    phone: '',
    name: ''
}


export default createReducer(initialState, {
    [UPDATE_PHONE_AREA]: (state, action) => {
        state.phone = action.payload
        return state
    },
    [UPDATE_NAME_AREA]: (state, action) => {
        state.name = action.payload
        return state
    },
    [CREATE_CONTACT]: (state) => {
        if (state.phone || state.name) {
            state.contacts.push({ phone: state.phone, name: state.name, id: '' })
        }
        state.phone = ''
        state.name = ''
        return state
    },
    [DELETE_CONTACT]: (state, action) => {
        let index = action.payload
        state.contacts.splice(index, 1)
        return state
    },
    [ASSIGN_ID]: (state) => {
        let i = 0
        state.contacts.forEach((contact) => {
            contact.id = i;
            i++
        })
    }
})


