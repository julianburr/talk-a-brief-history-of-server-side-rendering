/* eslint-disable react/jsx-key */
import { UserExperienceAnimation } from "~/components/animations/UserExperienceAnimation";

const staticHtmlUserExperience = [
  <UserExperienceAnimation browserName="Internet Explorer" target="client" />,
  <UserExperienceAnimation
    browserName="Internet Explorer"
    target="server"
    clientState="empty"
    label="Request page"
  />,
  <UserExperienceAnimation
    browserName="Internet Explorer"
    target="client"
    clientState="empty"
    responseTypes={["html", "css", "jpg"]}
    label="Return html & assets"
  />,
  <UserExperienceAnimation
    browserName="Internet Explorer"
    target="client"
    clientState="loaded"
    label="Render page"
  />,
];

export { staticHtmlUserExperience };
