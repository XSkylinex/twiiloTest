import { Actions } from "@twilio/flex-ui";

export const taskEventIncomeCall = (manager) => {
  try {
    const { addListener } = manager?.events;

    /**
     * check if event exists and if function changes to avoid crashing the app
     * try catch for error handling for double checking the event in production
     */
    if (!addListener) {
      console.error("No listener provided.");
      return;
    }

    // can be used for dynamic tasks in the future
    // for better maintenance all in one place
    addListener("taskReceived", (task) => {
      const { channelType } = task;
      if (channelType === "voice") typeCall(task, "AcceptTask");
    });
  } catch (e) {
    console.error(e);
  }
};

// function for dynamic tasks
const typeCall = (task, operation) => {
  const { invokeAction } = Actions;

  /**
   * invokeAction checking if package changed for not crash all the app
   * task verification it exists
   * operation verification type of task
   */
  if (!invokeAction || !task || !operation) {
    console.error("No task or operation provided.");
    return;
  }
  // accept the task
  try {
    /**
     * try catch for error handling any issues with the task and print the error
     */
    invokeAction(operation, { task });
  } catch (e) {
    // log any errors
    console.error(e);
  }
};
