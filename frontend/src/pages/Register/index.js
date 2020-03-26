import React, {useState} from 'react';

import { Link , useHistory} from 'react-router-dom';

import {FiArrowLeft} from 'react-icons/fi';

// importação do serviço para conexão com o backend
import api from '../../services/api';

import './styles.css';

// importa uma imagem
import logoImg from '../../assets/logo.svg';

export default function Register(){
    // busca os estados do formulario
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [UF, setUf] = useState('');


    const history = useHistory();


    // função responsável pelo cadastro
    async function handleRegister(e){
        // previne o evento padrão do submit do formulario.
        e.preventDefault();

        // monta um json.
        const data = ({
            name,
            email,
            whatsapp,
            city,
            UF
        });

        try{
            const response = await api.post('ongs', data);

            alert(`Seu ID de acesso: ${response.data.id}` );

            history.push('/');
        } catch (err){
            alert('Erro no cadastro, tente novamente');
            console.log(err);
        }
        
                
    }
    

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastro</h1>

                    <p>
                        Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.
                    </p>

                    <Link className='back-link' to="/">
                       <FiArrowLeft size={16} color="#E02041" />
                       Não tenho cadastro
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                        value={name}
                        onChange={e=>setName(e.target.value)}
                        placeholder="Nome da ONG"/>
                    <input type="email" 
                     value={email}
                     onChange={e=>setEmail(e.target.value)}
                    placeholder="E-mail"/>
                    <input 
                        value={whatsapp}
                        onChange={e=>setWhatsapp(e.target.value)}
                        placeholder="WhatsApp"/>
                    <div className="input-group">
                        <input 
                             value={city}
                             onChange={e=>setCity(e.target.value)}
                            placeholder="Cidade"/>
                        <input 
                            value={UF}
                            onChange={e=>setUf(e.target.value)}
                            placeholder="UF" style={{width : 80}} />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}