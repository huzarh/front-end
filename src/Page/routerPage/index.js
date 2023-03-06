// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

// import ForgotPassword from "../../components/forgotPassword";

// //dashboard
// import IndexPage from "../indexPage";
// //home
// import GetStarted from "../getStarted";
// import Login from "../login";

// // import PrivateRoute from "../../utils/PrivateRoute";
// // import PublicRoute from "../../utils/PublicRoute";

// import Research from "../../components/A1/snv";
// import Profile from "../../components/profile";
// import Peaple from "../../components/people";

// function RouterPage() {
//   // const [authLoading, setAuthLoading] = useState(true);

//   // useEffect(() => {
//   //   const token = getToken();
//   //   if (!token) {
//   //     return;
//   //   }

//   //   axios
//   //     .get(`http://localhost:4000/verifyToken?token=${token}`)
//   //     .then((response) => {
//   //       setUserSession(response.data.token, response.data.user);
//   //       setAuthLoading(false);
//   //     })
//   //     .catch((error) => {
//   //       removeUserSession();
//   //       setAuthLoading(false);
//   //     });
//   // }, []);

//   // if (authLoading && getToken()) {
//   //   return <div className="content">Checking Authentication...</div>;
//   // }

//   return (
//     <BrowserRouter>
//       <div className="header">
//         <NavLink exact activeClassName="active" to="/">
//           Home
//         </NavLink>
//         <NavLink activeClassName="active" to="/login">
//           Login
//         </NavLink>
//         <small>(Access without token only)</small>
//         <NavLink activeClassName="active" to="/index-page">
//           Dashboard
//         </NavLink>
//         <small>(Access with token only)</small>
//       </div>
//       <Routes>
//         <Route exact path="/" element={<GetStarted />} />
//         <PublicRoute path="/login" element={<Login />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <PrivateRoute path="/index-page" element={<IndexPage />} />
//         <Route path="/A1/snv" element={<Research />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/peaple" element={<Peaple />} />

//         {/* <Redirect to="/GetStarted" /> */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default RouterPage;

// import GetStarted from "../getStarted";
// import Login from "../login";

// function RouterPage() {
//   return (
//     <Routes>
//       <Route exact path="/" element={<GetStarted />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/forgot-password" element={<ForgotPassword />} />
//       <Route path="/index-page" element={<IndexPage />} />
//       <Route path="/A1/snv" element={<Research />} />
//       <Route path="/profile" element={<Profile />} />
//       <Route path="/peaple" element={<Peaple />} />
//     </Routes>
//   );
// }

// export default RouterPage;
