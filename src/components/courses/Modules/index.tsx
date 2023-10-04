import React, { FC, ReactNode } from "react";
import "./modules.scss";
import {
  IModule,
  IModuleItem,
  IModuleSection,
} from "../../../types/interfaces";
export interface IModulesProps {
  children: ReactNode;
  modules: IModule[];
}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGripVertical,
  faLink,
  faCheckCircle,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

export const Modules: FC<IModulesProps> = ({ children, modules }) => {
  return (
    <div className="modules">
      <div className="modules__header">
        <div className="modules__header__buttons float-end">
          <button className="btn btn-secondary">Collapse All</button>
          <button className="btn btn-secondary">View Progress</button>
          <button className="btn btn-secondary">Modules</button>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Publish All
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Publish
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Unpublish
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="modules__body">
        <ul className="list-group modules__list">
          {modules.map((module) => (
            <li className="list-group-item list-group-item-secondary">
              <div className="modules__list__item modules__body__header ">
                <div className="modules__item__leading">
                  <FontAwesomeIcon
                    icon={faGripVertical}
                    className="grip__icon"
                  />
                  <h6>{module.name}</h6>
                </div>
                <div className="modules__body__header__buttons">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="check__icon"
                  />
                  <FontAwesomeIcon
                    icon={faEllipsisVertical}
                    className="more__icon"
                  />
                </div>
              </div>
              <ul className="list-group">
                {module.sections.map((section) => (
                  <li className="list-group-item">
                    <div className="modules__body__section">
                      <div className="modules__body__section__header modules__list__item">
                        <div className="modules__item__leading">
                          <FontAwesomeIcon
                            icon={faGripVertical}
                            className="grip__icon"
                          />
                          <h6>{section.name}</h6>
                        </div>
                        <div
                          className={"modules__body__section__header__buttons"}
                        >
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="check__icon"
                          />
                          <FontAwesomeIcon
                            icon={faEllipsisVertical}
                            className="more__icon"
                          />
                        </div>
                      </div>
                      <ul className="list-group">
                        {section.items.map((item) => (
                          <li className="list-group-item">
                            <div className="modules__list__item">
                              <div className="modules__item__leading">
                                <FontAwesomeIcon
                                  icon={faGripVertical}
                                  className="grip__icon"
                                />
                                {item.type === "link" ? (
                                  <>
                                    <FontAwesomeIcon
                                      icon={faLink}
                                      className="link__icon"
                                    />
                                    <h6 className="modules__item__title link">
                                      {item.name}
                                    </h6>
                                  </>
                                ) : (
                                  <h6 className="modules__item__title ">
                                    {item.name}
                                  </h6>
                                )}
                              </div>
                              <div
                                className={
                                  "modules__body__section__item__header__buttons"
                                }
                              >
                                <FontAwesomeIcon
                                  icon={faCheckCircle}
                                  className="check__icon"
                                />
                                <FontAwesomeIcon
                                  icon={faEllipsisVertical}
                                  className="more__icon"
                                />
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
