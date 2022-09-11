/* eslint-disable react/jsx-key */
import { UserExperienceAnimation } from "~/components/animations/UserExperienceAnimation";

const ajaxUserExperience = [
  <UserExperienceAnimation browserName="Firefox" target="client" />,
  <UserExperienceAnimation
    browserName="Firefox"
    target="server"
    clientState="empty"
    label="Request page"
  />,
  <UserExperienceAnimation
    browserName="Firefox"
    target="database"
    clientState="empty"
    label="Server generates page html"
  />,
  <UserExperienceAnimation
    browserName="Firefox"
    target="client"
    clientState="empty"
    responseTypes={["html", "css", "jpg"]}
    label="Return assets"
  />,
  <UserExperienceAnimation
    browserName="Firefox"
    target="client"
    clientState="loaded"
    label="Render page"
  />,

  // User navigates
  <UserExperienceAnimation
    browserName="Firefox"
    target="server"
    clientState="loaded"
    label="User navigates which triggers JS request"
    loading
  />,
  <UserExperienceAnimation
    browserName="Firefox"
    target="database"
    clientState="loaded"
    label="Server generates html for specific section"
    loading
  />,
  <UserExperienceAnimation
    browserName="Firefox"
    target="client"
    clientState="loaded"
    responseTypes={["html"]}
    label="Return html for specific section"
    loading
  />,
  <UserExperienceAnimation
    browserName="Firefox"
    target="client"
    clientState="loaded"
    label="Replace html using Javascript"
    updated
  />,
];

export { ajaxUserExperience };
