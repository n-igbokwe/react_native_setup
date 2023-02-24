import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import axios, {AxiosResponse} from 'axios'

interface User {
    id : number;
    name: string;
    email : string;
}

const  GetRequest = () => {
    const [data, setData] = useState<User[]>([]);

    useEffect(() => {
        axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
        .then((response : AxiosResponse<User[]>) => {
            setData(response.data);
        })
        .catch((error : any) => {
            console.log(error)
        })
    }, [])



    return (
        <View>
            {data.map(user => (
                <Text key={user.id}>{user.name}</Text>
            ))}
        </View>
    )
}

export default GetRequest