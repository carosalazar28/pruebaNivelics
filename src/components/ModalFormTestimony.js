import { useState } from 'react'; 

function ModalFormTestimony() {

  const [title, setTitle] = useState('');
  const [nameClient, setNameClient] = useState('');
  const [parragraph, setParragraph] = useState('');

  const handleSubmit = e => {
    e.preventDefault()
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
    <form onSubmit={handleSubmit}>
      <label
        htmlFor="title"
      >
        Por favor coloque un titulo a su testimonio
      </label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={handleChange}
      />
      <label
        htmlFor="parragraph"
      >
        Por favor coloque un titulo a su testimonio
      </label>
      <input
        type="text"
        id="parragraph"
        name="parragraph"
        value={parragraph}
        onChange={handleChange}
      />
      <label
        htmlFor="nameClient"
      >
        Por favor coloque un titulo a su testimonio
      </label>
      <input
        type="text"
        id="nameClient"
        name="nameClient"
        value={nameClient}
        onChange={handleChange}
      />
      <input
        type="submit"
        value="Crear un testimonio"
      />
    </form>
  )
};

export default ModalFormTestimony