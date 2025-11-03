import { useContext } from "react";
import { Context } from "../context.jsx";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard.jsx";

const Contact = () => {
  const { contacts } = useContext(Context);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Contactos</h2>
        <Link to="/add" className="btn btn-primary">Agregar</Link>
      </div>

      {contacts.length === 0 ? (
        <p className="text-muted">No hay contactos aún.</p>
      ) : (
        contacts.map(c => <ContactCard key={c.id} contact={c} />)
      )}
    </div>
  );
};

export default Contact;