import React from "react";
import { useState } from "react";
import "./Form.css";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Form() {
  const [data, setData] = useState("");

  const [TYtoggle, setTYtoggle] = useState(true);

  function toggleTY(e) {
    setTYtoggle(false);
    console.log(TYtoggle);
  }
  const [Buttoggle, setButtoggle] = useState(false);

  function toggleBut(e) {
    setTYtoggle(true);
    console.log(TYtoggle);
  }

  const [Formval, setFormval] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  function onchangeFormval(e) {
    let arr = Formval;
    let val = false;

    if (e.target.value) {
      arr[e.target.id] = true;
      console.log(e.target.id);
    } else {
      arr[e.target.id] = false;
      setButtoggle(false);
    }

    if (arr.includes(false)) {
      val = false;
    } else {
      val = true;
    }
    setFormval(arr);
    setButtoggle(val);
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uiydeb8",
        "template_8366nuq",
        form.current,
        "DV0747svO_L65l7MK"
      )
      .then(
        (result) => {
          console.log(result.text);
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
          dich auf eine musikalische Reise mitzunehmen.{" "}
        </h5>
        <h5 className="Kontakt1">
          Interesse geweckt oder noch Fragen? Gerne begleiten wir dich dabei!{" "}
        </h5>
        <h5 className="Kontakt1">booking@birdland-music.ch | +41797307833 </h5>
      </div>

      <div className="Background">
        <div className="Field">
          {TYtoggle ? (
            <>
              <h1 className="Kontakt2">Kontaktiere uns!</h1>
              <form ref={form} onSubmit={sendEmail}>
                <input
                  id="0"
                  className="formel"
                  name="Name"
                  autoComplete="off"
                  placeholder="Name*"
                  onChange={(e) => onchangeFormval(e)}
                />
                <input
                  id="1"
                  className="formel"
                  name="Art der Veranstaltung"
                  autoComplete="off"
                  placeholder="Art der Veranstaltung*"
                  onChange={(e) => onchangeFormval(e)}
                />
                <input
                  id="2"
                  className="formel"
                  name="Ort"
                  autoComplete="off"
                  placeholder="Ort*"
                  onChange={(e) => onchangeFormval(e)}
                />
                <input
                  id="3"
                  className="formel"
                  name="Anzahl Personen"
                  autoComplete="off"
                  placeholder="Anzahl Personen*"
                  onChange={(e) => onchangeFormval(e)}
                />
                <input
                  id="4"
                  className="formel"
                  name="Telefon"
                  autoComplete="off"
                  placeholder="Telefon*"
                  onChange={(e) => onchangeFormval(e)}
                />
                <input
                  id="5"
                  className="formel"
                  name="Email"
                  autoComplete="off"
                  placeholder="Email*"
                  onChange={(e) => onchangeFormval(e)}
                />
                <input
                  id="6"
                  className="formel"
                  name="Datum"
                  autoComplete="off"
                  placeholder="Datum*"
                  onChange={(e) => onchangeFormval(e)}
                />
                <textarea
                  className="formelNachricht"
                  name="Nachricht"
                  autoComplete="off"
                  placeholder="Nachricht"
                  type="text"
                />
                {Buttoggle ? (
                  <input
                    className="submit"
                    type="submit"
                    value="Senden"
                    onClick={toggleTY}
                  />
                ) : (
                  <input
                    className="submitdis"
                    type="submit"
                    value="Senden (Form unvollständig)"
                    onClick={toggleTY}
                    disabled
                  />
                )}
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
