import { createContext, useState, useEffect } from "react";

// Creamos el Context
export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const agendaSlug = "vulcan"; // obligatorio para la API

  // Traer contactos (GET)
  const getContacts = async () => {
    try {
      const res = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaSlug}/contacts`);
      const data = await res.json();
      setContacts(data.contacts || []);
    } catch (error) {
      console.error("Error al obtener contactos:", error);
    }
  };

  // Agregar contacto (POST)
  const addContact = async (contact) => {
    try {
      await fetch(`https://playground.4geeks.com/contact/agendas/${agendaSlug}/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...contact, agenda_slug: agendaSlug }),
      });
      getContacts(); // refrescamos la lista
    } catch (error) {
      console.error("Error al agregar contacto:", error);
    }
  };

  // Actualizar contacto (PUT)
  const updateContact = async (id, updatedData) => {
    try {
      await fetch(`https://playground.4geeks.com/contact/contacts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });
      getContacts(); // refrescamos la lista
    } catch (error) {
      console.error("Error al actualizar contacto:", error);
    }
  };

  // Eliminar contacto (DELETE)
  const deleteContact = async (id) => {
    try {
      await fetch(`https://playground.4geeks.com/contact/contacts/${id}`, { method: "DELETE" });
      getContacts(); // refrescamos la lista
    } catch (error) {
      console.error("Error al eliminar contacto:", error);
    }
  };

  // Traer contactos al iniciar la app
  useEffect(() => { getContacts(); }, []);

  return (
    <Context.Provider value={{ contacts, addContact, updateContact, deleteContact }}>
      {children}
    </Context.Provider>
  );
};