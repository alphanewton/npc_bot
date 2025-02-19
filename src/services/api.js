// const domain_link = "https://assistants-api-six.vercel.app/";
const domain_link = "https://func-npc-bot-sc.azurewebsites.net/";
// const domain_link = "http://assistants-api-1.azurewebsites.net/";

export const createNewThread = async () => {
  try {
    let response = await fetch(`${domain_link}api/new`, {
      method: "POST",
    });
    return response.json();
  } catch (err) {
    console.log(err.message);
  }
};

export const fetchThread = async (threadId) => {
  try {
    let response = await fetch(`${domain_link}api/threads/${threadId}`);
    return response.json();
  } catch (err) {
    console.log(err.message);
  }
};

export const fetchRun = async (threadId, runId) => {
  try {
    let response = await fetch(
      `${domain_link}api/threads/${threadId}/runs/${runId}`
    );
    return response.json();
  } catch (err) {
    console.log(err.message);
  }
};

export const postMessage = async (threadId, message) => {
  try {
    let response = await fetch(`${domain_link}api/threads/${threadId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: message }),
    });
    return response.json();
  } catch (err) {
    console.log(err.message);
  }
};

export const postToolResponse = async (threadId, runId, toolResponses) => {
  try {
    let response = await fetch(
      `${domain_link}api/threads/${threadId}/runs/${runId}/tool`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(toolResponses),
      }
    );
    return response.json();
  } catch (err) {
    console.log(err.message);
  }
};

// Response to positive feedback store the QnA pair in pineconeDB
export const positiveFeedbackLoop = async (query, answer) => {
  try {
    let response = await fetch(`${domain_link}api/storeQnA`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: query, answer: answer }),
    });
    return response.json();
  } catch (err) {
    console.log(err.message);
  }
};

// Response to negative feedback to regenerate the answer
export const negativeFeedbackLoop = async (bad_answer, threadId) => {
  try {
    let response = await fetch(`${domain_link}api/regenerate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bad_answer: bad_answer, thread_id: threadId }),
    });
    return response.json();
  } catch (err) {
    console.log(err.message);
  }
};

//Fetch related QnA pairs from pineconeDB
export const fetchRelatedQnA = async (query) => {
  try {
    let response = await fetch(`${domain_link}api/getQnA`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: query }),
    });
    return response.json();
  } catch (err) {
    console.log(err.message);
  }
};
