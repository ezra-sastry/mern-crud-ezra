import React, { useState, useEffect } from 'react'

const UpdateUsersForm = props => {
    const [user, setUser] = useState(props.currentUser)
    const handleInputChange = event => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }
    useEffect(() => {
        setUser(props.currentUser)
    }, [props])
    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                if (!user.name) return
                props.updateUser(user.id, user.name)
            }}
        >
            <input
                autoFocus
                autoComplete="off"
                placeholder="Update"
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputChange}
                pattern="^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$"
                title="Only characters are allowed!"
            />
            <button
                type="button"
                onClick={() => props.setUpdate(false)}
            >
                Cancel
            </button>
        </form>
    )
}

export default UpdateUsersForm