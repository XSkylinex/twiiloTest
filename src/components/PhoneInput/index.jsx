import React from "react";

import { Input } from "@twilio-paste/core/input";
import { Label } from "@twilio-paste/core/label";
import { HelpText } from "@twilio-paste/core/help-text";
import { Box } from "@twilio-paste/core/Box";

export const PhoneInput = ({ onChange, inputValue, headerTitle }) => {
  const onChangeHandler = (event) => {
    const { name, value } = event?.target;
    const re = /^[0-9\b]+$/;

    if (value === "" || re.test(value)) {
      onChange((prevSms) => ({
        ...prevSms,
        [name]: value,
      }));
    }
  };
  return (
    <Box marginBottom="space40" width="100%">
      <Label htmlFor="to" required>
        {headerTitle}
      </Label>
      <Input
        aria-describedby="to_text"
        id="to"
        name="to"
        type="tel"
        value={inputValue?.to || ""}
        placeholder="Phone number"
        onChange={onChangeHandler}
        required
      />
      <HelpText id="foo_text">Please enter phone number</HelpText>
    </Box>
  );
};
