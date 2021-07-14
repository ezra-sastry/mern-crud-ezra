import React, { useState } from 'react'

const CreateUsersForm = (props) => {
    const initialFormState = { name: '' }
    const [user, setUser] = useState(initialFormState)
    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUser({...user, [name]: value})
    }
    const clear = () => {
        setUser(initialFormState)
    }

    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                if (!user.name) return
                props.createUser(user)
                clear()
            }}
        >
            <input
                autoFocus
                autoComplete="off"
                placeholder="Create"
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputChange}
                pattern="^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$"
                title="Only characters are allowed!"
            />
            {user.name &&
            <button
                type="button"
                onClick={clear}
            >
                Cancel
            </button>
        }   
        </form>
    )
}

export default CreateUsersForm