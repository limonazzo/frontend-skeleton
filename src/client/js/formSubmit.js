import {doAjax} from "./doAjax";

/**
 * Functionality of Submint button
 *
 * @param event
 * @returns {Promise<void>}
 */
const formSubmit = async (event) => {
  // prevent form submit
  event.preventDefault();
  let input_name = document.getElementById('name');
  let response = await doAjax(input_name);
}

export {formSubmit}
