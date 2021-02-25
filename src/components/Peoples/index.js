import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import ReactModal from 'react-modal'

const items = [
    {
        id: '1',
        name: "Frank Ltarname",
        pp_src: require("../../assets/img/peoples/gaetan-houssin.jpg").default,
        job_position: "CEO",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley "
    },
    {
        id: '2',
        name: "Bob Shefley",
        pp_src: require("../../assets/img/peoples/nicolas-lebarreau.jpg").default,
        job_position: "UI/UX Designer",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley "
    },
    {
        id: '3',
        name: "Jason Stewars",
        pp_src: require("../../assets/img/peoples/jerome-mahuet.jpg").default,
        job_position: "full-stack Developer",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley "
    },
    {
        id: '4',
        name: "Sabrina Rachel",
        pp_src: require("../../assets/img/peoples/manuela-faveri.jpg").default,
        job_position: "Marketing",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley "
    },
    {
        id: '5',
        name: "Marissa Lawren",
        pp_src: require("../../assets/img/peoples/darlene-chabrat.jpg").default,
        job_position: "Customer support",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley "
    },
    {
        id: '6',
        name: "Roman Regad",
        pp_src: require("../../assets/img/peoples/romane-regad.jpg").default,
        job_position: "Jr UI/UX Designer",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley "
    },
    {
        id: '7',
        name: "Tania Ferreira",
        pp_src: require("../../assets/img/peoples/tania-ferreira.jpg").default,
        job_position: "Bussinecc Analyst",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley "
    },
]


function Peoples() {

    const showProfileModal = async (item) => {
        await setCurrentData({ openProfileModal: true, selectedPeople: item.id })
    }

    const showEditModal = async (item) => {
        await setCurrentData({ openEditModal: true, selectedPeople: item.id })
    }

    const showCreateModal = async () => {
        await setCurrentData({ openCreateModal: true })
    }




    const ModalDetails = () => {
        let item = items.filter(e => e.id == currentData.selectedPeople)
        let details = item[0]
        return (
            <div className="profile-modal">
                <img src={details.pp_src}></img>
                <div className="profile-modal--text">
                    <span>{details.name}</span>
                    <p id="job-pos">{details.job_position}</p>
                    <p>{details.description}</p>
                </div>
            </div>
        )
    }
    // const handleName = (e) => {
    //     setName(e.target.value)
    // }
    // const handlePosition = (e) => {
    //     setPosition(e.target.value)
    // }
    // const handleMessage = (e) => {
    //     setDescription(e.target.value)
    // }
    // const AddItem = () => {
    //     const newList = peoplesList.concat({ name,position,description });
    //     setPeoplesList(newList).window.location.reload();
    // }
    const EditModalDetails = () => {
        let item = items.filter(e => e.id == currentData.selectedPeople)
        let details = item[0]
        return (
            <div className="edite-modal-section">
                <form>
                    <h3>Edit people</h3>
                    <div className="edit-pp">
                        <img src={details.pp_src}></img>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="blue" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                            <path d="M14.9239 4.04412L19.8061 8.92622L7.44801 21.2843L2.56863 16.4022L14.9239 4.04412ZM23.5107 2.86667L21.3334 0.689423C20.492 -0.152008 19.1257 -0.152008 18.2814 0.689423L16.1958 2.77501L21.0779 7.65715L23.5107 5.22443C24.1633 4.57177 24.1633 3.51929 23.5107 2.86667ZM0.0137079 23.2644C-0.0751408 23.6642 0.285881 24.0225 0.685791 23.9253L6.12612 22.6062L1.24674 17.7241L0.0137079 23.2644Z" fill="blue" />
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <div className="edit-form">

                        <label>
                            Name
                        </label>
                        <input type="text"
                         value={details.name}></input>

                        <label>
                            Position
                        </label>
                        <input type="text" value={details.job_position}></input>

                        <label>
                            Description
                        </label>
                        <textarea placeholder={details.description}></textarea>

                    </div>
                    <button>save</button>
                    <button id="cancel-btn">Cancel</button>
                </form>
            </div>
        )

    }
    const CreateModalDetails = () => {
        return (
            <div className="add-modal-section">
                <form>
                    <h3>Add people</h3>
                    <div className="add-pp">
                        <img src={require('../../assets/icons/user.svg').default}></img>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="blue" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                            <path d="M14.9239 4.04412L19.8061 8.92622L7.44801 21.2843L2.56863 16.4022L14.9239 4.04412ZM23.5107 2.86667L21.3334 0.689423C20.492 -0.152008 19.1257 -0.152008 18.2814 0.689423L16.1958 2.77501L21.0779 7.65715L23.5107 5.22443C24.1633 4.57177 24.1633 3.51929 23.5107 2.86667ZM0.0137079 23.2644C-0.0751408 23.6642 0.285881 24.0225 0.685791 23.9253L6.12612 22.6062L1.24674 17.7241L0.0137079 23.2644Z" fill="blue" />
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <div className="edit-form">

                        <label>
                            Name
                        </label>
                        <input type="text"
                         placeholder="Type
                          name" name="name"
                           value={name}
                        //  onChange={(e) => handleName(e.target.value)}
                         ></input>

                        <label>
                            Position
                        </label>
                        <input type="text"
                         placeholder="Type job position" 
                        value={position} 
                        name="jobPosition"
                        //  onChange={(e) => handlePosition(e.target.value)}
                         ></input>

                        <label>
                            Description
                        </label>
                        <textarea 
                        placeholder="Type the description here ..."
                         value={description}
                        //   onChange={(e) => handleMessage(e.target.value)}
                          ></textarea>

                    </div>
                    <button
                    //  onClick={() => AddItem()}
                     >save</button>
                    <button id="cancel-btn">Cancel</button>
                </form>
            </div>
        )

    }


    const [currentData, setCurrentData] = useState({ selectedPeople: null, openProfileModal: false, openEditModal: false, openCreateModal: false })
    const [peoplesList, setPeoplesList] = useState(items)
    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [description, setDescription] = useState('')
    return (
        <div className="container">
            <div className="content-header">
                <div className="icon">
                    <img id="happy-face" src={require('../../assets/icons/happy-face.svg').default}>
                    </img>
                </div>
                <h2>Our important peoples is listed here.</h2>
                <div className="peoples-btns">
                    <button className="edit-people--btn">Edit</button>
                    <button className="add-people--btn" onClick={() => showCreateModal()}>Add</button>
                </div>
            </div>

            <div className="peoples-section">
                {!!items && items.length > 0 && items.map((item, index) => {
                    return (
                        <Card key={index}>
                            <button className="edit-icon" onClick={() => showEditModal(item)}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="blue" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0)">
                                        <path d="M14.9239 4.04412L19.8061 8.92622L7.44801 21.2843L2.56863 16.4022L14.9239 4.04412ZM23.5107 2.86667L21.3334 0.689423C20.492 -0.152008 19.1257 -0.152008 18.2814 0.689423L16.1958 2.77501L21.0779 7.65715L23.5107 5.22443C24.1633 4.57177 24.1633 3.51929 23.5107 2.86667ZM0.0137079 23.2644C-0.0751408 23.6642 0.285881 24.0225 0.685791 23.9253L6.12612 22.6062L1.24674 17.7241L0.0137079 23.2644Z" fill="blue" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                            <img src={item.pp_src}></img>
                            <button onClick={() => showProfileModal(item)}>{item.name}</button>
                            <p id="job-pos">{item.job_position}</p>
                        </Card>
                    )
                })}
            </div>
            <div className="profile-modal">
                {currentData.openProfileModal ?
                    <ReactModal isOpen={currentData.openProfileModal} onRequestClose={() => setCurrentData({ ...currentData, openProfileModal: false })} style={{
                        content: {
                            position: 'absolute',
                            width: '570px',
                            height: '170px',
                            margin: 'auto',
                            border: '1px solid #ccc',
                            background: '#fff',
                            WebkitOverflowScrolling: 'touch',
                            borderRadius: '20px',
                            outline: 'none',
                            padding: '0px',
                            transition: '1s',
                            border: 'none',
                            overflow: 'none'
                        }
                    }}>
                        <div className="profile-modal--details">
                            {ModalDetails()}
                        </div>
                    </ReactModal>
                    : currentData.openEditModal ? <ReactModal isOpen={currentData.openEditModal} onRequestClose={() => setCurrentData({ ...currentData, openEditModal: false })} style={{
                        content: {
                            position: 'absolute',
                            width: '500px',
                            height: '550px',
                            margin: 'auto',
                            border: '1px solid #ccc',
                            background: '#fff',
                            WebkitOverflowScrolling: 'touch',
                            borderRadius: '20px',
                            outline: 'none',
                            padding: '10px',
                            transition: '1s',
                            border: 'none',
                            overflow: 'auto'
                        }
                    }}>
                        {EditModalDetails()}
                    </ReactModal> : currentData.openCreateModal ? <ReactModal isOpen={currentData.openCreateModal} onRequestClose={() => setCurrentData({ ...currentData, openEditModal: false })} style={{
                        content: {
                            position: 'absolute',
                            width: '500px',
                            height: '550px',
                            margin: 'auto',
                            border: '1px solid #ccc',
                            background: '#fff',
                            WebkitOverflowScrolling: 'touch',
                            borderRadius: '20px',
                            outline: 'none',
                            padding: '10px',
                            transition: '1s',
                            border: 'none',
                            overflow: 'auto'
                        }
                    }}>
                        {CreateModalDetails()}
                    </ReactModal> : ''}
            </div>
        </div>
    )
}

export default Peoples