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
        formData.append(key, value);
      });

      const headers = { "Content-Type": "multipart/form-data" };
      body = new URLSearchParams(formData).toString();
      return fetch("/", { method: "POST", headers, body });
    };

  async function onSubmit(values: any, form: any) {
    console.log("requisição");
    await formSubmit("contact", { hasFile: true })(values);
    console.log("passou da requisição");
    setInfosFile({ name: "", size: "" });
    form.reset();
    Object.keys(values).forEach(key => {
      form.resetFieldState(key);
    });
  }

  return (
    <Teste>
      {/* <Form
        validate={validate}
        onSubmit={onSubmit}
        render={({ handleSubmit, form }) => (
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
      /> */}

      <form name="fileForm" data-netlify="true">
        <input type="hidden" name="form-name" value="FILEES" />

        <p>
          <label>
            <span>Name:</span>
            <input name="name" type="text" />
          </label>
        </p>
        <p>
          <label>
            <span>Add file:</span>
            <input name="file" type="file" />
          </label>
        </p>
        <button>Submit</button>
      </form>
      <p className="result"></p>
    </Teste>
  );
}
