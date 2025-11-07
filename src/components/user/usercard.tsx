import React from 'react';
import { Box, Heading, Text, Avatar, VStack } from '@chakra-ui/react';
import { User } from '@/components/types/user';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <Box
      p={6}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      textAlign="center"
      height="100%"
      w={"100%"}
    >
      <VStack spaceX={4} spaceY={4}>
          <Avatar.Root variant={"outline"}size={"xl"}>
            <Avatar.Fallback name={user.name} />
          </Avatar.Root>

        <Heading as="h3" size="md">
          {user.name}
        </Heading>
        <Text>@{user.username}</Text>
        <Text fontSize="sm">
          {user.email}
        </Text>
      </VStack>
    </Box>
  );
};

export default UserCard;