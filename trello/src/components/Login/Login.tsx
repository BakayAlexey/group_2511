import React, { Component } from "react";
import { setToLocalStorage, getFromLocalStorage } from "../../utils";
import styles from './Login.module.scss';

const { REACT_APP_API_KEY, REACT_APP_APP_NAME, REACT_APP_REDIRECT_URL, REACT_APP_SCOPE } = process.env;

export class Login extends Component {
  render() {
    console.log(this.props);
    const requestUrl = `https://trello.com/1/authorize?return_url=${REACT_APP_REDIRECT_URL}&expiration=1day&name=${REACT_APP_APP_NAME}&scope=${REACT_APP_SCOPE}&response_type=token&key=${REACT_APP_API_KEY}`;

    return <div className={styles.conteiner}>
      <div className={styles.content}>
        <a className={styles.link} href={requestUrl}>Login with trello account</a>
      </div>
    </div>;
  }
}