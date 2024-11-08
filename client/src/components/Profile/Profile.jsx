import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import { getUserByid, updateUser, getPlaces } from "../../redux/actions";

import style from "./profile.module.css";
import { useHistory } from "react-router-dom";
import ProfileInfo from "../UserInfo/UserInfo";
import MyBookInfo from "../MyBookInfo/myBookInfo";
import {IoAddCircleSharp} from "react-icons/io5";

// import LocalsInfo from "../MyLocalsInfo/LocalsInfo";

export default function Detail() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { profile } = useSelector((state) => state);

  const checked = useSelector((state) => state.darkmode);

  const [image, setImage] = useState("");

  const [open, setOpen] = useState({
    userInfo: true,
    myBook: false,
    myLocal: false,
    myLocalBook: false,
  });

  useEffect(() => {
    dispatch(getUserByid(profile.id));
    dispatch(getPlaces());
  }, [dispatch, profile.id]);

  useEffect(() => {
    if (!profile.id) {
      history.push("/login");
    }
  });

  const handleOpen = (e) => {
    setOpen({
      userInfo: false,
      myBook: false,
      myLocal: false,
      myLocalBook: false,
      [e.target.name]: !open[e.target.name],
    });
  };

  // const handleCreate = (e) => {
  //     e.preventDefault();
  //     history.push("/newplace")
  // }

  const handleMyLocals = (e) => {
    history.push("/bar-owner");
  };

  if (!profile) {
    return (
      <div>
        <h3>loading...</h3>
      </div>
    );
  }

  //++++++++++++++++++++++++++++++++++Cloudinary+++++++++++++++++++++++++++++++++++++++++++
  const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/thomrojas/upload";
  const CLOUDINARY_UPLOAD_PRESET = "reactapp";

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    axios
      .post(CLOUDINARY_URL, formData)
      .then((res) => {
        let newImage = res.data.secure_url;
        dispatch(updateUser({ ...profile, image: newImage }));
        dispatch(getUserByid(profile.id));
        window.location.reload();
        //setImage(res.data.secure_url);
      })
      .catch((err) => console.error(err));
  };

  const handleFileInput = () => {
    fileInput.current.click();
  };

  const fileInput = React.createRef();

  //++++++++++++++++++++++++++++++++++Cloudinary+++++++++++++++++++++++++++++++++++++++++++

  return (
    <div className={style.mainContainer}>
      <div
        className={
          checked ? style.profileContainer : style.profileContainerDark
        }
      >
        <Navbar />
        <div>
          <div className={style.divContainer}>
            <div>
              <img
                src={profile.image}
                href={profile.image}
                referrerPolicy="no-referrer"
                alt="perfil photo"
                className={style.profilePict}
              />

              <label htmlFor="fileInput" className={style.label}>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-upload"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="black"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                  <path d="M7 9l5 -5l5 5"></path>
                  <path d="M12 4l0 12"></path>
                </svg> */}
                <IoAddCircleSharp className={style.icon}/>
              </label>
              <input
                type="file"
                id="fileInput"
                ref={fileInput}
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />
            </div>

            <h1 className={checked ? style.name : style.nameDark}>
              {profile.name}
            </h1>
          </div>
          {/* <div>
                    <input type="file" onChange={handleImageUpload} />
                        {uploading && <p>Uploading...</p>}
                        {image && (
                            <Image cloudName="thomrojas" publicId={image}>
                            <Transformation width="200" height="200" crop="fill" />
                            </Image>
                        )}
                    </div> */}

          <div className={style.infoBarsAndInfoUser}>
            <div>
              <button
                name="userInfo"
                onClick={handleOpen}
                className={checked ? style.buttons : style.buttonsDark}
              >
                Información de usuario
              </button>
              <hr />
              {open.userInfo ? (
                <div className={style.infoContainer}>
                  <ProfileInfo profile={profile} />
                </div>
              ) : null}
            </div>
            <div className={style.bookInfoContainer}>
              <button
                name="myBook"
                onClick={handleOpen}
                className={checked ? style.buttons : style.buttonsDark}
              >
                Mis reservas
              </button>
              <hr />
              {open.myBook ? (
                profile.books?.length ? (
                  <div className={style.bookInfo}>
                    <MyBookInfo books={profile.books} />
                  </div>
                ) : (
                  <div>
                    <h3>Aún no has hecho reservas</h3>
                    <hr />
                  </div>
                )
              ) : null}
            </div>
            <div>
              {/* <button name="myLocal" onClick={handleOpen} className={checked ? style.buttons : style.buttonsDark}>Mis locales</button>
                            <hr />
                            {open.myLocal
                                ?
                                profile.locals?.length
                                    ?
                                    <div className={style.localInfo}>
                                        <LocalsInfo profileId={profile.id} locals={profile.locals} />
                                    </div>
                                    :
                                    <div>
                                        <h3>Actualmente no tienes ningún local</h3>
                                        <button onClick={handleCreate} className={style.crearButton}>Crear local</button>
                                        <hr />
                                    </div>
                                :
                                null} */}
              <button
                name="myLocal"
                onClick={handleMyLocals}
                className={checked ? style.buttons : style.buttonsDark}
              >
                Mis locales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

