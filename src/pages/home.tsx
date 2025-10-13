import { useAuth } from "@clerk/clerk-react";

const Home = () => {
  const { getToken } = useAuth()

  getToken({ template: 'hsk' }).then(console.log)

  return <div>Home</div>;
};

export default Home;
