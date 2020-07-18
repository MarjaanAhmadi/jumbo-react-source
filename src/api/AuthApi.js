import { Headers, BaseUrl, POSTMethod } from "./api-config";
//define an instance from Axios and set headers and baseurl => because we are using proxy we can't set base url

const signIn = async (Data) => {
  var options = {
    method: POSTMethod,
    headers: Headers,
    body: JSON.stringify(Data),
  };

  var response = await fetch(BaseUrl + "token-auth", options).then((response) =>
    response.json()
  );
  return response;
};

export default signIn;
