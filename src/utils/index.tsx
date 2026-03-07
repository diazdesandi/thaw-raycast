import { open, showHUD } from "@raycast/api";

export const openThawUrl = async (url: string, successMessage: string) => {
  try {
    await open(`thaw://${url}`);
    await showHUD(successMessage);
  } catch (error) {
    await showHUD(`Failed to open URL: ${error}`);
  }
};
