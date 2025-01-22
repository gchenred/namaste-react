import { useRouteError } from "react-router";
const Error = () => {
  const errorResponse = useRouteError();
  console.log(errorResponse);

  return (
    <div>
      <h1>Ooops....</h1>
      <h2>Something went wrong, Please check below Error !!!</h2>
      <h3>
        {errorResponse.status} : {errorResponse.data}
      </h3>
    </div>
  );
};
export default Error;
