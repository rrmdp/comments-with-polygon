import * as React from "react";
import { Text, Heading, HStack, Stack } from "@chakra-ui/react";
import TimeAgo from "react-timeago";
import Avatar from "@davatar/react";
import Username from "./Username";
import {Comment} from "../hooks/useDBForumContract";


interface CommentProps {
  comment: Comment;
}

const Comment: React.FunctionComponent<CommentProps> = ({ comment }) => {
    return (
      <HStack spacing={3} alignItems="start">
        
        <Stack spacing={1} flex={1} bg="whiteAlpha.100" rounded="2xl" p={3}>
          <Heading color="whiteAlpha.900" fontSize="lg">
          <Username address={comment.creator_address} />
          </Heading>
          <Text color="whiteAlpha.800" fontSize="lg">
            {comment.message}
          </Text>
          <Text color="whiteAlpha.500" fontSize="md">
            <TimeAgo date={comment.created_at.toNumber() * 1000} />
          </Text>
        </Stack>
        <Avatar size={35} address={comment.creator_address} />
      </HStack>
    );
  };
  
  export default Comment;