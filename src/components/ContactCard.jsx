import { useContext } from "react";
import { Context } from "../context.jsx";
import { Link } from "react-router-dom";

const ContactCard = ({ contact }) => {
  const { deleteContact } = useContext(Context);

  return (
    <div className="card p-3 mb-3 shadow-sm">
      <h5>{contact.full_name}</h5>
      <p> {contact.email}</p>
      <p> {contact.phone}</p>
      <p> {contact.address}</p>

      <div className="mt-2">
        <Link to={`/edit/${contact.id}`} className="btn btn-warning me-2">
          Editar
        </Link>
        <button onClick={() => deleteContact(contact.id)} className="btn btn-danger">
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ContactCard;