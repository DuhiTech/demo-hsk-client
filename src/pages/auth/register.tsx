import { SignUp } from "@clerk/clerk-react";

const Register = () => {
  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <SignUp appearance={{ elements: { logoBox: 'h-10!' } }} />
    </div>
  );
};
export default Register;
