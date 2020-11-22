import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fBase";

function App() {
  // console.log(authService.currentUser);
  const [init, setInit] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    // async function initUser() {
    authService.onAuthStateChanged(async (user) => {
      // console.log(user);
      if (user) {
        // setIsLoggedIn(true);
        await setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        // setIsLoggedIn(false);
        setUserObj(null);
      }
      setInit(true);
    });
    // }
    // initUser();
  }, []);
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
  };
  return (
    <>
      {init ? (
        <AppRouter refreshUser={refreshUser} isLoggedIn={Boolean(userObj)} userObj={userObj} />
      ) : (
        "Initializing..."
      )}
      {/* <footer>&copy; Nwitter {new Date().getFullYear()}</footer> */}
    </>
  );
}

export default App;
