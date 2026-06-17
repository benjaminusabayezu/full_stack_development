import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";


const SocialButton = ({ children, label }) => (
  <button
    aria-label={label}
    className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-gray-400 hover:shadow-sm transition-all duration-200 bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-500"
  >
    {children}
  </button>
);

const InputField = ({ type = "text", placeholder, value, onChange, id }) => (
  <input
    id={id}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="w-full bg-gray-100 text-gray-800 text-sm placeholder-gray-400 px-4 py-3 rounded-lg border border-transparent focus:outline-none focus:border-lime-400 focus:bg-white transition-all duration-200"
    autoComplete="off"
  />
);

// ── Main Component ─────────────────────────────────────────────────────────
export default function AuthForm() {
  const [mode, setMode] = useState("signin"); // "signin" | "signup"
  const [animating, setAnimating] = useState(false);
  const [panelPhase, setPanelPhase] = useState("idle"); // "idle" | "expand" | "contract"

  // Form state
  const [signIn, setSignIn] = useState({ email: "", password: "" });
  const [signUp, setSignUp] = useState({ name: "", email: "", password: "" });

  const switchTo = (target) => {
    if (animating || target === mode) return;
    setAnimating(true);
    setPanelPhase("expand");

    // After panel fully covers → swap content → contract
    setTimeout(() => {
      setMode(target);
      setPanelPhase("contract");
    }, 420);

    setTimeout(() => {
      setPanelPhase("idle");
      setAnimating(false);
    }, 820);
  };

  const isSignIn = mode === "signin";

  return (
    <div className="min-h-screen bg-lime-700/80 flex items-center justify-center p-4">
      {/* ── Card ── */}
      <div
        className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl flex"
        style={{ minHeight: "430px" }}
      >
        {/* ══ WHITE FORM SIDE ══════════════════════════════════════════════ */}
        <div className="relative flex-1 bg-white flex items-center justify-center px-10 py-12 z-10">
          {/* SIGN IN form */}
          <div
            className={`content-fade w-full max-w-xs ${
              isSignIn && panelPhase === "idle"
                ? "content-visible"
                : "content-hidden"
            }`}
            aria-hidden={!isSignIn}
          >
            <h2 className="text-2xl font-black text-lime-700 text-center mb-5">
              Sign In
            </h2>
            <div className="flex justify-center gap-3 mb-4 text-lime-600">
              <SocialButton label="Sign in with Google">
                <FontAwesomeIcon icon={faGoogle}  />
              </SocialButton>
              <SocialButton label="Sign in with Facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </SocialButton>
              <SocialButton label="Sign in with GitHub">
                <FontAwesomeIcon icon={faGithub} />
              </SocialButton>
              <SocialButton label="Sign in with LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </SocialButton>
            </div>
            <p className="text-center text-xs text-gray-400 mb-5">
              Sign in With Email &amp; Password
            </p>
            <div className="space-y-3">
              <InputField
                id="signin-email"
                type="email"
                placeholder="Enter E-mail"
                value={signIn.email}
                onChange={(e) =>
                  setSignIn({ ...signIn, email: e.target.value })
                }
              />
              <InputField
                id="signin-password"
                type="password"
                placeholder="Enter Password"
                value={signIn.password}
                onChange={(e) =>
                  setSignIn({ ...signIn, password: e.target.value })
                }
              />
            </div>
            <p className="text-center text-xs text-gray-400 mt-3 mb-4 cursor-pointer hover:text-lime-500 transition-colors">
              Forget Password?
            </p>
            <button className="w-full bg-lime-600 hover:bg-lime-700 active:bg-lime-800 text-white text-sm font-bold tracking-widest uppercase py-3 rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2">
              Sign In
            </button>
          </div>

          {/* SIGN UP form */}
          <div
            className={`content-fade w-full max-w-xs ${
              !isSignIn && panelPhase === "idle"
                ? "content-visible"
                : "content-hidden"
            }`}
            aria-hidden={isSignIn}
          >
            <h2 className="text-3xl font-black text-lime-700 text-center mb-5">
              Create Account
            </h2>
            <div className="flex justify-center gap-3 mb-4 text-lime-600">
              <SocialButton label="Sign up with Google">
                <FontAwesomeIcon icon={faGoogle} />
              </SocialButton>
              <SocialButton label="Sign up with Facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </SocialButton>
              <SocialButton label="Sign up with GitHub">
                <FontAwesomeIcon icon={faGithub} />
              </SocialButton>
              <SocialButton label="Sign up with LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </SocialButton>
            </div>
            <p className="text-center text-xs text-gray-400 mb-5">
              Register with E-mail
            </p>
            <div className="space-y-3">
              <InputField
                id="signup-name"
                placeholder="Name"
                value={signUp.name}
                onChange={(e) => setSignUp({ ...signUp, name: e.target.value })}
              />
              <InputField
                id="signup-email"
                type="email"
                placeholder="Enter E-mail"
                value={signUp.email}
                onChange={(e) =>
                  setSignUp({ ...signUp, email: e.target.value })
                }
              />
              <InputField
                id="signup-password"
                type="password"
                placeholder="Enter Password"
                value={signUp.password}
                onChange={(e) =>
                  setSignUp({ ...signUp, password: e.target.value })
                }
              />
            </div>
            <button className="mt-5 w-full bg-lime-600 hover:bg-lime-700 active:bg-lime-800 text-white text-sm font-bold tracking-widest uppercase py-3 rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2">
              Sign Up
            </button>
          </div>
        </div>

        {/* ══ RED OVERLAY PANEL ════════════════════════════════════════════ */}
        {/*
          Sign-in mode: panel lives on the right (translateX 0), width 45%.
          When "expand" → it slides left covering the whole card.
          Sign-up mode: panel lives on the left, width 45%.
          When "expand" → it slides right covering the whole card.
        */}
        <div
          className={`
            panel-slide
            absolute top-0 bottom-0 w-[45%] bg-lime-600 z-20
            flex flex-col items-center justify-center px-10 text-white text-center
            ${isSignIn ? "right-0" : "left-0"}
            ${
              panelPhase === "idle"
                ? isSignIn
                  ? "panel-signin"
                  : "panel-signup"
                : panelPhase === "expand"
                  ? isSignIn
                    ? "panel-signin-expand"
                    : "panel-signup-expand"
                  : isSignIn
                    ? "panel-signin"
                    : "panel-signup"
            }
          `}
          aria-hidden="true"
        >
          {/* Content inside red panel — shown only when idle */}
          <div
            className={`content-fade ${panelPhase === "idle" ? "content-visible" : "content-hidden"}`}
          >
            {isSignIn ? (
              <>
                <h2 className="text-2xl font-extrabold mb-3 leading-tight">
                  Hello World
                </h2>
                <p className="text-sm text-red-100 mb-8">
                  Sign up now and enjoy our site
                </p>
                <button
                  onClick={() => switchTo("signup")}
                  className="border-2 border-white text-white text-xs font-bold tracking-widest uppercase px-8 py-2.5 rounded-full hover:bg-white hover:text-lime-600 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-extrabold mb-3 leading-tight">
                  Welcome To
                  <br />
                  Hyper-S
                </h2>
                <p className="text-sm text-red-100 mb-8">
                  Sign in With Email &amp; Password
                </p>
                <button
                  onClick={() => switchTo("signin")}
                  className="border-2 border-white text-white text-xs font-bold tracking-widest uppercase px-8 py-2.5 rounded-full hover:bg-white hover:text-lime-600 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Sign In
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
