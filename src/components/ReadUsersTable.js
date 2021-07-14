import React from 'react'

const ReadUsersTable = props => (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.users.length > 0 ? (
                props.users.map(user => (
                    <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>
                            <button
                                onClick={() => {
                                    props.updateRow(user)
                                }}
                            >
                                Update
                            </button>
                            <button
                                onClick={() => props.deleteUser(user._id)}
                            >Delete</button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td>No Users</td>
                </tr>
            )}
        </tbody>
    </table>
)

export default ReadUsersTable