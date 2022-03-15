import { useMutation } from "react-query";
import useDBForumContract from "./useDBForumContract";

interface UseAddCommentPayload {
  topic: string;
  message: string;
}

const useAddComment = () => {
  const contract = useDBForumContract();

  return useMutation(async ({ topic, message }: UseAddCommentPayload) => {
    await contract.addComment(topic, message);
  });
};

export default useAddComment;