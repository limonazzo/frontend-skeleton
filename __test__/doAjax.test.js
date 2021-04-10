import {doAjax} from "../src/client/js/doAjax";

const requestdata = {
  "status": {
    "code": "0",
    "msg": "OK",
    "credits": "3",
    "remaining_credits": "20000"
  },
  "model": "general_en",
  "score_tag": "N",
  "agreement": "DISAGREEMENT",
  "subjectivity": "SUBJECTIVE",
  "confidence": "83",
  "irony": "NONIRONIC",
  "sentence_list": []
};

// mock
global.fetch = jest.fn(()=>
  Promise.resolve({
    json: () => Promise.resolve(JSON.stringify(requestdata)),
  })
);

it(":: doAjax ::", async ()=>{
  const response = await doAjax("Hello, I'm happy" ,'text');
  expect(response).toBe(JSON.stringify(requestdata));
  expect(fetch).toHaveBeenCalledTimes(1);
});


