import React from 'react'
import styles from "./About.module.css";
const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.innerPage}>
                <div className={styles.head}>
                    <h1 className={styles.back}>ABOUT</h1>
                    <h2 className={styles.front}>About</h2>
                </div>
                <div className={styles.content}>
                    <p>
                        Ecological Informatics(EI) is a transformative, trans-disciplinary domain that integrates ecology, informatics, computational and social sciences, in order to improve our understanding of ecological processes and expand socio-ecological theory to integrate the Earth’s natural systems, human values, human health and well being. The School of Informatics, Digital University Kerala of Kerala maintain professional associations with National and International laboratories. The rediscovery of Sir. C V Raman and the introduction of a new interdisciplinary domain – Floral Radiometry is one of the notable achievements of C V Raman Laboratory of Ecological Informatics.
                    </p>
                </div>
            </div>



        </div>

    )
}

export default About