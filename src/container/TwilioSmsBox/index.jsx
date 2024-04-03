import React, { useState } from "react";
import { Theme } from "@twilio-paste/theme";
import { Button } from "@twilio-paste/core/button";
import { Flex } from "@twilio-paste/core/flex";
import { Box } from "@twilio-paste/core/Box";

// react components
import { Accordion } from "../../components/Accordion";
import { TextInput } from "../../components/TextInput";
import { PhoneInput } from "../../components/PhoneInput";

// services
import { smsService } from "../../services/SmsActivities";

export const TwilioSmsBox = () => {
  const [sendStatus, setSendStatus] = useState(false);
  const [sms, setSms] = useState({
    to: "",
    message: "",
  });

  const sendSms = async () => {
    await smsService(sms);
    setSendStatus(true);
    setTimeout(() => {
      setSendStatus(false);
    }, 5000);

    clearSms();
  };

  const clearSms = () => {
    setSms({
      to: "",
      message: "",
    });
  };

  return (
    <Theme.Provider>
      <Accordion title="Send SMS Messages">
        <Flex vertical>
          <PhoneInput
            onChange={setSms}
            inputValue={sms}
            headerTitle="Send to"
          />
          <TextInput titleHeader="Message" inputValue={sms} onChange={setSms} />
          <Box display="flex" marginTop="space40">
            <Button disabled={!sms?.message || !sms.to} onClick={sendSms}>
              Send
            </Button>
            <Box marginLeft="space40">
              <Button onClick={clearSms} variant="destructive">
                Clear
              </Button>
            </Box>
          </Box>
        </Flex>
        {sendStatus && <Box> Message send</Box>}
      </Accordion>
    </Theme.Provider>
  );
};
