import React from 'react';

import { FaArrowAltCircleUp } from 'react-icons/fa';

import styles from '../styles/components/Footer.module.css';

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <p>
                &copy; Joao Biancardi
                <a href="#introduction" className={styles.linkHome}> 
                    <FaArrowAltCircleUp size={22} title="Voltar início" />
                </a>
            </p>
            
        </footer>
    )
}