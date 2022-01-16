import querystring from "qs";

export const forms = {
  contactInfo: "Contato - Mais informações",
  contactProposal: "Contato - Proposta de Gestão",
  contactAnalisis: "Contato - Análise de viabilidade",
  contactWork: "Contato - Trabalhe conosco",
  newsletter: "Newsletter",
  calculator: "Calculadora"
};

export const formSubmit =
  (formName: string, options: any = {}) =>
  (values: any) => {
    console.log("call api");
    console.log(formName);
    console.log(options);
    let body = { "form-name": formName, ...values };
    const headers = { "Content-Type": "application/x-www-form-urlencoded" };
    body = querystring.stringify(body);

    return fetch("/", { method: "POST", headers, body });
  };
