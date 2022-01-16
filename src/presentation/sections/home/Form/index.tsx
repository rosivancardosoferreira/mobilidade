import React, { useCallback, useState } from "react";
import { Teste } from "./styles";
import { Form, Field } from "react-final-form";
import querystring from "qs";

interface Props {
  nome: string;
  email: string;
}
const validate = (values: Props) => {
  const errors: any = {};
  if (!values.nome) {
    errors.nome = "Campo obrigatório";
  }
  if (!values.email) {
    errors.email = "Campo obrigatório";
  }
  return errors;
};

export function FormTeste() {
  const [enviado, setEnviado] = useState(false);

  const formSubmit =
    (formName: any, options: any = {}) =>
    (values: any) => {
      console.log("call api");
      console.log(formName);
      console.log(options);
      let body = { "form-name": formName, ...values };
      const headers = { "Content-Type": "application/x-www-form-urlencoded" };
      body = querystring.stringify(body);
      return fetch("/", { method: "POST", headers, body });
    };

  const onSubmit = useCallback(async (values, form) => {
    try {
      await formSubmit("contact")(values).then(() => {
        alert("ENVIADO COM SUCESSO!");
        setEnviado(true);
      });
      setTimeout(() => {
        Object.keys(values).forEach(key => {
          form.resetFieldState(key);
        });
        form.reset();
      });
    } catch (err) {
      console.log(err);
      alert("FALHOU COM SUCESSO!");
    }
  }, []);

  return (
    <Teste>
      <Form
        validate={validate}
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form name="contact" data-netlify="true" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />

            <Field name="nome">
              {({ input, meta }) => (
                <div className="message-newslatter">
                  <input
                    {...input}
                    type="text"
                    className="input"
                    placeholder="Nome"
                  />
                  <p
                    className={
                      meta.error && meta.touched
                        ? "required-empty"
                        : "required-empty-hidden"
                    }
                  >
                    {meta.error}
                  </p>
                </div>
              )}
            </Field>
            <Field name="email">
              {({ input, meta }) => (
                <div className="message-newslatter">
                  <input
                    {...input}
                    type="email"
                    className="input"
                    placeholder="E-mail"
                  />
                  <p
                    className={
                      meta.error && meta.touched
                        ? "required-empty"
                        : "required-empty-hidden"
                    }
                  >
                    {meta.error}
                  </p>
                </div>
              )}
            </Field>
            <button
              type="submit"
              //   disabled={disabledSubmit(values.nome, values.email)}
            >
              ENVIAR
            </button>
            {enviado && (
              <>
                {" "}
                <h1>APA, ENVIADO</h1>
                <button type="button" onClick={() => setEnviado(false)}>
                  {" "}
                  voltart
                </button>
              </>
            )}
          </form>
        )}
      />
    </Teste>
  );
}
