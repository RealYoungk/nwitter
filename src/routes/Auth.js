/* eslint-disable import/no-anonymous-default-export */
import AuthForm from "components/AuthForm";
import { authService, firebaseInstance } from "fBase";
import React from "react";

export default () => {
  const onSocialClick = async (event) => {
    // console.log(event.target.name);
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    await authService.signInWithPopup(provider);
    // console.log(data);
  };
  return (
    <div>
      <AuthForm />
      <div>
        <button onClick={onSocialClick} name="google">
          구글 로그인
        </button>
        <button onClick={onSocialClick} name="github">
          깃허브 로그인
        </button>
      </div>
    </div>
  );
};
