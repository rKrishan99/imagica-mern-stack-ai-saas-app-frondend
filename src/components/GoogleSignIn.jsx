import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";

const GoogleSignIn = () => {
  const {
    backendUrl,
    setToken,
    setUser,
    user,
    setIsOpenLogin,
    setIsOpenSignup,
    setPreviousGeneratedImages,
  } = useContext(AppContext);

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log("Google Token:", tokenResponse);
      console.log("backendUrl:", backendUrl);
      try {
        const userResponse = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
          }
        );

        const userData = userResponse.data;
        const profileImage = userData.picture;

        // Attempt login first
        try {
          const loginResponse = await axios.post(
            `${backendUrl}/api/user/login`,
            {
              email: userData.email,
              password: "google",
            }
          );

          const loginData = loginResponse.data;

          if (loginData.success) {
            setToken(loginData.token);
            setUser(loginData.user);
            setPreviousGeneratedImages(loginData.user.generatedImages);
            localStorage.setItem("token", loginData.token);
            toast.success("Login Success");
            setIsOpenLogin(false);
            setIsOpenSignup(false);
            return;
          }
        } catch (error) {
          
          console.log("User not found, proceeding to register...");
        }

        // If login fails, register the user
        const registerResponse = await axios.post(
          `${backendUrl}/api/user/register`,
          {
            name: userData.name,
            email: userData.email,
            password: "google",
            profileImage: profileImage,
          }
        );

        const registerData = registerResponse.data;

        if (registerData.success) {
          setToken(registerData.token);
          setUser(registerData.user);
          localStorage.setItem("token", registerData.token);
          setIsOpenLogin(false);
          toast.success("Signup Success");
          setIsOpenSignup(false);
        } else {
          toast.error(registerData.message);
        }

        console.log("User registerData:", registerData);
        console.log("User Data form context:", user);
        console.log("User Profile form context:", user.profileImage);

      } catch (error) {
        console.error("Error during Google Sign-In:", error);
        toast.error("Google Sign-In Failed");
      }
    },
    onError: () => {
      toast.error("Google Sign-In Failed");
    },
  });

  return (
    <button
      onClick={googleLogin}
      className="bg-white text-black mt-4 w-full rounded-full px-4 py-2 flex items-center justify-center gap-4 cursor-pointer hover:scale-105 transition-all duration-300"
    >
      <img src={assets.gLogo} alt="Google" className="w-5 h-5" />
      Sign in with Google
    </button>
  );
};

export default GoogleSignIn;
