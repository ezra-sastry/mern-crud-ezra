import { useState, useEffect } from 'react'
import CreateUsersForm from './components/CreateUsersForm'
import ReadUsersTable from './components/ReadUsersTable'
import UpdateUsersForm from './components/UpdateUsersForm'
import SearchUsersForm from './components/SearchUsersForm'
import Axios from 'axios'

const App = () => {
    const userData = []
    const [users, setUsers] = useState(userData)
    const [update, setUpdate] = useState(false)
    const initialFormState = { id: null, name: '' }
    const [currentUser, setCurrentUser] = useState(initialFormState)
    const [searchTerm, setSearchTerm] = useState('')
    const filteredUsers = []

    const createUser = (user) => {
        Axios.post("https://mern-crud-ezra.herokuapp.com/create", {
            name: user.name
        }).then(() => {
            Axios.get("https://mern-crud-ezra.herokuapp.com/read")
            .then((response) => {
                setUsers(response.data)
            })
            .catch(() => {
                console.log("Error")
            })
        }).catch(() => {
            console.log("User not created!")
        })
    }

    useEffect(() => {
        Axios.get("https://mern-crud-ezra.herokuapp.com/read")
        .then((response) => {
            setUsers(response.data)
        })
        .catch(() => {
            console.log("Error")
        })
    }, [])

    const updateRow = user => {
        setUpdate(true)
        setCurrentUser({ id: user._id, name: user.name })
    }
    const updateUser = (id, updatedUser) => {
        Axios.put("https://mern-crud-ezra.herokuapp.com/update", {updatedUser: updatedUser, id: id})
        .then(() => {
            setUpdate(false)
            Axios.get("https://mern-crud-ezra.herokuapp.com/read")
            .then((response) => {
                setUsers(response.data)
            })
            .catch(() => {
                console.log("Error")
            })
        })
    }

    const deleteUser = id => {
        Axios.delete(`https://mern-crud-ezra.herokuapp.com/delete/${id}`)
        .then(() => {
            setUpdate(false)
            setUsers(users.filter(user => user._id !== id))
        })
    }

    users.filter(val => {
        if (searchTerm === '') {
            return val
        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val
        }
        return false
    }).map(val => {
        return filteredUsers.push(val)
    })

    return (
        <div>
            {update ? (
                <UpdateUsersForm setUpdate={setUpdate} currentUser={currentUser} updateUser={updateUser} />
            ) : (
                <CreateUsersForm createUser={createUser} />
            )}
            <SearchUsersForm setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
            <ReadUsersTable users={filteredUsers} updateRow={updateRow} deleteUser={deleteUser} />
        </div>
    )
}

export default App