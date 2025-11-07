'use client'
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import {
  Container,
  Heading,
  Box,
  Text,
  VStack,
  Spinner,
  Button,
  Stack,
  HStack,
  SkeletonText,
  Skeleton,
} from '@chakra-ui/react';
import { User } from '@/components/types/user';
import ErrorAlert from '@/components/ui/alert';
import Link from 'next/link';

const UserDetail: React.FC = () => {
  const params = useParams();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [params.id]);


  if (loading) {
    return (
      <Container maxW="container.md" py={10}>
        <Link href="/">
          <Button mb={4}>Back to List</Button>
        </Link>
        <Stack gap="6" maxW="xs" mb={8}>
          <SkeletonText noOfLines={1} />
        </Stack>
        <Box p={4} borderWidth={1} borderRadius="lg">
          <Stack gap="6" maxW="xs">
            <SkeletonText noOfLines={6} />
          </Stack>
        </Box>
      </Container>
    );
  }

  if (error) {
    return <ErrorAlert error={error} />;
  }

  return (
    <Container maxW="container.md" py={10}>
      <Link href="/">
        <Button mb={4}>Back to List</Button>
      </Link>


      {user && (
        <VStack spaceX={4} spaceY={4} align="stretch">
          <Heading size="lg">{user.name}</Heading>
          <Box p={4} borderWidth={1} borderRadius="lg">
            <Text><strong>Username:</strong> {user.username}</Text>
            <Text><strong>Email:</strong> {user.email}</Text>
            <Text><strong>Phone:</strong> {user.phone}</Text>
            <Text><strong>Website:</strong> {user.website}</Text>
            <Text><strong>Company:</strong> {user.company.name}</Text>
            <Text><strong>Address:</strong> 
              {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
            </Text>
          </Box>
        </VStack>
      )}
    </Container>
  );
};

export default UserDetail;