import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <Link to={"/signup"}>Sign up</Link>
        <Link to={"/signin"}>Sign in</Link>
      </div>
    </div>
  );
};

export default HomePage;
