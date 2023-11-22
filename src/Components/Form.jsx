import React, { useState } from "react";
import './Form.css';

const UserLogin = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const nameChange = (e) => {
        setName(e.target.value);
    };

    const surnameChange = (e) => {
        setSurname(e.target.value);
    };

    const phoneChange = (e) => {
        setPhone(e.target.value);
    };

    const emailChange = (e) => {
        setEmail(e.target.value);
    };

    const commentChange = (e) => {
        setComment(e.target.value);
    };

    const formSubmit = (e) => {
        e.preventDefault();
        console.log('Name:', name);
        console.log('Surname:', surname);
        console.log('Phone:', phone);
        console.log('Email:', email);
        console.log('Comment:', comment);
        setIsFormSubmitted(true);
    };

    return (
        <div className='a'>
            <h2>Form</h2>
            <form onSubmit={formSubmit}>
                <label>
                    Name:<br/>
                    <input type="text" value={name} onChange={nameChange} required/>
                </label>
                <br/>
                <label>
                    Surname:<br/>
                    <input type="text" value={surname} onChange={surnameChange} required/>
                </label>
                <br/>
                <label>
                    Phone number:<br/>
                    <input type="number" value={phone} onChange={phoneChange}/>
                </label>
                <br/>
                <label>
                    Email:<br/>
                    <input type="email" value={email} onChange={emailChange} required/>
                </label>
                <br/>
                <label>
                    Comment:<br/>
                    <textarea value={comment} onChange={commentChange} minLength={15} required/>
                </label>
                <br/>
                <button type="submit">Send</button>
            </form>
            {isFormSubmitted && (
            <p>Form submitted!</p>
            )}
        </div>
    );
};

export default UserLogin;