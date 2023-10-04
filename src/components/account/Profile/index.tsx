import React, { FC } from "react";
import styles from "./profile.module.scss";
import { ILink, IProfileProps } from "../../../data/profile";
import { profile } from "../../../data/profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

export const Profile: FC = () => {
  const { name, pronouns, title, contact, bio, links } =
    profile as IProfileProps;

  // set the mobile navigation context to the profile title and an empty action
  // React.useContext(MobileNavigationContext).title = name;

  const contactContent = contact ? (
    <span>{contact}</span>
  ) : (
    <span>
      No registered services, you can add some on the <a href="#">Settings</a>{" "}
      page.
    </span>
  );
  return (
    <div className={styles.profile}>
      <div className={styles.profile__body}>
        <div className={styles.profile__avatar}>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <h3 className={styles.profile__name}>{name}</h3>
        <div className={styles.profile__field}>
          <h4 className={styles.profile__label}>Contact</h4>
          <p className={styles.profile__value + "form-control"}>
            {contactContent}
          </p>
        </div>
        <div className={styles.profile__field}>
          <h4 className={styles.profile__label}>Biography</h4>
          <p className={styles.profile__value}>{bio}</p>
        </div>
        <div className={styles.profile__field}>
          <h4 className={styles.profile__label}>Links</h4>
          {links.map((link: ILink) => (
            <div className={styles.profile__link}>
              <FontAwesomeIcon icon={faLink} />
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.name}
              </a>
            </div>
          ))}
        </div>
      </div>
      <NavLink
        to="/account/profile/edit"
        className={styles.btn + " btn btn-secondary float-end"}
      >
        <FontAwesomeIcon icon={faPencil} />
        Edit Profile
      </NavLink>
    </div>
  );
};
