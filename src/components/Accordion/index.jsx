import React from "react";
import {
  Disclosure,
  DisclosureHeading,
  DisclosureContent,
} from "@twilio-paste/core/disclosure";


export const Accordion = ({ title, children }) => {
  return (
    <Disclosure>
      <DisclosureHeading as="h2" variant="heading20">
        {title}
      </DisclosureHeading>
      <DisclosureContent>{children}</DisclosureContent>
    </Disclosure>
  );
};
