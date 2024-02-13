"use client";
import React, { useState } from "react";
import Button from "react-bootstrap/cjs/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/cjs/Col";
import Alert from "react-bootstrap/Alert";
import Loader from "react-loader-spinner";
import { fetchData } from "../assets/petitions/fetchData";
import { fetchLeads } from "../assets/petitions/fetchLeads";
import { urlEncode } from '../assets/helpers/utilities';
const EmailForm = ({
  setDataQuestions,
  dataQuestions,
  setQuestions,
  questions,
  setShowThankYou,
  setShowFindForm,
  dataUser,
  setDataUser,
  showEmailForm,
  setShowEmailForm,
  emailData,
  setEmailData,
  clientId,
  backendURLBase,
  endpoints,
  backendURLBaseServices,
  mainData,
  allDataIn,
  setAllDataIn,
  configurations,
  setHideInstructions
}) => {
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(false);
  const [showLoadSpin, setShowLoadSpin] = useState(false);
  const handleQuestions = (e) => {
    e.preventDefault();
    setQuestions({
      ...questions,
      [e.target.name]: e.target.value
        .replace(/\n\r?/g, "<br/>")
        .replace(/#/g, " "),
    });
  };
  const handleChange = (e) => {
    e.preventDefault();
    setDataUser({
      ...dataUser,
      ...emailData,
      [e.target.name]: e.target.value
        .replace(/\n\r?/g, "<br/>")
    });
    setEmailData({
      ...dataUser,
      ...emailData,
      [e.target.name]: e.target.value
        .replace(/\n\r?/g, "<br/>")
    });
  };
  const { userName, subject } = dataUser;
  const send = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
    if (userName?.trim() === "" || subject?.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    const payload = await fetchData(
      "GET",
      backendURLBaseServices,
      endpoints.toSendEmails,
      clientId,
      `questions=${urlEncode(JSON.stringify(questions))}&user=${urlEncode(JSON.stringify(dataUser))}`
    );
    setShowLoadSpin(false);
    if (payload.success === true) {
      fetchLeads(
        true,
        backendURLBase,
        endpoints,
        clientId,
        dataUser,
        emailData,
        questions
      );
      setShowEmailForm(true);
      setShowThankYou(false);
    }
    if (payload.success !== true) {
      fetchLeads(
        false,
        backendURLBase,
        endpoints,
        clientId,
        dataUser,
        emailData,
        questions
      );
      return (
        <Alert>
          El correo no ha sido enviado con éxito, por favor intente de nuevo más
          tarde
          <Button
            className={"button-email-form"}
            variant={"dark"}
            onClick={back}
          >
            Regresar
          </Button>
        </Alert>
      );
    }
  };
  const back = (e) => {
    e.preventDefault();
    setHideInstructions(false)
    setShowFindForm(false);
    setShowEmailForm(true);
  };
console.log(showEmailForm)
  return (
    <div className={"emailContainer"} hidden={showEmailForm}>
      {error ? (
        <Alert variant={"danger"}>
          All fields are required, please fill in the missing ones.
        </Alert>
      ) : null}
      <Form name="fm-email" onSubmit={send} noValidate validated={validated}>
        <div className={"formEmail"}>
          <Col>
            <Form.Group>
              <Form.Label>{mainData.emailFormUserNameLabel}</Form.Label>
              <Form.Control
                plaintext="true"
                id="username-emailform"
                type="text"
                placeholder={mainData.emailFormUserNamePlaceholder}
                name="userName"
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="email">
              <Form.Label>{mainData.emailFormUserLabel}</Form.Label>
              <Form.Control
                plaintext="true"
                id="email-emailForm"
                type="email"
                placeholder={emailData.emailUser}
                onChange={handleChange}
                name="emailUser"
                readOnly
              />
            </Form.Group>
          </Col>
        </div>
        <Col>
          <Form.Label>{mainData.emailFormInfoRepLabel}</Form.Label>
        </Col>
        <div className={"formEmail"}>
          <Col>
            <Form.Group>
              <Form.Control
                plaintext="true"
                id="to-emailForm"
                as={"input"}
                readOnly
                type="text"
                placeholder={emailData.name}
                name="nameTo"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Control
                plaintext="true"
                id="state-emailForm"
                as={"input"}
                readOnly
                type="text"
                placeholder={`${emailData.state}`}
                name="state-city"
              />
            </Form.Group>
          </Col>
        </div>
        <div className="input-subject">
          <Col>
            <Form.Group>
              <Form.Label>{mainData.emailFormSubjectPlaceholder}</Form.Label>
              <Form.Control
                plaintext="true"
                id="subject-emailform"
                onChange={handleChange}
                as="input"
                type="text"
                name="subject"
                defaultValue={dataUser.subject}
                required
              />
            </Form.Group>
          </Col>
        </div>
        {dataQuestions
          ? dataQuestions.map((el, index) => (
              // eslint-disable-next-line react/jsx-key
              <Col className="questions" key={index}>
                <Form.Group>
                  <Form.Label> {el.questions} </Form.Label>
                  <Form.Control
                    plaintext="true"
                    id="message-emailform"
                    onChange={handleQuestions}
                    type="text"
                    name={`question${index + 1}`}
                    required
                  />
                </Form.Group>
              </Col>
            ))
          : null}
        <Loader
          visible={showLoadSpin}
          type="Puff"
          color="#000000"
          height={100}
          width={100}
          timeout={5000}
        />
      </Form>
      <div className={"container buttons-container-email-form"}>
        <Button
          id="sendButton-emailform"
          type={"submit"}
          className={"button-email-form"}
          variant={"dark"}
          onClick={send}
        >
          {emailData.sendButton
            ? "please enter a send-button text on your dashboard"
            : "Send"}
        </Button>
        <Button
          id="backButton-emailform"
          className={"button-email-form"}
          variant={"dark"}
          onClick={back}
        >
          {emailData.backButton
            ? "please enter a back-button text on your dashboard"
            : "Back"}
        </Button>
      </div>
    </div>
  );
};

export default EmailForm;
