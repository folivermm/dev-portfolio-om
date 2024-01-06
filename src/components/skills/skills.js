import React from 'react'
import './skills.css'
import reactImg from '../../assets/reactImg.png'
import nodejsImg from '../../assets/nodejsImg.png'
import postgresql from '../../assets/postgresql.png'


const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>My abilties</span>
            <span className='skillDesc'>Un dia cuando estaba caminando por la calle encontre un perro que me mordio en la pierna derecha.</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={reactImg} alt='reactImg' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>React Developer</h2>
                        <p>Queria Hablar con la gnete del barrio pero no podia encotralo</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={nodejsImg} alt='nodejsImg' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Backend NodeJs</h2>
                        <p>No quiero excribir mas por que no hay suficient tiempo para terminat esto</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={postgresql} alt='postgresql' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>SQL DDL DML Languages</h2>
                        <p>Entiendo aue puedo tocar las maracas mientras lo tiro en el aire continuando el ritmo de la cacnion</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills