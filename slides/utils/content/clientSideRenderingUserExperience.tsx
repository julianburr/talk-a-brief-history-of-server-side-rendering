/* eslint-disable react/jsx-key */
import { UserExperienceAnimation } from "~/components/animations/UserExperienceAnimation";

const clientSideRenderingUserExperience = [
  <UserExperienceAnimation browserName="Chrome" target="client" />,
  <UserExperienceAnimation
    browserName="Chrome"
    target="server"
    clientState="empty"
    label="Request page"
  />,
  <UserExperienceAnimation
    browserName="Chrome"
    target="client"
    clientState="empty"
    responseTypes={["html", "css", "js"]}
    label="Return html and Javascript"
  />,
  <UserExperienceAnimation
    browserName="Chrome"
    target="client"
    clientState="partial"
    label="Evaluate Javascript and render page"
    loading
  />,
  <UserExperienceAnimation
    browserName="Chrome"
    target="server"
    clientState="partial"
    label="Request any additional assets"
    loading
  />,
  <UserExperienceAnimation
    browserName="Chrome"
    target="client"
    clientState="partial"
    responseTypes={["jpg", "js", "js", "js"]}
    label="Return assets"
    loading
  />,
  <UserExperienceAnimation
    browserName="Chrome"
    target="server"
    clientState="partial"
    label="Evaluate new Javascript & request data"
    loading
  />,
  <UserExperienceAnimation
    browserName="Chrome"
    target="database"
    clientState="partial"
    label="Query from database"
    loading
  />,
  <UserExperienceAnimation
    browserName="Chrome"
    target="client"
    clientState="partial"
    responseTypes={["json"]}
    label="Return data"
    loading
  />,
  <UserExperienceAnimation
    browserName="Chrome"
    target="client"
    clientState="loaded"
    label="Render page"
  />,

  // Navigate
  <UserExperienceAnimation
    browserName="Chrome"
    target="client"
    clientState="loaded"
    label="Navigate"
  />,
  <UserExperienceAnimation
    browserName="Chrome"
    target="server"
    clientState="loaded"
    label="Request data"
    loading
  />,
  <UserExperienceAnimation
    browserName="Chrome"
    target="database"
    clientState="loaded"
    label="Query from database"
    loading
  />,
  <UserExperienceAnimation
    browserName="Chrome"
    target="client"
    clientState="loaded"
    responseTypes={["json"]}
    label="Return data"
    loading
  />,
  <UserExperienceAnimation
    browserName="Chrome"
    target="client"
    clientState="loaded"
    label="Update changed elements"
    updated
  />,
];

export { clientSideRenderingUserExperience };
