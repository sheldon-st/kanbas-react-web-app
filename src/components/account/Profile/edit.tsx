import React, { FC } from "react";
import styles from "./profile.module.scss";
import { ILink, IProfileProps } from "../../../data/profile";
import { profile } from "../../../data/profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
/** Form to edit the profile page */
export const EditProfile: FC = () => {
  const { name, pronouns, title, contact, bio, links } =
    profile as IProfileProps;
  return (
    <div className={styles.profile}>
      <div className={styles.profile__body}>
        <div className={styles.profile__avatar}>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <form className={styles.profile__form}>
          <div className={styles.profile__section}>
            <div className={styles.profile__field}>
              <label htmlFor="name" aria-required>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                defaultValue={name}
                required
              />
            </div>
            <div className={styles.profile__field}>
              <label htmlFor="pronouns">Pronouns</label>
              <select
                id="pronouns"
                name="pronouns"
                defaultValue={pronouns}
                className="form-select"
              >
                <option value="he/him">He/Him</option>
                <option value="she/her">She/Her</option>
                <option value="they/them">They/Them</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className={styles.profile__field}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                defaultValue={title}
                className="form-control"
              />
            </div>
          </div>
          <div className={styles.profile__field}>
            <h4>Contact</h4>
            <p>
              No registered services, you can add some on the{" "}
              <span>
                <NavLink to="/account/settings">settings </NavLink>
              </span>
              page.
            </p>
          </div>
          <div className={styles.profile__field} style={{ display: "block" }}>
            <h4>Biography</h4>
            <textarea
              id="bio"
              name="bio"
              defaultValue={bio}
              className="form-control"
              rows={6}
            />
          </div>
          <div className={styles.profile__field}>
            <h4>Links</h4>
            {links.map((link: ILink) => (
              <div className={styles.profile__link + " row"}>
                <div className={styles.profile__label + " col"}>
                  <label htmlFor="label">Title</label>
                  <input
                    type="text"
                    id="label"
                    name="label"
                    className="form-control"
                    defaultValue={link.name}
                  />
                </div>
                {/* / small arrow ('->) in between that points to the right but it
                shouldnt have margin or spaciong that effects other cols: */}
                {/* <div className={styles.profile__arrow} style={{ width: "2ch" }}>
                  <span style={{ whiteSpace: "nowrap" }}>{"->"}</span>
                </div> */}
                <div className={styles.profile__url + " col"}>
                  <label htmlFor="url">URL</label>
                  <input
                    type="text"
                    id="url"
                    name="url"
                    className="form-control"
                    defaultValue={link.url}
                  />
                </div>
              </div>
            ))}
            <button className="btn btn-secondary btn-sm">
              Add another link
            </button>
          </div>
          <hr />
          <div className={styles.profile__actions}>
            <NavLink
              to="/account/profile"
              className={styles.btn + " btn btn-secondary"}
            >
              Cancel
            </NavLink>
            <NavLink
              to="/account/profile"
              className={styles.btn + " btn btn-primary"}
            >
              Save
            </NavLink>
          </div>
        </form>
      </div>
      <NavLink
        to="/account/profile"
        className={styles.btn + " btn btn-secondary float-end"}
      >
        <FontAwesomeIcon icon={faPencil} />
        Cancel Editing
      </NavLink>
    </div>
  );
};
