"use client";
import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/cjs/Button";
import Alert from "react-bootstrap/Alert";
import List from "./List";
import EmailForm from "./EmailForm";
import ThankYou from "./ThankYou";
import Card from "react-bootstrap/cjs/Card";
import Image from "next/image";
import { Link, animateScroll as scroll } from "react-scroll";
import { fetchRepresentatives } from "../assets/petitions/fetchRepresentatives";
import TAC from "./TAC";
import vicsImage from "../assets/images/VICS-premier.png"
import nswImage from "../assets/images/NSW-premier.png"
import saImage from "../assets/images/SA-premier.png"
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
  setAllDataIn,
  setShowFindForm,
  showFindForm,
  hideMain,
  setHideMain,
}) => {
  const [showLoadSpin, setShowLoadSpin] = useState(false);
  const [showList, setShowList] = useState(true);
  const [showEmailForm, setShowEmailForm] = useState(true);
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(false);
  const [showThankYou, setShowThankYou] = useState(true);
  const [tac, setTac] = useState(false);
  const [showTAC, setShowTAC] = useState(false);
  const [hideInstructions,setHideInstructions]= useState(false)
  const { formFields } = mainData;
  const handleTerms = (e) => {
    e.preventDefault;
    console.log("here");
    if (e.target.checked === true) {
      setShowTAC(true);
      setTac(true);
    } else {
      setTac(false);
    }
  };
  const premierImageControler = (state) => {
    switch (state) {
      case 'vics':
          return (
            <Image src={vicsImage} alt="Victoria's Premier" className="mps-image"/>
          )        
        break;
        case 'sas':
          return (
            <Image src={saImage} alt="South Africa's Premier" className="mps-image"/>
          )        
        break;
        case 'nsws':
          return (
            <Image src={nswImage} alt="New South Wale's Premier" className="mps-image"/>
          )        
        break;
      
    }
  } 
  const handleChange = (e) => {
    e.preventDefault();
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value,
    });
  };
  const isValidEmail = (email) => {
    if (!email) {
      return false;
    }
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email.trim());
  };
  console.log(typeof states);
  const click = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (
      !isValidEmail(dataUser.emailUser) ||
      tac === false ||
      form.checkValidity() === false ||
      Object.getOwnPropertyNames(dataUser).length === 0 ||
      dataUser.postalCode === undefined ||
      dataUser.emailUser === undefined
    ) {
      e.preventDefault();
      e.stopPropagation();
      setError(true);
      return;
    }
    setShowLoadSpin(true);
    setError(false);
    fetchRepresentatives(
      "GET",
      backendURLBase,
      endpoints.toGetRepresentativesPerStates,
      clientId,
      `&state=${states}&postcode=${dataUser.postalCode}`,
      setMp,
      setSenator,
      setShowLoadSpin,
      setShowList
    ).catch((error) => console.log("error", error));
    scroll.scrollToBottom();
  };
  return (
    <div hidden={hideMain} className="main-form-full-width">
       <TAC setShowTAC={setShowTAC} showTAC={showTAC} />
      <div className={"main-form-flex-container"}>
        <div className="instructions-findform-contain">
        <div hidden={hideInstructions} className={"container instructions"}>
          <div className="img-mps-container">
            {
              premierImageControler(states)
            }
            
          </div>
          {/* <h2 className="subtitle-main" >{mainData.subtitle}</h2> */}
          <h4 className="subtitle-content-mainform">{states === "sas" ? "SOUTH AUSTRALIA" : states === "nsws" ? "NEW SOUTH WALES" : states === "vics"? "VICTORIA" : "N/A"} DOESN’T CARE! </h4>
            <p className="p-content-main"> Based on {states === "sas" ? "SA" : states === "nsws" ? "NSW" : states === "vics"? "VIC" : "N/A"}’s plans to enforce a State Tax on GP clinics over the next 2 years…</p>
            <p className="p-content-main"> <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_163_239)">
<path d="M19.068 10.61L3.07127 0.14003C2.75248 -0.115669 2.6072 -0.0115948 2.7469 0.372414L9.32841 10.3776C9.46803 10.7616 9.46676 11.3839 9.32549 11.7674L2.7499 21.6267C2.60862 22.0101 2.75378 22.1154 3.07423 21.8618L19.0651 11.5323C19.3854 11.2787 19.3868 10.8658 19.068 10.61Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_163_239">
<rect width="22" height="22" fill="white" transform="matrix(-1 0 0 -1 22 22)"/>
</clipPath>
</defs>
</svg> Your chance to get a bulk-billed GP appointment will reduce by 35%.<br/>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_163_239)">
<path d="M19.068 10.61L3.07127 0.14003C2.75248 -0.115669 2.6072 -0.0115948 2.7469 0.372414L9.32841 10.3776C9.46803 10.7616 9.46676 11.3839 9.32549 11.7674L2.7499 21.6267C2.60862 22.0101 2.75378 22.1154 3.07423 21.8618L19.0651 11.5323C19.3854 11.2787 19.3868 10.8658 19.068 10.61Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_163_239">
<rect width="22" height="22" fill="white" transform="matrix(-1 0 0 -1 22 22)"/>
</clipPath>
</defs>
</svg> Your gap fee to see a private GP will increase by an average of $11.</p>
        </div>
        <div hidden={showFindForm} className={"form-container"}>
          <div className={"container container-content"}>
            <h1 className="text-form-header">
              Concerned about how {states === "sas" ? "SA" : states === "nsws" ? "NSW" : states === "vics"? "VIC" : "N/A"}’s state tax will
              impact your care?<br/> <span className="subtext-form-header"> It takes less than two minutes to have your say!</span> 
            </h1>
            {error ? (
              <Alert variant={"danger"}>
                Please fill all fields. Also, please make sure there are no
                spaces before of after your email or postcode.
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
            <Form
              name="fm-find"
              onSubmit={click}
              noValidate
              validated={validated}
            >
              <h3 className="find-her-mp-text">{mainData.firstFormLabel1}</h3>
              <div className="fields-form">
                {formFields.map((field, key) => {
                  return (
                    <Form.Group className="field" key={key}>
                      <Form.Label className="select-label">
                        {field.label}
                      </Form.Label>
                      <Form.Control
                        className="line-down"
                        id="emailInput-mainForm"
                        type={field.type}
                        placeholder={field.placeholder}
                        name={field.type}
                        onChange={handleChange}
                        plaintext="true"
                        required
                      />
                    </Form.Group>
                  );
                })}
                <Form.Group className="buton-box-form">
                  <Button
                    id="findButton-mainForm"
                    type={"submit"}
                    variant={"dark"}
                    size={"lg"}
                    onClick={click}
                    className={
                      "u-full-width capitalize-style find-btn-main-form"
                    }
                  >
                    {'Get Started'}
                  </Button>
                </Form.Group>
                <Form.Group
                  style={{ textAlign: "justify" }}
                  className="field select-styles-form"
                  controlId="conditions"
                >
                  <Form.Check
                    name="conditions"
                    onClick={handleTerms}
                    required
                    label={<p>{mainData.termsAndConditionsTxt}</p>}
                  />
                </Form.Group>
              </div>
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
          </div> 
        </div>
        </div>
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
            {mp.length > 0 ? (
              mp.map((mps, index) => (
                <List
                  setHideInstructions={setHideInstructions}
                  setShowList={setShowList}
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
            {senator?.length > 0 ? (
              senator?.map((mps, index) => (
                <List
                  setHideInstructions={setHideInstructions}
                  setShowList={setShowList}
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
        <EmailForm
          setHideInstructions={setHideInstructions}
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
        setHideInstructions={setHideInstructions}
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
    </div>
  );
};
export default MainForm;
