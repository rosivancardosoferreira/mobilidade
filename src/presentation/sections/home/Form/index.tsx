import React, { useState } from "react";
import { Teste } from "./styles";
import { Form, Field } from "react-final-form";
import querystring from "qs";

interface Props {
  nome: string;
  email: string;
  arquivo: string;
}
const validate = (values: Props) => {
  const errors: any = {};
  if (!values.nome) {
    errors.nome = "Campo obrigatório";
  }
  if (!values.email) {
    errors.email = "Campo obrigatório";
  }
  if (!values.arquivo) {
    errors.arquivo = "Campo obrigatório";
  }
  return errors;
};

export function FormTeste() {
  const [enviado, setEnviado] = useState(false);

  const [infosFile, setInfosFile] = useState({
    name: "",
    size: ""
  });
  const [alertSizeFile, setAlertSizeFile] = useState(false);

  const formSubmit =
    (formName: any, options: any = {}) =>
    (values: any) => {
      console.log("call api");
      console.log(formName);
      console.log(options);

      let body = { "form-name": formName, ...values };

      console.log("POSSUE ARQUIVOS");
      const formData: any = new FormData();
      Object.entries(body).forEach(([key, value]) => {
        console.log("\n\n\n\n\n\n\n\n\n\n\n");
        console.log(key);
        console.log("\n\n\n\n\n\n\n\n\n\n\n");
        console.log(value);
        console.log("\n\n\n\n\n\n\n\n\n\n\n");
        formData.append(key, value);
      });

      const headers = { "Content-Type": "multipart/form-data" };
      body = new URLSearchParams(formData).toString();
      console.log("\n\n\n\n\n\n\n\n\n\n\nBODY");
      console.log(body);
      return fetch("/", { method: "POST", headers, body });
    };

  async function onSubmit(values: any, form: any) {
    console.log("requisição");
    await formSubmit("contact")(values);
    console.log("passou da requisição");
    setInfosFile({ name: "", size: "" });
    form.reset();
    Object.keys(values).forEach(key => {
      form.resetFieldState(key);
    });
  }

  const [state, setState] = React.useState({});

  const handleChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleAttachment = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let encode: any;
    const form = e.target;
    fetch("/", {
      method: "POST",
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state
      })
    })
      .then(() => alert("sucesso"))
      .catch(() => alert("erro"));
  };

  return (
    <Teste>
      <Form
        validate={validate}
        onSubmit={onSubmit}
        render={({ handleSubmit, form }) => (
          <form
            name="new-contact"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="new-contact" />

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

            <Field name="arquivo">
              {({ input, meta }) => (
                <>
                  <div
                    className={`content-file ${
                      infosFile.name.length > 0 && "exist-file"
                    }`}
                  >
                    <div className="file">
                      <input
                        {...input}
                        type="file"
                        id="analisisFile"
                        // onChange={(e) => {
                        //   input.onChange(e)
                        //   handleChangeFile(e, form)
                        // }}
                      />
                      <label htmlFor="analisisFile">
                        Anexar fatura de energia*
                      </label>
                      <p
                        className={
                          (meta.error && meta.touched) || alertSizeFile
                            ? "required-empty"
                            : "required-empty-hidden"
                        }
                      >
                        {meta.error && !alertSizeFile
                          ? meta.error
                          : "Arquivos de no máximo 1mb"}
                      </p>
                    </div>
                    <span>.doc, .docx ou .pdf. até 1mb</span>
                  </div>
                  <div
                    className={`list-files ${
                      infosFile.name.length === 0 && "no-files"
                    }`}
                  >
                    <div className="file-infos">
                      <p className="file-name">{infosFile.name}</p>
                      <p className="file-size">{infosFile.size} kb</p>
                    </div>
                    <button
                      onClick={() => {
                        form.change("arquivo", undefined);
                        console.log("limpar aquivo");
                        setInfosFile({ name: "", size: "" });
                      }}
                    >
                      TESTE
                    </button>
                  </div>
                </>
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

      {/* <h1>File Upload</h1>
      <form
        name="file-upload"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="file-upload" />
        <p hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Your name:
            <br />
            <input type="text" name="name" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            File:
            <br />
            <input type="file" name="attachment" onChange={handleAttachment} />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
        <p>
          Note: multiple file uploads are not supported by Netlify at this time.
        </p>
      </form> */}
    </Teste>
  );
}
