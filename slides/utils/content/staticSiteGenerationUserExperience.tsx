/* eslint-disable react/jsx-key */
import { UserExperienceAnimation } from "~/components/animations/UserExperienceAnimation";

const staticSiteGenerationUserExperience = [
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
    label="Return html file"
  />,
  <UserExperienceAnimation
    browserName="Chrome"
    target="client"
    clientState="loaded"
    label="Render page"
    interactive={false}
  />,
  <UserExperienceAnimation
    browserName="Chrome"
    target="client"
    clientState="loaded"
    label="Hydrate state"
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
    label="Request chunks & pre-built data"
    loading
  />,
  <UserExperienceAnimation
    browserName="Chrome"
    target="client"
    clientState="loaded"
    responseTypes={["js", "json"]}
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

export { staticSiteGenerationUserExperience };
