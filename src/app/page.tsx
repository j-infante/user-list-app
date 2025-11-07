'use client'
import React, { useState, useEffect } from 'react';
import {
  Container,
  Heading,
  Center,
  Spinner,
  Input,
  Flex,
  Box
} from '@chakra-ui/react';
import UserList from '@/components/user/userlist';
import { User } from '@/components/types/user';
import ErrorAlert from '@/components/ui/alert';
import { ThemeToggle } from '@/components/theme/ThemeToggle'

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const filtered = users.filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  return (
    <Container maxW="container.xl" py={10}>
      <Flex justify="space-between" align="center" mb={8}>
        <Heading as="h1" size="xl">
          User List
        </Heading>
        <Flex gap={4} align="center">
          <ThemeToggle />
          <Box w="300px">
            <Input
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Box>
        </Flex>
      </Flex>
      
      {loading && (
        <Center>
          <Spinner />
        </Center>
      )}
      {error && <ErrorAlert error={error} />}
      {!loading && !error && <UserList users={filteredUsers} />}
    </Container>
  );
};

export default App;