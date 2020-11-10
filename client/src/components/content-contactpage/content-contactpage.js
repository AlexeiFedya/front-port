import React, { useState} from 'react';
import {useHttp} from '../../hooks/http.hook'

import './wrap-contactpage.scss';
import './form-contact.scss';
import './wrap-form.scss';
import '../content-skillspage/animation.scss'

import {ValidateEmail, ValidateName, ValidateMessage} from './validate-form/validate-form';
import {PopUp} from '../pop-up/pop-up'

export const ContentContact = () => {

    const {loading, request, error, clearError, clearMessage, resTrue} = useHttp()

    const [input, setInput] = useState({
        email: "", name: "", mess: ""
    });

    console.log("true response", resTrue)
    console.log("true error", error)

    if(error) {
        console.log("errrrrorrr", error)
    }


    const popUpHandleClick = () => {
        if (error) {
            clearError()
        }else {
            clearMessage()
        }
    }

    const onChangeInput = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value.toLowerCase()
        });
    }
    

    const validEmail = ValidateEmail(input.email)
    const validName = ValidateName(input.name)
    const validMess = ValidateMessage(input.mess)
        

    const sendMessageHandler = async () => {
        try {
            const data = await request('/api/mess/send', 'POST', {...input})
            console.log('Data', data)
        } catch (e) {}
    }

    return (
        <>
        <PopUp 
                ifError={error || resTrue}
                popUpHandleClick={popUpHandleClick}/>
        <div className="wrap-contactpage">
            <div className="star star-1"></div>
            <div className="star star-2"></div>
            <div className="star star-3"></div>
            <div className="star star-4"></div>
            <div className="star star-5"></div>
            <div className="wrap-form-contact">
                <form 
                    className="form-contact"
                    // onSubmit={submit}
                    >
                    <div className="form-contact__group">
                        <input 
                            type="email" 
                            className={`form-contact__group__input${validEmail ? "" : " form-contact__group__input__error"}`} 
                            name="email"
                            value={input.email}
                            id="email" 
                            placeholder="Email"
                            onChange={onChangeInput}
                            />
                        <label
                            htmlFor="email"
                            className="form-contact__group__label">Email</label>
                    </div>
                    <div className="form-contact__group">
                        <input 
                            type="name" 
                            className={`form-contact__group__input${validName ? "" : " form-contact__group__input__error"}`}
                            id="name" 
                            placeholder="Name" 
                            name="name"
                            value={input.name}
                            onChange={onChangeInput}
                            />
                        <label
                            htmlFor="name"
                            className="form-contact__group__label">Name</label>
                    </div>
                    <div className="form-contact__group">
                        <textarea 
                            type="text" 
                            className={`form-contact__group__textarea${validMess ? "" : " form-contact__group__input__error"}`}
                            id="mess" 
                            placeholder="Message"
                            name="mess"
                            value={input.mess}
                            onChange={onChangeInput}
                            />
                    </div>
                    <button 
                            type="submit" 
                            className="form-contact__button"
                            disabled={input.name === "" || input.email === "" || input.mess === "" || !validEmail || !validName || !validMess || loading}
                            onClick={sendMessageHandler}
                            >Send a message</button>
                </form>
            </div>
        </div>
        </>
    );
};