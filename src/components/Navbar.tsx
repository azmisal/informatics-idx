import React from 'react';
import styles from "./Navbar.module.css";
import Logo from "../Assets/logo.png";
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.innerBar}>
                <div className={styles.logo}>
                    <Image src={Logo} alt="" className={styles.logoImg} />
                </div>
                <div className={styles.navLinks}>
                    <a href="#" className={styles.link}>HOME</a>
                    <Link href="/about" passHref legacyBehavior>
                        <a className={styles.link}>ABOUT</a>
                    </Link>
                    <a href="#" className={styles.link}>ACADEMICS</a>
                    <a href="#" className={styles.link}>PEOPLE</a>
                    <a href="#" className={styles.link}>STUDENTS</a>
                    <a href="#" className={styles.link}>RESEARCH</a>
                    <a href="#" className={styles.link}>GALLERY</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
