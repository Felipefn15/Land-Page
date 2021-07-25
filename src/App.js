import "./App.css";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import Logo from "./assets/logo-white.png";
import family from "./assets/family-vector.svg";
import heart from "./assets/heart-vector.svg";
function App() {
  const myRef = useRef(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

  const onSubmit = (data) => {
    console.log(data);
    return alert(
      `Thanks ${data.fullname} for registering! Soon we will contact you by ${data.email} with more information.`
    );
  };

  return (
    <div className="App">
      <div className="mainContainer">
        <img src={Logo} className="Logo" alt="HealthMax Logo" />
        <button className="button goForm" onClick={executeScroll}>
          Request Contact
        </button>
        <div className="boxWhite">
          <p className="textInsurance">
            We want to make life insurance uncomplicated, but without losing the
            quality and solidity you know. It's been almost 200 years taking
            care of the health of millions of families.
          </p>
        </div>
      </div>
      <div>
        <div className="textContainer">
          <div className="mainTextContainer">
            <h2 className="mainText">
              Complete and flexible life insurance solutions
            </h2>
            <p className="text">
              We have plans that fit your profile. Choose what suits you best.
            </p>
          </div>
          <div className="subTextContainer">
            <div className="subTextContainerLeft">
              <img src={family} className="icon" alt="family icon" />
              <h3 className="subText">For your family</h3>
              <p className="text">
                Count on us when you need it most. Protect your family.
              </p>
            </div>
            <div className="subTextContainerRight">
              <img src={heart} className="icon" alt="heart icon" />
              <h3 className="subText">For your well being</h3>
              <p className="text">
                Discover life insurance that helps you take care of your health
                in life.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="divForm">
        <form
          className="formContainer"
          onSubmit={handleSubmit(onSubmit)}
          ref={myRef}
        >
          <input
            placeholder="Full Name"
            className="defaultInput"
            {...register("fullname", { required: true })}
          />
          <InputMask
            placeholder="DD/MM/YYYY"
            mask="99/99/9999"
            className="defaultInput"
            {...register("dateBirth", { required: true })}
          />
          <input
            placeholder="E-mail"
            className="defaultInput"
            {...register("email", { required: true })}
          />
          <input
            placeholder="Phone number"
            className="defaultInput"
            {...register("phone", { required: true })}
          />
          <input
            type="submit"
            className="button formButton"
            value="Get the offer"
          />
        </form>
      </div>
    </div>
  );
}

export default App;
