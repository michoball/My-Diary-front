import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { oauthLogin } from "../../../features/user/user.thunk";

function OauthLogin() {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      window.close();
    }, 500);
  }, []);

  return <div>Login Success! </div>;
}

export default OauthLogin;
