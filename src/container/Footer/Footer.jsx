import React, { useState } from "react";
import "./Footer.scss";
import { useForm } from "react-hook-form";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import { SocialMedia } from "../../components";

const Footer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    const { name, email, message } = data;
    console.log("Form Data:", { name, email, message });

    if (name && email && message) {
      setLoading(true);

      // Simulate an asynchronous operation
      setTimeout(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      }, 1000);
    }
  };

  return (
    <>
      <h2 className="head-text">
        Lets Grab A <span>Tea</span> and <span>Chat</span>
      </h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.mail} alt="email" />
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=divyanshu.dev0p@gmail.com"
            className="p-text "
          >
            divyanshu.dev0p@gmail.com
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="app__footer-form-child app__footer-form-flex "
          >
            <div className="app__footer-form-flex">
              <input
                className="p-text"
                type="text"
                placeholder="Your Name"
                {...register("name", { required: "This field is required" })}
              />
              {errors.name && (
                <span className="app__form_error">{errors.name.message}</span>
              )}
            </div>
            <div className="app__footer-form-flex">
              <input
                className="p-text"
                type="email"
                placeholder="Your Email"
                {...register("email", { required: "This field is required" })}
              />
              {errors.email && (
                <span className="app__form_error">{errors.email.message}</span>
              )}
            </div>
            <div className="app__footer-form-flex">
              <textarea
                className="p-text"
                placeholder="Your Message"
                {...register("message", { required: "This field is required" })}
              />
              {errors.message && (
                <span className="app__form_error">
                  {errors.message.message}
                </span>
              )}
            </div>
            <button className="p-text" type="submit">
              {loading ? "Sending" : "Send Greetings"}
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank You for getting in touch.</h3>
        </div>
      )}
      <SocialMedia styleClass={"app__social-min"} />
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
