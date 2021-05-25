import React, { useState } from 'react'
import './index.css'
import './reset.css'



export default function Modal() {

    const [modalOpen, setModalOpen] = useState(false)
    const handleModalToggle = () => {
        setModalOpen(!modalOpen)
    }

    return (
    <>
        <button class="modal__btn" id="modal__enter__btn" onClick={handleModalToggle}>
            <span class="click__span"></span>
            <span class="hereto__span"></span>
            <span class="enter__span"> Enter</span>
        </button>
        <div  class={`modal ${modalOpen ? "showModal" : ""}`} id="mainModal">
            <div class="modal__content">
                <form class="modal__form" action="">
                    <div class="modal__input__container">
                        <div class="modal__input__subbox">
                            <label class="modal__label" for="username">Username: </label>
                            <input class="modal__input" type="text" name="username" id="username" placeholder=" Username"></input>
                        </div>
                        <div class="modal__input__subbox">
                            <label class="modal__label" for="password">Password: </label>
                            <input class="modal__input" type="password" name="password" placeholder=" Password"></input>
                        </div>
                    </div>
                    <button class="modal__submit__btn" type="submit" onClick={handleModalToggle}>Enter</button>
                </form>
                <button class="modal__close__btn" id="modal__close__btn" onClick={handleModalToggle}>X</button>
            </div>
        </div>
    </>
    )
}
