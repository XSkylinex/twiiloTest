import React from "react";
import { FlexPlugin } from "@twilio/flex-plugin";

// react containers
import { TwilioSmsBox } from "./container/TwilioSmsBox";

// services
import { taskEventIncomeCall } from "./services/VoiceActivities";
import { smsActivitiesFinishCall } from "./services/SmsActivities";

const PLUGIN_NAME = "TwilioTestPlugin";

export default class TwilioTestPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   */
  async init(flex, manager) {
    const options = { sortOrder: -1 };
    flex.AgentDesktopView.Panel1.Content.add(
      <TwilioSmsBox key="test"/>,
      options
    );

    /**
     * taskEventIncomeCall function for the voice task (Listener)
     */
    taskEventIncomeCall(manager);

    // smsActivitiesFinishCall function for the sms task (Listener)
    smsActivitiesFinishCall(flex);
  }
}
