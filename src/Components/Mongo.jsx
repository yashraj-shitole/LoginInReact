import React from 'react'
import axios from 'axios'
import {useEffect, useState } from 'react'

const Mongo = () => {
    const[users ,setUsers]=useState([])

    useEffect(() => {
    axios.get('http://localhost:3001/getUsers')
    .then(users=> setUsers(users.data))
    .catch(err=>console.log(err))
    }, [users])


  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>
                    Username
                </th>
                <th>
                    pass
                </th>
            </tr>
        </thead>
        <tbody>
            {

                users.map(user=>{
                   return ( <tr>
                        <td>
                            {user.username}
                        </td>
                        <td>
                            {user.password}
                        </td>
                    </tr>
                   )
                })

            }
        </tbody>
      </table>
    </div>
  )
}

export default Mongo
