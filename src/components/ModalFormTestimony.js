import { useState, useContext } from 'react'; 
import { TestimonyContext } from '../store/TestimonyContext';
import {
  ContainerModal,
  Form,
  LabelForm,
  InputForm,
  InputArea,
  ButtonClose,
} from './ModalStyles';

function ModalFormTestimony() {

  const [title, setTitle] = useState('');
  const [nameClient, setNameClient] = useState('');
  const [parragraph, setParragraph] = useState('');
  const [message, setMessage] = useState('');

  const modal = useContext(TestimonyContext);

  const handleSubmit = e => {
    e.preventDefault()
    modal.sendData({
      title,
      nameClient,
      parragraph,
    })
    setMessage('Ya puedes cerrar este modal y visualizar tu información')
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch(name) {
      case 'title':
        setTitle(value)
        break;
      case 'nameClient':
        setNameClient(value)
        break;
      case 'parragraph':
        setParragraph(value)
        break;
      default: break;
    }
  };

  return(
    <ContainerModal>
      <Form onSubmit={handleSubmit}>
        <ButtonClose
          onClick={modal.onCloseModal}
        >
          X
        </ButtonClose>
        <LabelForm
          htmlFor="title"
        >
          Por favor coloque un titulo a su testimonio
        </LabelForm>
        <InputForm
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <LabelForm
          htmlFor="parragraph"
        >
          Por favor coloque su testimonio
        </LabelForm>
        <InputArea
          type="text"
          id="parragraph"
          name="parragraph"
          value={parragraph}
          onChange={handleChange}
        />
        <label
          htmlFor="nameClient"
        >
          Por favor coloque su nombre
        </label>
        <InputForm
          type="text"
          id="nameClient"
          name="nameClient"
          rows="10" 
          cols="50"
          value={nameClient}
          onChange={handleChange}
        />
        <InputForm
          type="submit"
          value="Crear un testimonio"
        />
      <p>{message}</p>
      </Form>
    </ContainerModal>
  )
};

export default ModalFormTestimony