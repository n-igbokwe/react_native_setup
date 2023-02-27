import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextInput, View } from 'react-native';
interface UpdateData {
  title: string;
  body: string;
}
const PatchRequest = () => {
  const [updatedData, setUpdatedData] = useState<UpdateData>({ title: 'test', body: 'test' });
  useEffect(() => {
    axios.patch<UpdateData>('https://jsonplaceholder.typicode.com/posts/1', updatedData)
      .then(response => {
        console.log('Update successful', response.data);
        console.log(response.status)
      })
      .catch(error => {
        console.error('Update failed', error);
      });
  }, [updatedData]);
  const handleUpdateData = () => {
    setUpdatedData({ title: 'John Doe', body: 'ahhhhhhhh' });
  };
  return (
    <View>
      <Button title="Update Data" onPress={handleUpdateData} />
    </View>
  );
};
export default PatchRequest;
