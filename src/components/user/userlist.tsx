import React from 'react';
import { Box, Link, SimpleGrid } from '@chakra-ui/react';
import UserCard from './usercard';
import { User } from '@/components/types/user';

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3 }}
      spaceX={4}
      spaceY={4}
    >
      {users.map((user) => (
        <Link href={`/user/${user.id}`} key={user.id} style={{ textDecoration: 'none' }}>
          <Box w={"100%"} cursor={'pointer'}>
            <UserCard key={user.id} user={user} />
          </Box>
        </Link>
      ))}
    </SimpleGrid>
  );
};

export default UserList;