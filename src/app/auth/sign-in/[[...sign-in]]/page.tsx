import React from "react";
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
	return <SignIn signInUrl="/auth/callback"/>;
};

export default SignInPage;
