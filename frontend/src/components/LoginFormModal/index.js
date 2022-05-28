import { useState } from 'react'
import LoginForm from "./LoginForm";
import { Modal } from '../../context/Modal';


export default function LoginFormModal(){
  const [showModal, setShowModal] = useState(false)

  const onClose = () => {
    setShowModal(false)
  }

  return (
    <>
      <button onClick={()=>{setShowModal(true)}}>Log In</button>
      {showModal && (<Modal onClose={onClose}>
        <LoginForm />
      </Modal>)}
    </>
  )
}
