import { useNavigate} from "react-router-dom";

const Second = () => {
 
  const Navigate = useNavigate();
  return (
    <>
      <h3>HOME ABOUT PAGE ROUTE</h3>
      <button onClick={() => Navigate("/")}>Check Home</button>
    </>
  );
};

export default Second;
