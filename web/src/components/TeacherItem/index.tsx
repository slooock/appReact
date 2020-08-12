import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/29365878?s=460&u=e9c14b2c015ff0fd5b5671c94f9c3cb62cfe2870&v=4" alt="Kayque Avelar" />
                <div>
                    <strong>Kayque Avelar</strong>
                    <span>Programação</span>
                </div>
            </header>
            <p>
                Entusiasta por novas tecnologias.
                <br/><br/>
                Bacharel em Ciência da Computação pela Universidade Federal de Viçosa, entusiasta por desenvolvimento e novas tecnologias. Nothing in this world can take the place of persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. Persistence and determination alone are omnipotent. The slogan Press On! has solved and always will solve the problems of the human race. 
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon}  alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
                
        </article>
    );
}

export default TeacherItem;