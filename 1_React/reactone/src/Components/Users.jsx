import React, { useEffect, useState } from 'react';
import Card from './Card';

const Users = () => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        const url = 'https://randomuser.me/api/?results=50';
        const getData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setUsers(data.results);
                console.log(users);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        getData();
    }, []);

    return (
        <div className='container'>
            <h1 className='text-center font-extrabold text-3xl underline underline-offset-4 mb-4'>Users</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-5 gap-y-7'>
                {users &&
                    users.map((user, index) => (
                        <Card key={index} name={`${user.name.title} ${user.name.first} ${user.name.last} `} img={user.picture.large} />
                    ))}
            </div>
        </div>
    );
};

export default Users;
