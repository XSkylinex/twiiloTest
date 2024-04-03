import React from "react";
import { TextArea } from "@twilio-paste/core/textarea";
import { Label } from "@twilio-paste/core/label";
import { HelpText } from "@twilio-paste/core/help-text";

export const TextInput = ({ titleHeader, onChange, inputValue }) => {
  const handleInput = (event) => {
    const { name, value } = event?.target;
    onChange((prevSms) => ({
      ...prevSms,
      [name]: value,
    }));
  };

  return (
    <>
      <Label htmlFor="message" required>
        {titleHeader}
      </Label>
      <TextArea
        onChange={handleInput}
        aria-describedby="sms_text"
        id="sms_message"
        name="message"
        maxLength="300"
        value={inputValue?.message || ""}
        placeholder="
        Please enter the message you want to send to the customer
        "
        required
      />
      <HelpText id="message_text">
        Limit of 300 characters, {inputValue?.message?.length || 0} characters used
      </HelpText>
    </>
  );
};
