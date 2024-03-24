import React from "react"
import styles from "@/styles/Home.module.css"
import Link from "next/link"
import Image from "next/image"
import { Nunito_Sans } from "next/font/google"

const nunito_sans = Nunito_Sans({ subsets: ["latin"] })

export const Navbar = () => {
  return (
    <nav
      className={`
    ${styles.nav}
    `}
    >
      <Link href='#' className={styles.navLinks}>
        <Image src={"/home.svg"} alt='Home' width='24' height='24' />
        <span>Inicio</span>
      </Link>
      <Link href='#' className={styles.navLinks}>
        <Image src={"/search.svg"} alt='Home' width='24' height='24' />
        <span>Buscar</span>
      </Link>
    </nav>
  )
}
