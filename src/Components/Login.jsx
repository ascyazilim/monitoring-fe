// import React, { useState } from "react";
// import { Paper } from "@mui/material";
// import { styled } from "@mui/system";
// import "./Login.css";

// const LoginContainer = styled(Paper)({
//   width: "500px",
//   height: "400px",
//   padding: "20px",
//   display: "flex",
//   flexDirection: "column",
//   gap: "20px",
//   margin: "50px auto",
// });

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("admin");

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     onLogin(username, password, role);
//   };

//   return (
//     <LoginContainer elevation={3}>
//       <div className="main-login">
//         <form onSubmit={handleSubmit} action="/login" method="POST">
//           <div className="baslik-login">
//             <h1>Giriş Yap</h1>
//           </div>
//           <div className="rol">
//             <select
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               name="role"
//             >
//               <option value="admin">Admin</option>
//               <option value="doktor">Doktor</option>
//               <option value="hemsire">Hemşire</option>
//             </select>
//           </div>
//           <div className="k-adi-login">
//             <label>Kullanıcı Adı:</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)} name="username"
//             />
//           </div>
//           <div className="sifre-login">
//             <label>Şifre:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)} name="password"
//             />
//           </div>
//           <div className="login-button">
//             <button type="submit">Giriş Yap</button>
//           </div>
//         </form>
//       </div>
//     </LoginContainer>
//   );
// };

// export default Login;

import React, { useState } from "react";
import "./Login.css"; // Gerekli CSS stilini import edin
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preverntDefault();
    try {
      const response = await axios.post("http://localhost:8080/login", {
        username,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Login hatası", error.response);
    }
  };

  return (
    <div className="main-login">
      <div className="box">
        <div className="box-form">
          <div className="box-login-tab"></div>
          <div className="box-login-title">
            <div className="i i-login"></div>
            <h2>LOGIN</h2>
          </div>
          <div className="box-login">
            <form
              className="fieldset-body"
              id="login_form"
              onSubmit={handleLogin}
            >
              <p className="field">
                <label htmlFor="user">USERNAME</label>
                <input
                  type="text"
                  id="user"
                  name="user"
                  title="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </p>
              <p className="field">
                <label htmlFor="pass">PASSWORD</label>
                <input
                  type="password"
                  id="pass"
                  name="pass"
                  title="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </p>
              <p className="roles">
                <select
                  name="roles"
                  id="roles"
                  style={{
                    width: "100px",
                    height: "30px",
                    textAlign: "center",
                    backgroundColor: "aliceblue",
                    borderRadius: "5px",
                  }}
                >
                  <option value="doktor">DOKTOR</option>
                  <option value="hemsire">HEMŞİRE</option>
                  <option value="admin">ADMIN</option>
                </select>
              </p>
              <input
                type="submit"
                id="do_login"
                value="GET STARTED"
                title="Get Started"
              />
            </form>
          </div>
        </div>
        {/* Diğer bölümler... */}
      </div>
    </div>
  );
};

export default Login;
