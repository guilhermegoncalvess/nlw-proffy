import React from 'react';

import PageHeader from '../../components/PageHeader';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os nossos proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject" />
                    </div>
                    
                    <div className="input-block">
                        <label htmlFor="week-day">Dia da Semana</label>
                        <input type="text" id="subject" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="subject" />
                    </div>
                </form>
            </PageHeader>

            <main>
                <article className="teacher-item">
                    <header>
                        <img src="data:image/jpeg;base64,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" 
                            alt="Johan Sebastian Bach" 
                        />
                        <div>
                            <strong>Johan Sebastian Bach</strong>
                            <span>Piano</span>
                        </div>
                    </header>

                    <p>
                        Pianista
                        <br /><br/>
                        Continuo a tocar piano, porém em outra dimensão.
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="WhatsApp" />
                            Entrar em contato
                        </button>
                    </footer>
                </article>
            </main>
        </div>
    );
}

export default TeacherList;