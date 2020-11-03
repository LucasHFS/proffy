import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/45002716?s=460&u=0088162d67cc5aed40bbfe959d778cc50883491f&v=4" alt="Lucas Silva"/>
                <div>
                    <strong>Lucas Silva</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 86,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;