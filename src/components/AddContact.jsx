import { useContext, useState, useEffect } from "react";
import { Context } from "../context.jsx";
import { useNavigate, useParams } from "react-router-dom";

const AddContact = () => {
  const { addContact, updateContact, contacts } = useContext(Context);
  const navigate = useNavigate();
  const { id } = useParams();

  const contactToEdit = contacts.find(c => c.id === parseInt(id));

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    if (contactToEdit) setFormData(contactToEdit);
  }, [contactToEdit]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) updateContact(contactToEdit.id, formData);
    else addContact(formData);
    navigate("/"); // volvemos a la lista
  };

  return (
    <div className="container mt-4">
      <h2>{id ? "Editar Contacto" : "Agregar Contacto"}</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        <input 
			className="form-control mb-2" 
			name="full_name" 
			placeholder="Nombre completo" 
			value={formData.full_name} 
			onChange={handleChange} 
			required 
		/>
        <input 
			className="form-control mb-2" 
			name="email" 
			placeholder="Correo electrónico"
			value={formData.email} onChange={handleChange} 
			required 
		/>
        <input 
			className="form-control mb-2" 
			name="phone" placeholder="Teléfono" 
			value={formData.phone} 
			onChange={handleChange} 
			required 
		/>
        <input 
			className="form-control mb-2" 
			name="address" 
			placeholder="Dirección" 
			value={formData.address} 
			onChange={handleChange} 
			required 
		/>
        <button className="btn btn-success">{id ? "Actualizar" : "Guardar"}</button>
      </form>
    </div>
  );
};

export default AddContact;