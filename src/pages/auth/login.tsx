import { SignIn } from '@clerk/clerk-react';

const Login = () => {
  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <SignIn appearance={{ elements: { logoBox: 'h-10!' } }} />
    </div>
  );
};
export default Login;
