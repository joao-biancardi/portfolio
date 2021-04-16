import React from 'react';
import Head from 'next/head';

import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaArrowAltCircleDown } from 'react-icons/fa';

import caçaNiquel from '../assets/caçaNiquel.png';
import controleDeDespesas from '../assets/controleDeDespesas.png';
import pomodoro from '../assets/pomodoro.png';

// import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

import styles from '../styles/pages/Home.module.css';

const Home: React.FC = () => {
    return (
        <div className={styles.container}>
            {/* <Sidebar /> */}
            <Head>
                <title>João Biancardi</title>
            </Head>
            <div id="introduction" className={styles.introduction}>
                <div className={styles.photoUser}>
                    <img
                        src="https://github.com/joao-biancardi.png"
                        alt="João Biancardi"
                    />
                </div>
                <div className={styles.profile}>
                    <h1>
                        {/* Meu nome é João Biancardi, tenho 19 anos e estudo tecnologia
                    hà 2 anos sou formado como tecnico de informática para a
                    internet no ETECVAV de Jundiai. Estou focado no front-end */}
                    O Lorem Ipsum é um texto modelo da indústria tipográfica
                    e de impressão. O Lorem Ipsum tem vindo a ser o texto
                    padrão usado por estas indústrias desde o ano de 1500,
                    quando uma misturou os caracteres de um texto para criar
                    um espécime de livro.
                    </h1>
                    <div className={styles.pages}>
                        <div className={styles.option}>
                            <a href="https://github.com/joao-biancardi?tab=repositories">
                                <FaGithub
                                    size={40}
                                    title="GitHub"
                                    color="var(--light-grey)"
                                />
                            </a>
                        </div>
                        <div className={styles.option}>
                            <a href="https://www.instagram.com/biancardi_/">
                                <FaInstagram
                                    size={40}
                                    title="Instagram"
                                    color="var(--light-grey)"
                                />
                            </a>
                        </div>
                        <div className={styles.option}>
                            <a href="https://www.linkedin.com/in/jo%C3%A3o-biancardi-447599190/">
                                <FaLinkedin
                                    size={40}
                                    title="Linkedin"
                                    color="var(--light-grey)"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.sidebarDown}>
                    <a href="#containerProjects">
                        <FaArrowAltCircleDown
                            size={50}
                            title="Projetos"
                            color="var(--light-grey)"
                        />
                    </a>
                </div>
            </div>

            <div id="containerProjects" className={styles.containerProjects}>
                <p>Projetos</p>
                <div className={styles.projectsContainer}>
                    <div className={styles.introductionProjects}>
                        <div className={styles.aboutProjects}>
                            <img src={controleDeDespesas} alt="" />
                            <a href="https://nlw-4-teal.vercel.app/">
                                <button>Ver mais</button>
                            </a>
                            <p>
                                Projeto para ter controle dos gastos mensais
                                utilizando JavaScript.
                            </p>
                        </div>
                        <div className={styles.aboutProjects}>
                            <img src={caçaNiquel} alt="Controle de despesas" />
                            <a href="https://nlw-4-teal.vercel.app/">
                                <button>Ver mais</button>
                            </a>
                            <p>
                                Jogo caça-niquel elaborado no curso da ETECVAV
                                com Javascript.
                            </p>
                        </div>
                        <div className={styles.aboutProjects}>
                            <img src={pomodoro} alt="Caça Niquel" />
                            <a href="https://nlw-4-teal.vercel.app/">
                                <button>Ver mais</button>
                            </a>
                            <p>
                                Projeto realizado na semana 4 da NLW em React
                                com Next.Js.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
