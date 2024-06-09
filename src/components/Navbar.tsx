import React from 'react';
import styles from "@/Styles/Navbar.module.css";
import Logo from "../Assets/logo.png";
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.innerBar}>
                <div className={styles.logo}>
                    <Image src={Logo} alt="Logo" className={styles.logoImg} />
                </div>
                <div className={styles.navLinks}>
                    <Link href="/" passHref legacyBehavior>
                        <a className={styles.link}>HOME</a>
                    </Link>
                    <Link href="/about" passHref legacyBehavior>
                        <a className={styles.link}>ABOUT</a>
                    </Link>
                    <Link href="/contact" passHref legacyBehavior>
                        <a className={styles.link}>CONTACT</a>
                    </Link>
                    <Link href="/academics" passHref legacyBehavior>
                        <a className={styles.link}>ACADEMICS</a>
                    </Link>
                    <Link href="/people" passHref legacyBehavior>
                        <a className={styles.link}>PEOPLE</a>
                    </Link>
                    <Link href="/students" passHref legacyBehavior>
                        <a className={styles.link}>STUDENTS</a>
                    </Link>
                    <Link href="/research" passHref legacyBehavior>
                        <a className={styles.link}>RESEARCH</a>
                    </Link>
                    <Link href="/gallery" passHref legacyBehavior>
                        <a className={styles.link}>GALLERY</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
