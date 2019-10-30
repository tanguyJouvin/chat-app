import React from 'react';
import Contact from './Contact';

const contacts = [
    {
        name:'Anita Signon',
        avatar:'https://randomuser.me/api/portraits/women/15.jpg',
        online: true
    },
    {
        name:'Luc George',
        avatar:'https://randomuser.me/api/portraits/men/22.jpg',
        online:false
    },
    {
        name:'Elna Rau',
        avatar:'https://randomuser.me/api/portraits/women/79.jpg',
        online:true
    },
    {
        name:'Steven Perry',
        avatar:'https://randomuser.me/api/portraits/men/26.jpg',
        online:false
    },
    {
        name:'Janice Horton',
        avatar:'https://randomuser.me/api/portraits/women/8.jpg',
        online:true
    }
];
const ContactList = () => (
    <div>
        {
            contacts.map(contact => (
            <Contact key={contact.name} name={contact.name} avatar={contact.avatar} online={contact.online} />
        ))}
    </div>
);

export default ContactList;