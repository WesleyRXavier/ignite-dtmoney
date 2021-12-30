import Modal from 'react-modal';
import { NewTransactionModalContainer } from './styles';
import { TransactionTypeContainer, RadioBox } from './styles';
import closeImg from '../../assets/close.svg';
import icomeImg from '../../assets/income.svg';
import outImg from '../../assets/outcome.svg';
import { FormEvent, useState, useContext } from 'react';
import { api } from '../../services/api';
import { TransactionsContext } from '../../TransactionsContext';

interface NewTrasactionModalProps {

    isOpen: boolean,
    onRequestClose: () => void;


}
export function NewTransactionModal({ isOpen, onRequestClose }: NewTrasactionModalProps) {

    const [title, setTitle] = useState('');
    const [amount, setValue] = useState(0);
    const [category, setCategory] = useState('');

    const [type, setType] = useState('deposit');

    const {createTransaction} = useContext(TransactionsContext);

    function handleCreateNewTransacion(event: FormEvent) {
        event.preventDefault();
        createTransaction({
            title,
            amount,
            category,
            type
        })
       
    }


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className="react-modal-content">
            <button type="button">
                <img src={closeImg}
                    alt='Fechar Modal'
                    onClick={onRequestClose}
                    className='react-modal-close' />
            </button>
            <NewTransactionModalContainer onSubmit={handleCreateNewTransacion}>

                <h2>Cadastrar transação</h2>

                <input placeholder="Titulo"
                    value={title}
                    onChange={event => setTitle(event.target.value)} />

                <input type='number'
                    placeholder="Valor"
                    value={amount}
                    onChange={event => setValue(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox type="button" onClick={() => { setType('deposit'); }}
                        isActive={type === 'deposit'}
                        activeColor='green'
                    >
                        <img src={icomeImg} alt='Entrada' />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox type="button" onClick={() => { setType('withdraw'); }}
                        isActive={type === 'withdraw'}
                        activeColor='red'>
                        <img src={outImg} alt='Saida' />
                        <span>Saida</span>
                    </RadioBox>

                </TransactionTypeContainer>



                <input placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)} />

                <button type="submit">Cadastrar</button>




            </NewTransactionModalContainer>

        </Modal >
    )
}
