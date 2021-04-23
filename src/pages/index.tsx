import React from 'react';
import Link from 'next/link';
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
                        Sou João Biancardi, tenho 19 anos. Sempre gostei de
                        tecnologia, me formei técnico de informática para a
                        internet no ETECVAV de Jundiai. Atualmente estou focado em
                        front-end, mas busco sempre aprender cada dia mais, e
                        aberto para aprender novas tecnologias.
                    </h1>
                    <div className={styles.pages}>
                        <div className={styles.option}>
                            <Link href="https://github.com/joao-biancardi?tab=repositories">
                                <a>
                                    <FaGithub
                                        size={40}
                                        title="GitHub"
                                        color="var(--light-grey)"
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className={styles.option}>
                            <Link href="https://www.instagram.com/biancardi_/">
                                <a>
                                    <FaInstagram
                                        size={40}
                                        title="Instagram"
                                        color="var(--light-grey)"
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className={styles.option}>
                            <Link href="https://www.linkedin.com/in/jo%C3%A3o-biancardi-447599190/">
                                <a>
                                    <FaLinkedin
                                        size={40}
                                        title="Linkedin"
                                        color="var(--light-grey)"
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.sidebarDown}>
                    <Link href="#containerProjects">
                        <a>
                            <FaArrowAltCircleDown
                                size={50}
                                title="Projetos"
                                color="var(--light-grey)"
                            />
                        </a>
                    </Link>
                </div>
            </div>

            <div id="containerProjects" className={styles.containerProjects}>
                <p>Projetos</p>
                <div className={styles.projectsContainer}>
                    <div className={styles.introductionProjects}>
                        <div className={styles.aboutProjects}>
                            <img src={controleDeDespesas} alt="" />
                            <Link href="https://controle-de-despesas-beta.vercel.app/">
                                <a>
                                    <button>Ver mais</button>
                                </a>
                            </Link>
                            <p>
                                Projeto para ter controle dos gastos mensais
                                utilizando JavaScript.
                            </p>
                        </div>
                        <div className={styles.aboutProjects}>
                            <img src={caçaNiquel} alt="Controle de despesas" />
                            <Link href="https://cacaniquel-joao-biancardi.vercel.app">
                                <a>
                                    <button>Ver mais</button>
                                </a>
                            </Link>
                            <p>
                                Jogo caça-niquel elaborado no curso da ETECVAV
                                com Javascript.
                            </p>
                        </div>
                        <div className={styles.aboutProjects}>
                            <img src={pomodoro} alt="Caça Niquel" />

                            <Link href="https://nlw-4-joao-biancardi.vercel.app/">
                                <a>
                                    <button>Ver mais</button>
                                </a>
                            </Link>
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
