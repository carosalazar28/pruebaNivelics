import { createContext, useState, } from 'react';

export const TestimonyContext = createContext();

export function TestimonyProvider({ children }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [data, setData] = useState(null);

  const sendData = (data) => {
    setData(data)
  };

  const onCloseModal = () => {
    setModalIsOpen(false)
  };

  const onOpenModal = () => {
    setModalIsOpen(true)
  }

  return (
    <TestimonyContext.Provider
      value={{
        modalIsOpen,
        data,
        onCloseModal,
        onOpenModal,
        sendData,
      }}
    >
      {children}
    </TestimonyContext.Provider>
  )
};