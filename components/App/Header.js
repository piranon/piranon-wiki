import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.scss'

export default class Header extends Component {
  render() {
    return (
      <header className={styles['header']}>
        <nav>
          <Link
            to={{ pathname: '/' }}
            className={styles['brand']}>
            Piranon Wiki!
          </Link>
          <ul className={styles['menu']}>
            <li className={styles['menu__item']}>
              <Link
                to={{ pathname: '/pages' }}
                className={styles['menu__link']}>
                All pages
              </Link>
            </li>
            <li className={styles['menu__item']}>
              <a
                href='#'
                className={styles['menu__link']}>
                About us
              </a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}