/**
 * Do ajax
 *
 * @param textforanalyze
 * @param type of text
 * @returns {Promise<null|any>}
 */
const doAjax = async (textforanalyze, type) => {
  let data = {
    type: type,
    textforanalyze: textforanalyze
  }
  const response = await fetch('http://xxx.xx/xxx', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  try {
    return await response.json();
  } catch (error) {
    return null;
  }
}

export {
  doAjax
}
