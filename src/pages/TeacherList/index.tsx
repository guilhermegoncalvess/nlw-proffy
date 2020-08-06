import React, { useState, FormEvent } from "react"
import api from "../../services/api"

import PageHeader from "../../components/PageHeader"
import TeacherItem, { Teacher } from "../../components/TeacherItem"
import Input from "../../components/Input"
import Select from "../../components/Select"

import "./styles.css"



const TeacherList = () => {

    const [teaches, setTeachers] = useState([]);
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers( e : FormEvent){
        e.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        })

        setTeachers(response.data);
    }

	return (
		<div id="page-teacher-list" className="container">
			<PageHeader title="Estes são os nossos proffys disponíveis.">
				<form id="search-teachers" onSubmit={searchTeachers}>
                    <Select 
                        name="subject" 
                        label="Matéria"
                        value={subject}
                        onChange={ e => { setSubject(e.target.value) }}
                        options={[
                            {value: 'Piano', label: 'Piano'},
                            {value: 'Teoria Musical', label: 'Teoria Musical'},
                            {value: 'Partitura', label: 'Partitura'},
                            {value: 'Violão', label: 'Violão'},
                            {value: 'Bateria', label: 'Bateria'},
                            {value: 'Cavaquinho', label: 'Cavaquinho'},
                            {value: 'Violino', label: 'Violino'},
                            {value: 'Contra-Baixo', label: 'Cavaquinho'}
                        ]}
                    />
					<Select 
                        name="week_day" 
                        label="Dia da Semana"
                        value={week_day}
                        onChange={ e => { setWeekDay(e.target.value) }}
                        options={[
                            {value: '0', label: 'Domingo'},
                            {value: '1', label: 'Segunda-Feira'},
                            {value: '2', label: 'Terça-Feira'},
                            {value: '3', label: 'Quarta-Feira'},
                            {value: '4', label: 'Quinta-Feira'},
                            {value: '5', label: 'Sexta-Feira'},
                            {value: '6', label: 'Sábado'},
                        ]}
                    />
                    <Input 
                        type="time" 
                        name="time" 
                        label="Hora"
                        value={time}
                        onChange={ e => { setTime(e.target.value) }}
                    />

                    <button type="submit">
                        Buscar
                    </button>
				</form>
			</PageHeader>

			<main>
                { teaches.map( (teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />
                })}
				
			</main>
		</div>
	)
}

export default TeacherList