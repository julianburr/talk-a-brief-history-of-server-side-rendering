/* eslint-disable react/jsx-key */
import { UserExperienceAnimation } from "~/components/animations/UserExperienceAnimation";

const serverComponentsUserExperience = [
  <UserExperienceAnimation
    browserName="Chrome"
    target="client"
    label="Compliments SSR"
  />,
  <UserExperienceAnimation
    browserName="Chrome"
    target="client"
    label="Request page"
  />,
  <UserExperienceAnimation
    browserName="Chrome"
    target="database"
    clientState="empty"
    label="Server generates page html"
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
    label="Hydrate page, excluding (!) any server components"
  />,

  // Navigate
  <UserExperienceAnimation
    browserName="Chrome"
    target="client"
    clientState="loaded"
    label="Navigate or state change"
  />,
  <UserExperienceAnimation
    browserName="Chrome"
    target="server"
    clientState="loaded"
    label="Request changed server components"
    loading
  />,
  <UserExperienceAnimation
    browserName="Chrome"
    target="client"
    clientState="loaded"
    responseTypes={["json"]}
    label="Returns rendered components in a React specific JSON format"
    loading
  />,
  <UserExperienceAnimation
    browserName="Chrome"
    target="client"
    clientState="loaded"
    label="Update changed elements without loosing state"
    updated
  />,
];

export { serverComponentsUserExperience };
