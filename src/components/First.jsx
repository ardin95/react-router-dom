import { useNavigate } from "react-router-dom";

const First = () => {
  const Navigate = useNavigate();
  return (
    <>
      <h3>HOME PAGE ROUTE</h3>
      <button onClick={() => Navigate("/about/" + "ardin")}>Chek About</button>
    </>
  );
};

export default First;
