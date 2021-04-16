import React from 'react';

import styles from '../styles/components/Sidebar.module.css';

export default function Sidebar() {
    // function aa() {
    //     // if (page === 'home') {
    //     //     return
    //     // }

    //     // router.push('/home')
    // }

    return (
        <div className={styles.containerSidebar}>
            {/* <a href="#projectsContainer">Projetos</a> */}
            <div className={styles.logo}>
                <h2>JO</h2>
                <h2>ÃO</h2>
            </div>
        </div>
    )
}
