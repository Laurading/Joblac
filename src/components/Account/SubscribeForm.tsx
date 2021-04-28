import "./ExploreContainer.css";
import React, { useState } from "react";

interface ContainerProps {}

const SubscribeForm: React.FC<ContainerProps> = () => {
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
    checkPassword: "",
  });

  const handleSubmit = () => {
    console.log("submit");
  };

  const handleChange = ({ target }: any) => {
    setDataLogin({
      ...dataLogin,
      [target.name]: target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="email" onChange={handleChange} />
        <input name="password" onChange={handleChange} />
        <input name="checkPassword" onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>
          S'inscrire
        </button>
      </form>
      <a href="/login">Vous avez déjà un compte ? Connectez vous</a>
    </div>
  );
};

export default SubscribeForm;
