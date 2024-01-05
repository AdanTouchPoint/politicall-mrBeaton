"use client";
import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/cjs/Button";
import Alert from "react-bootstrap/Alert";
import List from "./List";
import ListSelect from "./ListSelect";
import EmailForm from "./EmailForm";
import ThankYou from "./ThankYou";
import Card from "react-bootstrap/cjs/Card";
import { Link, animateScroll as scroll } from "react-scroll";
import { fetchRepresentatives } from "../assets/petitions/fetchRepresentatives";
const MainForm = ({
  dataUser,
  setDataUser,
  mp,
  setMp,
  setEmailData,
  emailData,
  clientId,
  states,
  tweet,
  typData,
  mainData,
  backendURLBase,
  endpoints,
  backendURLBaseServices,
  senator,
  setSenator,
  setDataQuestions,
  dataQuestions,
  questions,
  setQuestions,
  configurations,
  allDataIn,
  setAllDataIn
}) => {
  const [showLoadSpin, setShowLoadSpin] = useState(false);
  const [showList, setShowList] = useState(true);
  const [showFindForm, setShowFindForm] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(true);
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(false);
  const [showThankYou, setShowThankYou] = useState(true);
  const [tac, setTac] = useState(false);
const {formFields} = mainData
  const handleTerms = (e) => {
    if (e.target.checked === true) {
      setTac(true);
    } else {
      setTac(false);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value,
    });
  };
  const fieldValidator = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const isValidEmail = (email) => {
      return emailRegex.test(email.trim());
    };
    for (let key in dataUser) {
      console.log(key)
      let value = dataUser[key];
      if(value === '') return false
      if (key === 'emailUser') {
        let value = dataUser[key];
       if (isValidEmail(value) === false ) return false
      }
    }
  }
  const click = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
    if ( fieldValidator() === false || 
    tac  === false ) {
      setError(true);
      return;
    }
    setShowLoadSpin(true);
    setError(false);
  
    if (configurations.SearchBy === "postcode") {
      fetchRepresentatives(
        "GET",
        backendURLBase,
        endpoints.toGetRepresentativesByCp,
        clientId,
        `&postcode=${dataUser.postalCode}`,
        setMp,
        setSenator,
        setShowLoadSpin,
        setShowList
      ).catch((error) => console.log("error", error));
      scroll.scrollToBottom();
     if (!mainData) return "loading datos";
     if (!mp) return "loading datos";
   }

    if (configurations.SearchBy === "state") {
      fetchRepresentatives(
       "GET",
       backendURLBase,
       endpoints.toGetRepresentativesPerStates,
       clientId,
       `&state=${dataUser.state}`,
       setMp,
       setShowLoadSpin,
       setShowList,
       mp,
       setSenator,
       senator,
       configurations.sendMany,
       setAllDataIn
     ).catch((error) => console.log("error", error));
     scroll.scrollTo(1000)
     if (!mainData) return "loading datos";
     if (!mp) return "loading datos";
   }
   if (configurations.searchBy === "party") {
      fetchRepresentatives(
       "GET",
       backendURLBase,
       endpoints.toGetRepresentativesPerParty,
       clientId,
       `&party=${dataUser.party}`,
       setMp,
       setShowLoadSpin,
       setShowList,
       mp,
       setSenator,
       senator
     ).catch((error) => console.log("error", error));
     scroll.scrollTo(1000)
     if (!mainData) return "loading datos";
     if (!mp) return "loading datos";
   }
  };
  if (!mainData) return "loading datos";
  if (!mp) return "loading datos";
  console.log("Main page data", mainData);
  console.log("Dataquestions", dataQuestions);
  console.log("senator data", senator);
  console.log("tweets", tweet);
  console.log("TYPdata", typData);
  console.log("userdata", emailData);
  return (
    <div className={"contenedor main-form-flex-container"}>
      <Card className="bg-dark card-img text-white main-image-container">
        <Card.Header
          className="card-img"
          style={{
            backgroundImage: `url(${mainData.mainImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          alt={"header"}
        />
        <Card.ImgOverlay className={"card-img-overlay"}>
          <Card.Body>
            <Card.Text className={"text"}>{mainData.title}</Card.Text>
            <Card.Text className={"text2"}>{mainData.subtitle}</Card.Text>
          </Card.Body>
        </Card.ImgOverlay>
      </Card>
      <div className={"container instructions"}>{mainData.instruction}</div>
      <div className={"form-container"}>
        <div hidden={showFindForm} className={"container container-content"}>
          {error ? (
            <Alert variant={"danger"}>
              Please fill all fields.  Also, please make sure there are no spaces before of after your email or postcode.
            </Alert>
          ) : null}
          <Link
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          ></Link>
          <Form name='fm-find' onSubmit={click} noValidate validated={validated}>
            <h3 className="find-her-mp-text">{mainData.firstFormLabel1}</h3>
            <div className="fields-form">
            {formFields.map((field, key) => {
              console.log(field, key);
              return field.type !== "state" ? (
                  <Form.Group className="field" key={key}>
                    <Form.Label className="select-label">{field.label}</Form.Label>
                    <Form.Control
                      id="emailInput-mainForm"
                      type={field.type}
                      placeholder={field.placeholder}
                      name={field.type}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
            
              ) : (
states.length > 0 ? 
<Form.Group className={"field"} key={key}>
<Form.Label className="select-label">{field.label}</Form.Label>
 <Form.Select
   aria-label="DefaulValue"
   required
   name={field.type}
   id="stateSelect-mainForm"
   onChange={handleChange}
 >
   <option key={"vacio"} value={""}>
     {field.placeholder}
   </option>
   {states.sort().map((estate) => (
     <option key={estate} value={estate}>
       {estate}
     </option>
   ))}
 </Form.Select>
</Form.Group> 
:
   <Form.Group className="field" key={key}>
   <Form.Label className="select-label">{field.label}</Form.Label>
   <Form.Control
     id="emailInput-mainForm"
     type={field.type}
     placeholder={field.placeholder}
     name={field.type}
     onChange={handleChange}
     required
   />
 </Form.Group>

              );
            })}
            </div>
            <Form.Group style={{ textAlign: "justify" }} className="field select-styles-form" controlId="conditions">
              <Form.Check
                name="conditions"
                onClick={handleTerms}
                required
                label={
                  <a
                    target={"_blank"}
                    rel={"noreferrer"}
                    href={mainData.termsAndConditionsURL}
                  >
                    {" "}
                    {mainData.termsAndConditionsTxt}
                  </a>
                }
              />
            </Form.Group>
            <Form.Group>
              <Button
              id="findButton-mainForm"
                type={"submit"}
                variant={"dark"}
                size={"lg"}
                onClick={click}
                className={"u-full-width capitalize-style find-btn-main-form"}
              >
                {mainData.findBtnText}
              </Button>
            </Form.Group>
            {showLoadSpin ? (
              <Loader
                visible={showLoadSpin}
                type="Puff"
                color="#000000"
                height={100}
                width={100}
                timeout={10000}
              />
            ) : null}
          </Form>
          { configurations.sendMany === "Si" ? (
            <div className={"container senators-container"} hidden={showList}>
            <div className="note-container">
              <p>{mainData.note}</p>
            </div>
            <h2>{mainData.positionName}</h2>
            <div className="representatives-container">
              {mp.length > 0 ? (
                <ListSelect
                  setShowEmailForm={setShowEmailForm}
                  setShowFindForm={setShowFindForm}
                  showFindForm={showFindForm}
                  emailData={emailData}
                  setEmailData={setEmailData}
                  dataUser={dataUser}
                  mp={mp}
                  clientId={clientId}
                  // key={index}
                  tweet={tweet}
                  allDataIn={allDataIn}
                  setAllDataIn={setAllDataIn}
                />
              ) : (
                <Alert variant="danger">
                  No representatives have been found with the state that has
                  provided us
                </Alert>
              )}
            </div>
          </div>
)
 : ( 
  <div className={"container senators-container"} hidden={showList}>
  <div className="note-container">
    <p>{mainData.note}</p>
  </div>
  <Link
  activeClass="active"
  to="section1"
  spy={true}
  smooth={true}
  offset={70}
  duration={500}
></Link>
  <h2>{mainData.positionName}</h2>
  <div className="representatives-container">
    {console.log(mp)}
    {mp.length > 0 ? (
      configurations.filter === 'party' ? mp.filter((el)=> el.party === 'ALP').map((mps, index) => (
        <List
          setShowEmailForm={setShowEmailForm}
          setShowFindForm={setShowFindForm}
          showFindForm={showFindForm}
          emailData={emailData}
          setEmailData={setEmailData}
          dataUser={dataUser}
          mps={mps}
          clientId={clientId}
          key={index}
          tweet={tweet}
        />
      )) : mp.map((mps, index) => (
        <List
          setShowEmailForm={setShowEmailForm}
          setShowFindForm={setShowFindForm}
          showFindForm={showFindForm}
          emailData={emailData}
          setEmailData={setEmailData}
          dataUser={dataUser}
          mps={mps}
          clientId={clientId}
          key={index}
          tweet={tweet}
        />
      ))
    ) : (
      <Alert variant="danger">
        No representatives have been found with the state that has
        provided us
      </Alert>
    )}
  </div>
   <h2>{mainData.senatorLabel}</h2>
  <div className="representatives-container">
    {senator.length > 0 ? (
    senator.map((mps, index) => (
      <List
        setShowEmailForm={setShowEmailForm}
        setShowFindForm={setShowFindForm}
        showFindForm={showFindForm}
        emailData={emailData}
        setEmailData={setEmailData}
        dataUser={dataUser}
        mps={mps}
        clientId={clientId}
        key={index}
        tweet={tweet}
      />
    ))
    ) : (
      <Alert variant="danger">
        No representatives have been found with the state that has
        provided us
      </Alert>
    )}
  </div>
</div>
 )}
        </div>
      </div>
      <EmailForm
        setShowThankYou={setShowThankYou}
        setShowFindForm={setShowFindForm}
        setShowEmailForm={setShowEmailForm}
        showEmailForm={showEmailForm}
        dataUser={dataUser}
        emailData={emailData}
        setEmailData={setEmailData}
        setDataUser={setDataUser}
        clientId={clientId}
        endpoints={endpoints}
        backendURLBase={backendURLBase}
        backendURLBaseServices={backendURLBaseServices}
        mainData={mainData}
        questions={questions}
        setQuestions={setQuestions}
        setDataQuestions={setDataQuestions}
        dataQuestions={dataQuestions}
        allDataIn={allDataIn}
        setAllDataIn={setAllDataIn}
        configurations={configurations}
      />
      <ThankYou
        emailData={emailData}
        setDataUser={setDataUser}
        setEmailData={setEmailData}
        setShowFindForm={setShowFindForm}
        setShowThankYou={setShowThankYou}
        clientId={clientId}
        typData={typData}
        showThankYou={showThankYou}
      />
    </div>
  );
};
export default MainForm;