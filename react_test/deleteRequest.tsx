import React, { useEffect } from 'react';
import axios from 'axios';
import { Button, View } from 'react-native';
const DeleteRequest = () => {
  useEffect(() => {
    axios.delete('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        console.log('Delete successful', response.data);
        console.log(response.status)
      })
      .catch(error => {
        console.error('Delete failed', error);
      });
  }, []);
  const handleDelete = () => {
    // Any additional code to handle user interaction can go here
  };
  return (
    <View>
      <Button title="Delete Data" onPress={handleDelete} />
    </View>
  );
};
export default DeleteRequest;