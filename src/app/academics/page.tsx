import React from 'react';
import styles from "@/Styles/Academics.module.css";

const Academics = () => {
    return (
        <div className={styles.Academics}>
            <div className={styles.innerPage}>
                <div className={styles.head} style={{ marginTop: "10px" }}>
                    <h1 className={styles.back}>ACADEMICS</h1>
                    <h2 className={styles.front}>Academics</h2>
                </div>
                <div className={styles.shortHeads}>
                    <h1 className={styles.shortHeadsh1}>
                        Master of Science in Ecology<br />
                        with Specialisation in Ecological Informatics
                    </h1>
                </div>
                <div className={styles.content}>
                    <p className={styles.contentp}>
                        The future of humanity on the Earth depends on our collective success to anticipate and ameliorate ecological challenges. Whether at a localized or planetary level, solutions to these challenges lie at the tri-junction of ecology, technology, and society. Today’s ecological problems are increasingly complex and arriving at a solution involves analyzing vast amounts of data. Ecological informatics helps to address these challenges by mastering the methods and developing the tools needed to distill information from data. Ecological Informatics integrates ecology, computational science, informatics, and social sciences, in order to improve our understanding of ecological processes. This pioneering academic program will teach ecology and impart computational and informatics skills to students with a background in natural and physical sciences. Students will develop analytical, decision making, and data modeling skills that are critical for the job market and for pursuing research.
                    </p>
                </div>
                <div className={styles.eligibility}>
                    <h2 className={styles.eligibilityh2}>Eligibility</h2>
                    <p className={styles.eligibilityp}>B.Sc. Degree in Botany/Zoology/Life Science/Chemistry/Physics/Ecology/Environmental Science/Geography/Geology/Microbiology/Plant or Animal Science/Agriculture/Forestry/Horticulture/Biotechnology and allied areas</p>
                    <h2 className={styles.eligibilityh2}>OR</h2>
                    <p className={styles.eligibilityp}>B.Tech/BE in Civil, Mechanical, Chemical, Environmental, Agricultural and allied disciplines with 60% marks.</p>
                    <p className={styles.eligibilityp}>DUAT qualified in subject specific to Ecology or Valid GATE score in Ecology and Evolution/Environmental Science and Engg/ Agriculture Engineering/Civil Engineering/Mechanical Engineering</p>
                </div>
                <button className={styles.brochure}>Download Brochure</button>
            </div>
        </div>
    );
};

export default Academics;
