import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <span>
        <Link to={"/"}>Lista de Produtos</Link>,{" "}
        <Link to={"/event/graduation"}>Eventos de Formatura</Link>,{" "}
        <Link to={"/event/wedding"}>Casamento</Link> e{" "}
        <Link to={"/event/confraternization"}>Confraternização</Link>
      </span>
    </>
  );
};
