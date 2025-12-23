import { Panda, Send } from "lucide-react";
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
  const isDisabled = !email && !password;

  function LoginHandler(e) {
    e.preventDefault();
  }
  return (
    <Row>
      <View>
        <form
          className="p-4  sm:shadow rounded-2xl flex  flex-col gap-5 w-xl max-[500px]:w-screen max-[500px]:p-6 max-[500px]:shadow-0"
          onSubmit={LoginHandler}
        >
          <Field className="text-center px-8  block m-auto">
            <h1 className="text-3xl text-indigo-900 font-bold hover:text-shadow-lg hover:rotate-2 text-shadow-lg">
              LOGIN
            </h1>
            <p>
              input your credentials and access your account. Don't have an
              account?{" "}
              <NavLink to="/signup" className="text-indigo-800 font-bold">
                sign up here
              </NavLink>
            </p>
          </Field>
          <Field>
            <label htmlFor="" className="text-2xl font-light text-gray-600">
              Email
            </label>
            <input
              type="text"
              placeholder="enter your email"
              className="px-4 py-6 border shadow rounded-2xl border-indigo-300 block w-full outline-indigo-800 placeholder:text-2xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Field>
          <Field>
            <label htmlFor="" className="text-2xl font-light text-gray-600">
              Password
            </label>
            <input
              type="password"
              placeholder="fill in with your password"
              className="px-4 py-6 border shadow rounded-2xl border-indigo-300 block w-full outline-indigo-800 placeholder:text-2xl"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Field>

          <Button>
            <span>Login</span>
            <Send />
          </Button>
          <p className="text-center text-red-500 font-extrabold">
            Wrong credentials!!
          </p>
        </form>
      </View>
    </Row>
  );
}

export default Login;
