import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import axios, { AxiosResponse } from 'axios';
interface NewUser {
  title: string;
  body: string;
}
const PostRequest = () => {
  const [data, setData] = useState<NewUser>({ title: 'test1', body: 'test2' });
  useEffect(() => {
    const sendRequest = async (): Promise<void> => {
      try {
        const response = await axios.post(
          'https://jsonplaceholder.typicode.com/posts',
          data
        );
        console.log(response.status);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    sendRequest();
  }, [data]);

  return (
    <View>
      <Text>Post Request Example</Text>
      <Button title="Send Request" onPress={() => setData({ title: 'test3', body: 'test4' })} />
    </View>
  );
};
export default PostRequest;