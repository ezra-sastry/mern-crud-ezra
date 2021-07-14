const SearchUsersForm = props => {

    const clear = () => {
        props.setSearchTerm('')
    }
    
    return (
        <form
            onSubmit={
                event => {
                    event.preventDefault()
                }
            }
        >
            <input
                autoComplete="off"
                placeholder="Search"
                type="text"
                name="search"
                value={props.searchTerm}
                onChange={event => {
                    props.setSearchTerm(event.target.value)
                }
            }
            />
            {props.searchTerm &&
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

export default SearchUsersForm





































// import React, { useState } from 'react'

// const SearchUsersForm = ({data}) => {
//     const [filteredData, setFilteredData] = useState([])
//     const [wordEntered, setWordEntered] = useState("")

//     const handleInputChange = event => {
//         const searchWord = event.target.value
//         setWordEntered(searchWord)
//         const newFilter = data.filter(value => {
//             value.name.toLowerCase().includes(searchWord.toLowerCase())
//         })
//         if (searchWord === "") {
//             setFilteredData([])
//         } else {
//             setFilteredData(newFilter)
//         }
//     }

//     const clearInput = () => {
//         setFilteredData([])
//         setWordEntered("")
//     }

//     return (
//         <div>
//             <form
//                 onSubmit={event => {
//                     event.preventDefault()
//                 }}
//             >
//                 <label>Search </label>
//                 <input
//                     autoComplete="off"
//                     type="text"
//                     value={wordEntered}
//                     onChange={handleInputChange}
//                 />
//                 <button
//                     onClick={clearInput}
//                 >Cancel</button>
//             </form>
//             {filteredData.length !== 0 && (
//                 <div>
//                     {data.map((value, key) => {
//                         {value.title}
//                     })}
//                 </div>
//             )}
//         </div>
//     )
// }

// export default SearchUsersForm