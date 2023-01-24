import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/actions";
import Navbar from "../Navbar/Navbar";
import styles from "../FormsStyles/forms.module.css";
import { getUserByid } from "../../redux/actions";
import GoogleLogin from "react-google-login";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const checked = useSelector((state) => state.checked);

  const [login, setLogin] = useState({
    id: "",
    password: "",
  });

  function handleChange(event) {
    setLogin({
      ...login,
      [event.target.name]: [event.target.value],
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const usuarios = await dispatch(getUser());
    const currentUser = usuarios.payload.filter(
      (user) => user.id === login.id[0]
    );
    if (currentUser.length) {
      if (currentUser[0].password === login.password[0]) {
        dispatch(getUserByid(login.id));
        history.push("/");
        setLogin({
          id: "",
          password: "",
        });
      } else {
        alert("El usuario o contraseña es incorrecto");
      }
    } else {
      alert("El usuario o contraseña es incorrecto");
    }
  };

    const responseGoogle = (respuesta) => {
        console.log(respuesta);
    }

return (
    <div>
      <Navbar />
      <div className={checked ? styles.container : styles.containerDark}>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Ingresa</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                className={styles.input}
                type="text"
                placeholder="Mail"
                value={login.id}
                name="id"
                onChange={handleChange}
              />
            </div>

            <div>
              <input
                className={styles.input}
                type="password"
                placeholder="Contraseña"
                value={login.password}
                name="password"
                onChange={handleChange}
              />
            </div>

                <div className={styles.linksContainer}>
                    <button 
                        type="submit" 
                        id="loginButton" 
                        className={styles.submitButton}
                        disabled={!login.id || !login.password}
                    >Ingresar</button>

              <Link to="/sign-up">Todavia no tenes una cuenta?</Link>
            </div>
          </form>
        </div>
    </div>

    </div>
  );
}
