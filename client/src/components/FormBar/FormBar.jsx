import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import { createPlace, getPlaceDetail } from '../../redux/actions';
import styles from '../FormsStyles/forms.module.css';
import { validation } from './ValidationFormBar';

export default function CreateLocal() {
    const dispatch = useDispatch();
    const history = useHistory();
    const profile = useSelector(state => state.profile)
    const horaApertura = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00']
    const horaCierre = ['00:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00']

    const [local, setLocal] = useState({
        userId: profile.id,
        name: "",
        image: "",
        location: "",
        menu: "",
        phone: "",
        capacity: "",
        schedule: [],
        ageRange: [],
        category: '',
        event: false,
        petFriendly: false,
        bookPrice: "",
        available: true,
    })

    const [errors, setErrors] = useState({
        image: "",
    })

    const handleChange = (event) => {
        setErrors(
            validation({
                ...local,
                [event.target.name]: event.target.value
            })
        );
        setLocal({
            ...local,
            [event.target.name]: event.target.value
        })
    }

    const handleSchedule = (event) => {
        if (!local.schedule.includes(event.target.value)) {
            setLocal({
                ...local,
                schedule: [...local.schedule, event.target.value]
            })
        }
    }

    const handleAge = (event) => {
        setLocal({
            ...local,
            ageRange: [event.target.value]
        })
    }

    const handleCategories = (event) => {
        setLocal({
            ...local,
            category: event.target.value
        })
    }

    const handlePetFriendly = (event) => {
        if (!local.petFriendly) {
            setLocal({
                ...local,
                petFriendly: true
            })
        }
    }

    const handleEvent = (event) => {
        if (!local.event) {
            setLocal({
                ...local,
                event: true
            })
        }
    }

    const handleWeekdays = (event) => {
        setLocal({
            ...local,
            schedule: [...local.schedule, event.target.value]
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newLocal = await dispatch((createPlace(local)));
        dispatch(getPlaceDetail(newLocal.id))
        history.push(`/detail/${newLocal.id}`)
    }


    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.formContainer}>
                    <h1 className={styles.title}>Registra tu local</h1>
                    <form onSubmit={handleSubmit}>
                        <div >
                            <input
                                type='text'
                                placeholder='Nombre del local'
                                value={local.name}
                                name="name"
                                onChange={handleChange}
                                className={styles.input}
                            />
                        </div>

                        <div >
                            <input
                                type='url'
                                placeholder='Imagen/logo'
                                value={local.image}
                                name="image"
                                onChange={handleChange}
                                className={styles.input}
                            />
                            {errors.image && <p>{errors.image}</p>}
                        </div>

                        <div >
                            <input
                                type='text'
                                placeholder='Direccion'
                                value={local.location}
                                name="location"
                                onChange={handleChange}
                                className={styles.input}
                            />
                        </div>

                        <div >
                            <input
                                type='text'
                                placeholder='Menu'
                                value={local.menu}
                                name="menu"
                                onChange={handleChange}
                                className={styles.input}
                            />
                        </div>

                        <div >
                            <input
                                type='text'
                                placeholder='Numero de telefono'
                                value={local.phone}
                                name="phone"
                                onChange={handleChange}
                                className={styles.input}
                            />
                        </div>

                        <div >
                            <input
                                type='number'
                                placeholder='Capacidad'
                                value={local.capacity}
                                name="capacity"
                                onChange={handleChange}
                                className={styles.input}
                            />
                        </div>

                        <h4 className={styles.subtitles}>Horarios</h4>
                        <div className={styles.scheduleContainer} >
                            <div className={styles.weekdaysContainer}>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="lunes"
                                        value="lunes"
                                        onChange={handleWeekdays}
                                    ></input>
                                    Lunes
                                </label>

                                <label>
                                    <input
                                        type="checkbox"
                                        name="martes"
                                        value="martes"
                                        onChange={handleWeekdays}
                                    ></input>
                                    Martes
                                </label>

                                <label>
                                    <input
                                        type="checkbox"
                                        name="miercoles"
                                        value="miercoles"
                                        onChange={handleWeekdays}
                                    ></input>
                                    Miercoles</label>

                                <label>
                                    <input
                                        type="checkbox"
                                        name="jueves"
                                        value="jueves"
                                        onChange={handleWeekdays}
                                    ></input>
                                    Jueves</label>

                                <label>
                                    <input
                                        type="checkbox"
                                        name="viernes"
                                        value="viernes"
                                        onChange={handleWeekdays}
                                    ></input>
                                    Viernes</label>

                                <label>
                                    <input
                                        type="checkbox"
                                        name="sabado"
                                        value="sabado"
                                        onChange={handleWeekdays}
                                    ></input>
                                    Sabado</label>

                                <label>
                                    <input
                                        type="checkbox"
                                        name="domingo"
                                        value="domingo"
                                        onChange={handleWeekdays}
                                    ></input>
                                    Domingo</label>
                            </div>

                            <div className={styles.hoursContainer}>
                                <label>Desde:</label>
                                <select onChange={handleSchedule} className={styles.select}>
                                    <option>Seleccione horario de apertura</option>
                                    {horaApertura.map((hora) => {
                                        return (
                                            <option key={hora}>{hora}</option>
                                        )
                                    })}
                                </select>

                                <label>Hasta:</label>
                                <select onChange={handleSchedule} className={styles.select}>
                                    <option>Seleccione horario de cierre</option>
                                    {horaCierre.map((hora) => {
                                        return (
                                            <option key={hora}>{hora}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div >
                            </div>
                        </div>

                        <h4>¿Tu local tiene restricciones por edad?</h4>
                        <select name="ageRange" onChange={handleAge} className={styles.input}>
                            <option value="" hidden>Selecciona las edades</option>
                            <option value="+18">+18</option>
                            <option value="+21">+21</option>
                            <option value="Sin restricciones">Sin restricciones</option>
                        </select>

                        <div >
                            <h4>Categoria</h4>
                            <select name="category" onChange={handleCategories} className={styles.input}>
                                <option value="" hidden>Selecciona el tipo de local que mas coincida con el tuyo</option>
                                <option value="disco">Discoteca</option>
                                <option value="bar">Bar</option>
                                <option value="pub">Pub</option>
                            </select>
                        </div>

                        <div >
                            <input
                                type='number'
                                placeholder='Precio de la reserva'
                                value={local.bookPrice}
                                name="bookPrice"
                                onChange={handleChange}
                                className={styles.input}
                            />
                        </div>

                        <div >
                            <label>
                                En tu local se realizan eventos(ej: shows en vivo)
                                <input
                                    type='checkbox'
                                    value={local.event}
                                    name="event"
                                    onChange={handleEvent}
                                />
                            </label>
                        </div>

                        <div >
                            <label>Tu local es pet friendly?</label>
                            <input
                                type='checkbox'
                                value={local.petFriendly}
                                name="petFriendly"
                                onChange={handlePetFriendly}
                            />
                        </div>

                        <button
                            type="submit"
                            id="localButton"
                            className={styles.registrarButton}
                            disabled={!local.bookPrice || !local.ageRange || !local.capacity || !local.category || !local.image || !local.location || !local.menu || !local.name || !local.phone || !local.schedule}
                        >Registrar local</button>
                    </form>
                </div>

            </div>

        </div>
    )
}