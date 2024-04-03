import { postMethod } from "../http/axios";

export const smsActivitiesFinishCall = async (flex) => {
  const { addListener } = flex?.Actions;

  /**
   * Check if an event exists and if the function changes to avoid crashing the app
   */
  if (!addListener) {
    console.error("No listener provided.");
    return;
  }

  try {
    /**
     * addListener for the afterHangupCall that will be used when the call is finished in flex interface
     * and send to thank you message to customer
     */
    addListener("afterHangupCall", async (payload) => {
      const { from, to } = payload?.task?.attributes;
      if (!from || !to) return;
      if (from && to) postMethod("/finishcall", { from, to });
    });
  } catch (e) {
    console.error(e);
  }
};

export const smsService = async (body) => {
  try {
    const response = await postMethod("/message", body);
    return response;
  } catch (e) {
    console.error(e);
    return;
  }
};
