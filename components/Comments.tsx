import * as React from "react";
import { Box, Spinner, Stack, Center } from "@chakra-ui/react";
import useDBForum from "../hooks/useDBForum";
import Comment from "./Comment";

interface CommentsProps {
  topic: string;
}

const Comments: React.FunctionComponent<CommentsProps> = ({ topic }) => {
  const query = useDBForum({ topic });

  //return <Box as="pre">{JSON.stringify(query.data, null, 2)}</Box>;

  return (
    <Box>
      {query.isLoading && (
        <Center p={8}>
          <Spinner />
        </Center>
      )}
      <Stack spacing={4}>
        {query.data?.map((comment) => (
          <Box key={comment.id} bg="whiteAlpha.100" rounded="2xl" p={3}>
            <Comment key={comment.id} comment={comment} />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Comments;