import React, { useState } from "react";
import "./Form.css";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from "@emailjs/browser";

// Validation schema using Yup
const schema = yup.object().shape({
  Name: yup.string().required("Name is required"),
  "Art der Veranstaltung": yup.string().required("Art der Veranstaltung is required"),
  Ort: yup.string().required("Ort is required"),
  "Anzahl Personen": yup.string().required("Anzahl Personen is required"),
  Telefon: yup.string().required("Telefon is required"),
  Email: yup.string().email("Invalid email").required("Email is required"),
  Datum: yup.date().required("Datum is required").nullable(),
});

function Form() {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(schema), // Yup schema for validation
  });

  const [TYtoggle, setTYtoggle] = useState(true);

  const sendEmail = (data, e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_uiydeb8",
        "template_8366nuq",
        e.target,
        "DV0747svO_L65l7MK"
      )
      .then(
        (result) => {
          console.log(result.text);
          setTYtoggle(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="kontakt">
      <div className="Kontakt">
        <h1 className="Kontakttitle">Kontakt</h1>
        <h5 className="Kontakt1">
          Schön, dass du auf unserer Seite gelandet bist. Wir würden es lieben,
          dich auf eine musikalische Reise mitzunehmen.
        </h5>
        <h5 className="Kontakt1">
          Interesse geweckt oder noch Fragen? Gerne begleiten wir dich dabei!
        </h5>
        <h5 className="Kontakt1">booking@birdland-music.ch | +41797307833</h5>
      </div>

      <div className="Background">
        <div className="Field">
          {TYtoggle ? (
            <>
              <h1 className="Kontakt2">Kontaktiere uns!</h1>
              <form onSubmit={handleSubmit(sendEmail)}>
                <input
                  {...register("Name")}
                  className="formel"
                  placeholder="Name"
                />
                {errors.Name && <p className="helper-text">{errors.Name.message}</p>}

                <input
                  {...register("Art der Veranstaltung")}
                  className="formel"
                  placeholder="Art der Veranstaltung"
                />
                {errors["Art der Veranstaltung"] && (
                  <p className="helper-text">{errors["Art der Veranstaltung"].message}</p>
                )}

                <input
                  {...register("Ort")}
                  className="formel"
                  placeholder="Ort"
                />
                {errors.Ort && <p className="helper-text">{errors.Ort.message}</p>}

                <input
                  {...register("Anzahl Personen")}
                  className="formel"
                  placeholder="Anzahl Personen"
                />
                {errors["Anzahl Personen"] && (
                  <p className="helper-text">{errors["Anzahl Personen"].message}</p>
                )}

                <input
                  {...register("Telefon")}
                  className="formel"
                  placeholder="Telefon"
                />
                {errors.Telefon && <p className="helper-text">{errors.Telefon.message}</p>}

                <input
                  {...register("Email")}
                  className="formel"
                  placeholder="Email"
                />
                {errors.Email && <p className="helper-text">{errors.Email.message}</p>}

                <input
                  {...register("Datum")}
                  className="formel"
                  placeholder="Datum"
                  />
                {errors.Datum && <p className="helper-text">{errors.Datum.message}</p>}

                <textarea
                  {...register("Nachricht")}
                  className="formelNachricht"
                  placeholder="Nachricht"
                  type="text"
                />

                <input
                  className="submit"
                  type="submit"
                  value="Senden"
                />
              </form>
            </>
          ) : (
            <h1 className="Kontakt3">
              Vielen Dank für deine Anfrage. Wir werden diese schnellstmöglich
              bearbeiten.
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Form;
