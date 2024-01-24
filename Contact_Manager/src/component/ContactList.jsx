import st from "../Css/ContactList.module.css";
import user from "../images/user.png";
const ContactList = ({ contact }) => {
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
              <li className="list-group-item ">
                <img src={user} alt={`Profile of ${itm.name}`} />
                Name: {itm.name}
                <br />
                <small>
                  Email:
                  <strong> {itm.email}. </strong>
                </small>{" "}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};
export default ContactList;
