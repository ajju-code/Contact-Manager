import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import st from "../Css/ContactList.module.css";
import user from "../images/user.png";

const ContactList = ({ contact, removeContactHandler }) => {
  console.log(contact);

  return (
    <>
      <div className={st.Contact_list}>
        <h4>Contact List </h4>
      </div>
      <div className="listItem">
        {contact.map((itm, ind) => (
          <div key={ind}>
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <img src={user} alt={`Profile of ${itm.name}`} />
                  <span>
                    Name: {itm.name} <br />
                    <small>
                      Email:
                      <strong> {itm.email}. </strong>
                    </small>
                  </span>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => removeContactHandler(itm.id)}
                  />
                </div>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default ContactList;
