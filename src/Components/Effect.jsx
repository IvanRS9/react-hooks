import React, { useEffect, useState } from 'react'

const Effect = () => {
    // Agregar un estado para almacenar los usuarios
    const [users, setUsers] = useState([]);

    // Funcion para obtener usuarios de JSONPlaceholder
    const getUsers = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await res.json();

        setUsers(users);
    }

    // getUsers();
    useEffect(() => {
        getUsers();
    }, []);
    // console.log(users);

    return <>
        <div>
            <h3>useEffect</h3>
            <hr />
            <button onClick={getUsers}>Get Users</button>


        </div>
    </>
}

export default Effect
