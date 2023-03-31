import ReactDOM from "react-dom";
import App from "./App";

const searchParams = window.location.search;

// const getURLParams = () : any => {
//   let urlParams = {}
//   const paramStringFromURL = searchParams.split('?')[1];
//   const paramsArr = paramStringFromURL.split('&');

//   for (let i = 0; i < paramsArr.length; i++) {
//       let pair = paramsArr[i].split('=');
//       urlParams = {[pair[0]]: pair[1]}
//   }

//   return urlParams
// }

ReactDOM.render(
  <App /*params={ searchParams ? getURLParams(): undefined}*/ />,
  document.getElementById("root")
);
