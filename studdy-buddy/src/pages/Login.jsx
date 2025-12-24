import { Send } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";
import styled from "styled-components";
import Button from "../components/Button";
import Row from "../components/Row";
import View from "../components/View";

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isDisabled = !email || !password; // Fixed logic to || so it disables if either is empty

  function LoginHandler(e) {
    e.preventDefault();
  }

  return (
    <Row>
      <View>
        <form
          /* 
             Changed w-xl to max-w-lg and w-full.
             Added px-6 for mobile so it doesn't touch screen edges.
          */
          className="p-6 md:p-8 sm:shadow-lg rounded-3xl flex flex-col gap-6 w-full max-w-lg mx-auto"
          onSubmit={LoginHandler}
        >
          <Field className="text-center mb-2">
            <h1 className="text-3xl md:text-4xl text-indigo-900 font-bold hover:rotate-2 transition-transform duration-300">
              LOGIN
            </h1>
            <p className="text-gray-600 text-sm md:text-base">
              Input your credentials to access your account. Don't have an
              account?{" "}
              <NavLink
                to="/signup"
                className="text-indigo-800 font-bold hover:underline"
              >
                Sign up here
              </NavLink>
            </p>
          </Field>

          <Field>
            <label
              htmlFor="email"
              className="text-lg md:text-2xl font-light text-gray-600"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              /* Adjusted padding and placeholder size for mobile */
              className="px-4 py-4 md:py-6 border shadow-sm rounded-2xl border-indigo-300 block w-full outline-indigo-800 placeholder:text-lg md:placeholder:text-2xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Field>

          <Field>
            <label
              htmlFor="password"
              className="text-lg md:text-2xl font-light text-gray-600"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Your password"
              className="px-4 py-4 md:py-6 border shadow-sm rounded-2xl border-indigo-300 block w-full outline-indigo-800 placeholder:text-lg md:placeholder:text-2xl"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Field>

          <Button
            disabled={isDisabled}
            className="flex justify-center items-center gap-2"
          >
            <span>Login</span>
            <Send size={20} />
          </Button>

          {/* Conditional rendering for error (optional) */}
          <p className="text-center text-red-500 font-bold text-sm">
            Wrong credentials!!
          </p>
        </form>
      </View>
    </Row>
  );
}

export default Login;
