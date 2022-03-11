import { useQuery } from "react-query";
import useDBForumContract from "./useDBForumContract";

interface UseDBForumQuery {
  topic: string;
}

const useDBForum = ({ topic }: UseDBForumQuery) => {
  const contract = useDBForumContract();
  return useQuery(["comments", { topic, chainId: contract.chainId }], () =>
    contract.getComments(topic)
  );
};

export default useDBForum;