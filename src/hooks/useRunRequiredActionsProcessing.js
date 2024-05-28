import { useEffect } from "react";
import { postToolResponse, fetchRelatedQnA } from "../services/api";

export const useRunRequiredActionsProcessing = (
  run,
  setRun,
  setActionMessages
) => {
  useEffect(() => {
    if (run?.status === "requires_action") {
      const processActions = async () => {
        let response = [];
        let actionMessages = [];

        for (const tool_call of run.required_action.submit_tool_outputs
          .tool_calls) {
          if (tool_call.function.name === "fetch_related_qna") {
            const query = JSON.parse(tool_call.function.arguments).query;
            try {
              const answerResponse = await fetchRelatedQnA(query);
              const answer = answerResponse;

              response.push({
                tool_call_id: tool_call.id,
                output: JSON.stringify({ answer }),
              });

              console.log("Function call used!");
            } catch (error) {
              console.error("Error fetching QnA:", error);
            }
          }
        }

        setActionMessages(actionMessages);
        postToolResponse(run.thread_id, run.run_id, response).then(setRun);
      };

      processActions();
    }
  }, [run, setRun, setActionMessages]);
};
