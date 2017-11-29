import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import {mydata} from './Data';
import top from './img/5mejores.png'
import best from './img/best_squada.png';
import rock from './img/ROCKING.png';
import fondo from './img/fondoabout.jpg';
import { connect } from 'redux-zero/react';
import './css/body.css';

const Second_page = ({bio}) => {
    return (
        <div id="page" className="en">
            <div className="container about" style={{ opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
                <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
                <div className="text-zone">
                    <h1 aria-label=" About me" className="blast-root">
                        <span className="blast" aria-hidden="true" style={{ opacity: "1" }}>Acerca&nbsp;</span>
                        <span className="blast" aria-hidden="true" style={{ opacity: "1" }}>de&nbsp;</span>
                        <span className="blast" aria-hidden="true" style={{ opacity: "1" }}>mi</span>
                    </h1>
                    <p aria-label="Hola." className="blast-root">
                        <span className="blast" aria-hidden="true" style={{ opacity: "1" }}>{bio}</span>
                    </p>
                </div>
                <div className="sound-cloud">
                    <h2 className="section-title">{'< Disitinción de Laboratoria >'}</h2>
                    <span>
                        <img src={top} style={{ width: "80px", height: "75px" }} />&nbsp;
                        </span>
                    <span>
                        <img src={rock} />&nbsp;
                        </span>
                    <span>
                        <img src={best} />&nbsp;
                        </span>
                </div>
                <span className="tags bottom-tags"> &nbsp;&nbsp;&nbsp;&lt;/body&gt;<br></br> &lt;/html&gt;</span>
            </div>
            <div className="photoportada"></div>
        </div>
    )
}

const About = ({ mydata }) => {  
      const aboutComponent = mydata.map((item, index) => {
        return <Second_page
            key={index}
            bio={item.bio}
            index={index}
        />
      })
      return (
        <div>
            <Header/>
            <section >
                {aboutComponent}
            </section>
        </div>
      )
    }


    const mapToProps = ({ mydata }) => ({ mydata });
    export default connect(mapToProps)(About);