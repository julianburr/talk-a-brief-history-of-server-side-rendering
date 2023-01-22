/* eslint-disable react/jsx-key */
import { UserExperienceAnimation } from "~/components/animations/UserExperienceAnimation";

const dynamicHtmlUserExperience = [
  <UserExperienceAnimation browserName="Internet Explorer" target="client" />,
  <UserExperienceAnimation
    browserName="Internet Explorer"
    target="server"
    clientState="empty"
    label="Request page"
  />,
  <UserExperienceAnimation
    browserName="Internet Explorer"
    target="database"
    clientState="empty"
    label="Server generates page html"
  />,
  <UserExperienceAnimation
    browserName="Internet Explorer"
    target="client"
    clientState="empty"
    responseTypes={["html", "css", "jpg"]}
    label="Return html & styles"
  />,
  <UserExperienceAnimation
    browserName="Internet Explorer"
    target="client"
    clientState="loaded"
    label="Render page"
  />,

  // User navigates
  <UserExperienceAnimation
    browserName="Internet Explorer"
    target="server"
    clientState="empty"
    label="User navigates"
  />,
  <UserExperienceAnimation
    browserName="Internet Explorer"
    target="database"
    clientState="empty"
    label="Server generates page html"
  />,
  <UserExperienceAnimation
    browserName="Internet Explorer"
    target="database"
    clientState="empty"
    label="Server generates page html"
    sleeping
  />,
  <UserExperienceAnimation
    browserName="Internet Explorer"
    target="client"
    clientState="empty"
    responseTypes={["html", "css", "jpg"]}
    label="Return assets"
    sleeping
  />,
  <UserExperienceAnimation
    browserName="Internet Explorer"
    target="client"
    clientState="loaded"
    label="Render page"
    sleeping
  />,
];

export { dynamicHtmlUserExperience };
