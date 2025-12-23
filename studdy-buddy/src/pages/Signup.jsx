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

const FieldGrid = styled.div``;

function SignUp() {
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [skills, setSkills] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState(null);

  function SignUpHandler(e) {
    e.preventDefault();
  }
  return (
    <Row>
      <View>
        <form
          className="p-4   sm:shadow rounded-2xl flex  flex-col w-5xl gap-5  max-[500px]:w-screen max-[500px]:p-6 max-[500px]:shadow-0  overflow-clip"
          onSubmit={SignUpHandler}
        >
          <Field className="text-center  block m-auto">
            <h1 className="text-3xl text-indigo-900 font-bold hover:text-shadow-lg hover:rotate-3 text-shadow-lg ">
              SIGN UP
            </h1>
            <p>
              Fill in the fields to create your account.Your data is safe with
              us. You already have an account?
              <NavLink to="/login" className="text-indigo-800 font-bold">
                login here
              </NavLink>
            </p>
          </Field>
          <FieldGrid className="grid grid-cols-2 gap-2 max-[500px]:grid-cols-1">
            <Field>
              <label htmlFor="" className="text-2xl font-light text-gray-600">
                Full name
              </label>
              <input
                type="text"
                placeholder="enter your full name"
                className="px-4 py-6 border shadow rounded-2xl border-indigo-300 block w-full outline-indigo-800 placeholder:text-2xl"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Field>
            <Field>
              <label htmlFor="" className="text-2xl font-light text-gray-600">
                About you
              </label>
              <textarea
                type="text"
                placeholder="fill in with your password"
                className="px-4 py-6 border shadow rounded-2xl border-indigo-300 block w-full outline-indigo-800 placeholder:text-2xl"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
            </Field>
            <Field>
              <label htmlFor="" className="text-2xl font-light text-gray-600">
                Skills{" "}
                <span className="text-red-400">(seperate with comma)</span>
              </label>
              <input
                type="text"
                placeholder="'web developer', 'data analyst'"
                className="px-4 py-6 border shadow rounded-2xl border-indigo-300 block w-full outline-indigo-800 placeholder:text-2xs"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
            </Field>
            <Field>
              <label htmlFor="" className="text-2xl font-light text-gray-600">
                Email
              </label>
              <input
                type="email"
                placeholder="enter your email"
                className="px-4 py-6 border shadow rounded-2xl border-indigo-300 block w-full outline-indigo-800 placeholder:text-2xl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Field>
            <Field>
              <label htmlFor="" className="text-2xl font-light text-gray-600">
                Phone(whatsapp number)
              </label>
              <input
                type="tel"
                placeholder="233123456789"
                className="px-4 py-6 border shadow rounded-2xl border-indigo-300 block w-full outline-indigo-800 placeholder:text-2xl"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
              <span>Register</span>
              <Send />
            </Button>
          </FieldGrid>
          <p className="text-center text-red-500 font-extrabold">
            Wrong credentials!!
          </p>
        </form>
      </View>
    </Row>
  );
}

export default SignUp;
