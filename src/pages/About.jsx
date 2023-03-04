import { useParams } from "react-router-dom";
import Second from "../components/Second";

const About = () => {
  const { username } = useParams();

  console.log(username);
  console.log("name");
  return (
    <>
      <Second />
      {username}
    </>
  );
};

export default About;
