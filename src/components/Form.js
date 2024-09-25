import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from "@emailjs/browser";
import { TextField, Button, Typography } from '@mui/material';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./Form.css";

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
  const { register, handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
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

  const textFieldStyles = {
    input: {
      color: 'white',  // Text color inside input
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
        borderWidth: '2px',  // Default border thickness
      },
      '&:hover fieldset': {
        borderColor: 'gray',  // Border color on hover
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black',  // Border color when focused
      },
    },

    // Target the label color when the field is focused
  '& .MuiInputLabel-root': {
    color: 'gray',  // Default label color
    '&.Mui-focused': {
      color: '#e7bd32',  // Yellow label color when focused
    },
  },
    
    '& .MuiFormHelperText-root': {
      color: 'white',  // Helper text color (error messages)
    },
  };


  return (
    <div id="kontakt" className="background-image">
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
              <Typography variant="h5" gutterBottom className="Kontakt2">
                Kontaktiere uns!
              </Typography>
              <form onSubmit={handleSubmit(sendEmail)}  >
                <TextField
                  {...register("Name")}
                  label="Name"
                  fullWidth
                  margin="normal"
                  error={!!errors.Name}
                  helperText={errors.Name?.message}
                  sx={textFieldStyles}
                />

                <TextField
                  {...register("Art der Veranstaltung")}
                  label="Art der Veranstaltung"
                  fullWidth
                  margin="normal"
                  error={!!errors["Art der Veranstaltung"]}
                  helperText={errors["Art der Veranstaltung"]?.message}
                  sx={textFieldStyles}
                  
                />

                <TextField
                  {...register("Ort")}
                  label="Ort"
                  fullWidth
                  margin="normal"
                  error={!!errors.Ort}
                  helperText={errors.Ort?.message}
                  sx={textFieldStyles}
                />

                <TextField
                  {...register("Anzahl Personen")}
                  label="Anzahl Personen"
                  fullWidth
                  margin="normal"
                  error={!!errors["Anzahl Personen"]}
                  helperText={errors["Anzahl Personen"]?.message}
                  sx={textFieldStyles}
                />

                <TextField
                  {...register("Telefon")}
                  label="Telefon"
                  fullWidth
                  margin="normal"
                  error={!!errors.Telefon}
                  helperText={errors.Telefon?.message}
                  sx={textFieldStyles}
                />

                <TextField
                  {...register("Email")}
                  label="Email"
                  fullWidth
                  margin="normal"
                  error={!!errors.Email}
                  helperText={errors.Email?.message}
                  sx={textFieldStyles}
                />

                 {/* DatePicker with a custom input field */}
                 <Controller
                  name="Datum"
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      selected={field.value}
                      onChange={(date) => field.onChange(date)}
                      customInput={
                        <TextField
                          fullWidth
                          margin="normal"
                          label="Datum"
                          error={!!errors.Datum}
                          helperText={errors.Datum?.message}
                          sx={{
                            ...textFieldStyles,
                            width: '338px',  // Ensure the input takes the full width
                          }}
                        />
                      }
                    />
                  )}
                />



                <TextField
                  {...register("Nachricht")}
                  label="Nachricht"
                  fullWidth
                  margin="normal"
                  multiline
                  rows={4}
                  sx={textFieldStyles}
                />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  marginTop: '2vh',
                  backgroundColor: 'black',
                  '&:hover': {
                    backgroundColor: '#e7bd32',
                    color: 'black',
                  },
                }}
              >
                Senden
              </Button>
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
