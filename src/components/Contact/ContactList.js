import React from 'react';
import Contact from './Contact';

const contacts = [
    {
        name:'Anita Sutton',
        image:'https://randomuser.me/api/portraits/women/15.jpg',
        online: true
    },
    {
        name:'Luc George',
        image:'https://randomuser.me/api/portraits/men/22.jpg',
        online:false
    },
    {
        name:'Charlotte Ryan',
        image:'https://randomuser.me/api/portraits/women/69.jpg',
        online:true
    },
    {
        name:'Steven Perry',
        image:'https://randomuser.me/api/portraits/men/26.jpg',
        online:false
    },
    {
        name:'Janice Horton',
        image:'https://randomuser.me/api/portraits/women/8.jpg',
        online:true
    }
];
const ContactList = () => (
    <div>
        {
            contacts.map(contact => (
            <Contact key={contact.name} name={contact.name} image={contact.image} online={contact.online} />
        ))}
    </div>
);

export default ContactList;