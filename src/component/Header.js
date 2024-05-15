import { onAuthStateChanged, signOut } from "firebase/auth";

import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { LOGO } from "../utils/constant";
import { addToggleSearchange } from "../utils/gptSlice";
import { SUPPORTED_LANG } from "../utils/languageConstant";
import { addChangeLang } from "../utils/multiLangSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userdata = useSelector((store) => store.user);
  const showSearchData = useSelector((store) => store.gpt.TogglesearchChange);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(deleteUser());
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    //maintain  a  track of  authentication  state of user
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browser");
      } else {
        dispatch(deleteUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  const handleGptSearchClick = () => {
    dispatch(addToggleSearchange());
  };
  const handleLangChange = (e) => {
    dispatch(addChangeLang(e.target.value));
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {userdata && (
        <div className="flex p-2 justify-between">
          {showSearchData && (
            <select
              className="p-2 m-2 bg-gray-900 text-white rounded-md"
              onChange={handleLangChange}
            >
              {SUPPORTED_LANG.map((x) => (
                <option key={x.identifiers} value={x.identifiers}>
                  {x.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showSearchData ? "HomePage" : "GPT Search"}
          </button>
          <img
            className="hidden md:block w-12 h-12"
            src={userdata?.photoURL}
            alt="userlogo"
          />
          <button className="font-bold text-white" onClick={handleSignOut}>
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
