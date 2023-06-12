import InputField from "components/fields/InputField";
import { useState, useLayoutEffect } from "react";
import axios, { AxiosError } from "axios";
import { useSignIn } from "react-auth-kit";
import { useIsAuthenticated } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [error, setError] = useState("");
  const signIn = useSignIn();
  const isAuthenticated = useIsAuthenticated();
  const auth = isAuthenticated();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (auth) navigate("/admin/commercial_dashboard");
  }, []);

  const testHandle = (e) => {
    e.preventDefault();
    signIn({
      token: "dhjg543588hgy",
      expiresIn: 3600,
      tokenType: "LogisticIndia",
      authState: { name: "wissanu" },
    });
    navigate("/admin/commercial_dashboard");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e.target[0].value);
    // console.log(e.target[1].value);
    setError("");

    try {
      const response = await axios({
        method: "post",
        url: "https://logistic-iot.n-digitaltech.com/logis/users/login",
        data: {
          username: `${e.target[0].value}`,
          password: `${e.target[1].value}`,
        },
      });

      signIn({
        token: response.data.resultContent.accessToken,
        expiresIn: 3600,
        tokenType: "LogisticIndia",
        authState: { name: response.data.resultContent.userName },
      });

      navigate("/admin/commercial_dashboard");
    } catch (err) {
      if (err && err instanceof AxiosError)
        setError(err.response?.data.message);
      else if (err && err instanceof Error) setError(err.message);

      // console.log("Error : ", err);
    }
  };

  return (
    <form onSubmit={testHandle}>
      <div className="mb-16 mt-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10">
        {/* Sign in section */}
        <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
          {/* Email */}
          <InputField
            variant="auth"
            extra="mb-3"
            label="Email*"
            placeholder="mail@simmmple.com"
            id="email"
            type="text"
          />

          {/* Password */}
          <InputField
            variant="auth"
            extra="mb-3"
            label="Password*"
            placeholder="Min. 8 characters"
            id="password"
            type="password"
          />
          <button
            type="submit"
            className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-sm font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          >
            Sign In
          </button>
        </div>
      </div>
    </form>
  );
}
