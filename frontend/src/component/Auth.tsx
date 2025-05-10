import { useState, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";



export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    type LocalSignupInput = {
  name: string;
  email: string;
  password: string;
};

    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<LocalSignupInput>({
        name:"",
        email: "",
        password: "",
    });

    async function sendRequest() {
        console.log("Sending request with data:", postInputs);
        try {
            const payload =
                type === "signup"
                    ? postInputs
                    : {
                          email: postInputs.email,
                          password: postInputs.password,
                      };

            const response = await axios.post(
                `${BACKEND_URL}/api/v1/user/${type}`,
                payload
            );

            console.log("API Response:", response.data);

            const jwt = response.data.jwt;
            if (jwt) {
                localStorage.setItem("token", jwt);
                navigate("/blogs");
            } else {
                console.log("JWT is undefined, token not saved.");
            }
        } catch (error) {
            console.log("Error while Signing in/up:", error);
        }
    }

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="w-80">
                <div className="text-3xl font-bold mb-2">
                    {type === "signup" ? "Create an Account" : "Welcome Back"}
                </div>
                <div className="text-slate-400 mb-6 text-sm">
                    {type === "signup"
                        ? "Already have an account?"
                        : "Don't have an account?"}
                    <Link
                        className="pl-2 underline text-blue-600"
                        to={type === "signin" ? "/signup" : "/signin"}
                    >
                        {type === "signin" ? "Sign up" : "Sign in"}
                    </Link>
                </div>

                <div className="space-y-4">
                    {type === "signup" && (
                        <LabelledInput
                            label="Username"
                            placeholder="John Doe"
                            onChange={(e) =>
                                setPostInputs({
                                    ...postInputs,
                                    name: e.target.value,
                                })
                            }
                        />
                    )}
                    <LabelledInput
                        label="Email"
                        placeholder="user@gmail.com"
                        onChange={(e) =>
                            setPostInputs({
                                ...postInputs,
                                email: e.target.value,
                            })
                        }
                    />
                    <LabelledInput
                        label="Password"
                        placeholder="1@2345#"
                        type="password"
                        onChange={(e) =>
                            setPostInputs({
                                ...postInputs,
                                password: e.target.value,
                            })
                        }
                    />
                    <div className="pt-2">
                        <button
                            onClick={sendRequest}
                            type="button"
                            className="w-full bg-black hover:bg-gray-900 text-white font-semibold rounded-lg text-sm px-5 py-2.5 transition duration-200"
                        >
                            {type === "signup" ? "Sign up" : "Sign in"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({
    label,
    placeholder,
    onChange,
    type = "text",
}: LabelledInputType) {
    return (
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {label}
            </label>
            <input
                onChange={onChange}
                type={type}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={placeholder}
                required
            />
        </div>
    );
}

