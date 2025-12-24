import { Send, Loader2 } from "lucide-react"; // Added Loader2 for better UX
import { useState } from "react";
import { NavLink, useNavigate } from "react-router"; // Added useNavigate
import styled from "styled-components";
import Button from "../components/Button";
import Row from "../components/Row";
import View from "../components/View";
import { useSignup } from "../hooks/useSignup";

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FieldGrid = styled.div``;

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [skills, setSkills] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const { signup, isLoading } = useSignup();

  async function SignUpHandler(e) {
    e.preventDefault();
    signup({ email, password, name, phone, about, skills });
  }

  return (
    <Row>
      <View>
        <form
          className="p-4 md:p-8 sm:shadow rounded-2xl flex flex-col w-full max-w-4xl gap-5 overflow-hidden"
          onSubmit={SignUpHandler}
        >
          <Field className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl text-indigo-900 font-bold hover:rotate-3 transition-transform text-shadow-lg ">
              SIGN UP
            </h1>
            <p className="text-sm md:text-base text-gray-600">
              Fill in the fields to create your account. Your data is safe with
              us. Already have an account?{" "}
              <NavLink
                to="/login"
                className="text-indigo-800 font-bold hover:underline"
              >
                login here
              </NavLink>
            </p>
          </Field>

          <FieldGrid className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Field>
              <label className="text-lg md:text-2xl font-light text-gray-600">
                Full name
              </label>
              <input
                type="text"
                required
                placeholder="enter your full name"
                className="px-4 py-3 md:py-6 border shadow rounded-2xl border-indigo-300 block w-full outline-indigo-800 placeholder:text-lg md:placeholder:text-2xl"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Field>

            <Field>
              <label className="text-lg md:text-2xl font-light text-gray-600">
                About you
              </label>
              <textarea
                placeholder="Tell us about yourself"
                className="px-4 py-3 md:py-6 border shadow rounded-2xl border-indigo-300 block w-full outline-indigo-800 placeholder:text-lg md:placeholder:text-2xl min-h-[100px]"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
            </Field>

            <Field>
              <label className="text-lg md:text-2xl font-light text-gray-600">
                Skills{" "}
                <span className="text-sm text-red-400">
                  (separate with comma)
                </span>
              </label>
              <input
                type="text"
                placeholder="'web developer', 'data analyst'"
                className="px-4 py-3 md:py-6 border shadow rounded-2xl border-indigo-300 block w-full outline-indigo-800 placeholder:text-sm md:placeholder:text-base"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
            </Field>

            <Field>
              <label className="text-lg md:text-2xl font-light text-gray-600">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="enter your email"
                className="px-4 py-3 md:py-6 border shadow rounded-2xl border-indigo-300 block w-full outline-indigo-800 placeholder:text-lg md:placeholder:text-2xl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Field>

            <Field>
              <label className="text-lg md:text-2xl font-light text-gray-600">
                Phone (WhatsApp)
              </label>
              <input
                type="tel"
                required
                placeholder="233123456789"
                className="px-4 py-3 md:py-6 border shadow rounded-2xl border-indigo-300 block w-full outline-indigo-800 placeholder:text-lg md:placeholder:text-2xl"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Field>

            <Field>
              <label className="text-lg md:text-2xl font-light text-gray-600">
                Password
              </label>
              <input
                type="password"
                required
                placeholder="choose a password"
                className="px-4 py-3 md:py-6 border shadow rounded-2xl border-indigo-300 block w-full outline-indigo-800 placeholder:text-lg md:placeholder:text-2xl"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Field>

            <div className="md:col-span-2 mt-4">
              <Button
                disabled={isLoading}
                className="w-full flex justify-center items-center gap-2 py-4"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    <span>Creating Account...</span>
                  </>
                ) : (
                  <>
                    <span>Register</span>
                    <Send size={18} />
                  </>
                )}
              </Button>
            </div>
          </FieldGrid>
        </form>
      </View>
    </Row>
  );
}

export default SignUp;
