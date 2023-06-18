import { pink } from "@mui/material/colors";
import Breadcrumb from "../../components/Breadcrumb";
import DefaultLayout from "../../layout/DefaultLayout";
import FormElements from "../Form/FormElements";
import React, { useState, useEffect } from "react";
import departamentos_ciudades from "../../js/departamentos_ciudades.json";




const CreateReception = () => {
    const pageName = "Nueva Recepción";
    const newReception = "+ Nueva Recepción";
    const [activeTab, setActiveTab] = useState('patient');
    const [documentType, setDocumentType] = useState('');
    const [documentTypeDropdown, setDocumentTypeDropdown] = useState('inactive');
    const [sex, setSex] = useState('');
    const [sexDropdown, setSexDropdown] = useState('inactive');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [maritalStatusDropdown, setMaritalStatusDropdown] = useState('inactive');
    const [bloodGroup, setBloodGroup] = useState('');
    const [bloodGroupDropdown, setBloodGroupDropdown] = useState('inactive');

    const [selectedDepartment, setSelectedDepartment] = useState('');
    // const dpt_ciud = JSON.stringify(departamentos_ciudades);
    // console.log(dpt_ciud);

    const [selectedCity, setSelectedCity] = useState('');
    const [cities, setCities] = useState<string[]>([]);

    const [estrato, setEstrato] = useState('');
    const [estratoDropdown, setEstratoDropdown] = useState('inactive');

    const [zona, setZona] = useState('');
    const [zonaDropdown, setZonaDropdown] = useState('inactive');

    const [escolaridad, setEscolaridad] = useState('');
    const [escolaridadDropdown, setEscolaridadDropdown] = useState(false);

    const escolaridadOptions = [
        'Analfabeta', 'Primaria', 'Secundaria', 'Secundaria incompleta',
        'Técnico', 'Tecnólogo', 'Pregrado', 'Especialista', 'Maestría', 'Doctorado'
    ];

    // update city dropdown whenever the department changes
    useEffect(() => {
        const department = departamentos_ciudades.find(dept => dept.departamento === selectedDepartment);
        if (department) {
            setCities(department.ciudades);
        } else {
            setCities([]);
        }
    }, [selectedDepartment]);


    return (
        <DefaultLayout pageName={pageName}>
            <Breadcrumb pageName={pageName} />

            <div className="flex flex-col justify-center ">
                <div className="border-gray-200 dark:border-gray-700 pb-3">
                    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                        <li className="mr-2">
                            <a onClick={() => setActiveTab('patient')} className={`inline-flex p-4 border-b-2 hover:text-graydark hover:border-graydark dark:hover:border-white dark:hover:text-white group rounded-t-lg ${activeTab === 'patient' ? 'text-graydark border-graydark dark:text-white dark:border-white' : 'border-transparent '}`}
                                href="#"
                                aria-current={activeTab === 'patient' ? 'page' : undefined}
                            >
                                <svg aria-hidden="true" className="w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>Información del Paciente
                            </a>
                        </li>
                        <li className="mr-2">
                            <a onClick={() => setActiveTab('reception')}
                                href="#"
                                className={`inline-flex p-4 border-b-2 hover:text-graydark hover:border-graydark dark:hover:border-white dark:hover:text-white group rounded-t-lg ${activeTab === 'reception' ? 'text-graydark border-graydark dark:text-white dark:border-white' : 'border-transparent '}`}
                                aria-current={activeTab === 'reception' ? 'page' : undefined}
                            >
                                <svg aria-hidden="true" className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>Datos de la Recepción
                            </a>
                        </li>
                        <li className="mr-2">
                            <a onClick={() => setActiveTab('exams')}
                                href="#"
                                className={`inline-flex p-4 border-b-2 hover:text-graydark hover:border-graydark dark:hover:border-white dark:hover:text-white group rounded-t-lg ${activeTab === 'exams' ? 'text-graydark border-graydark dark:text-white dark:border-white' : 'border-transparent'}`}
                                aria-current={activeTab === 'exams' ? 'page' : undefined}
                            >
                                <svg aria-hidden="true" className="w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>Exámenes
                            </a>
                        </li>
                    </ul>
                </div>



                {activeTab === 'patient' && <div className="rounded-2xl border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                        <h3 className="font-medium text-black dark:text-white">
                            Información del Paciente
                        </h3>
                    </div>


                    <div className="flex flex-wrap pr-2 pl-5 pt-5">

                        {/* <!-- Información del Paciente Start --> */}
                        <fieldset className="border border-solid border-stroke border-opacity-60 dark:border-graydark rounded-lg p-3 mb-5">
                            <legend className="text-sm opacity-60 dark:text-gray dark:opacity-40">Información de Identificación</legend>
                            <div className="flex flex-wrap gap-5.5 pb-5 pl-2.5">
                                <div>
                                    <label className="mb-3 block text-black dark:text-white">
                                        Nombres
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Nombre Completo"
                                        className="w-100 rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>
                                <div className="">
                                    <label className="mb-3 block text-black dark:text-white">
                                        Apellidos
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Apellidos"
                                        className="w-100 rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>

                                <div className="linebreak w-full"></div>

                                <div className="h-21 ">
                                    <label className="mb-3 block text-black dark:text-white">
                                        Tipo de documento
                                    </label>
                                    <div className="h-13">
                                        <button onClick={() => documentTypeDropdown === 'inactive' ? setDocumentTypeDropdown('active') : setDocumentTypeDropdown('inactive')} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="border-solid border-[1.5px]  dark:border-form-strokedark border-stroke rounded-lg text-darkgray hover:bg-gray focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium px-5 py-3 h-12  text-sm text-center inline-flex items-center  dark:hover:bg-primary dark:focus:ring-blue-800" type="button">

                                            {
                                                documentType === '' ? 'Tipo de Documento' : documentType
                                            }

                                            <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                                        {/* <!-- Dropdown menu --> */}
                                        <div className="absolute">
                                            <div id="dropdown" className={` ${documentTypeDropdown === 'active' ? 'dark:bg-graydark  z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700' : 'hidden'}`}>
                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                                    <li>
                                                        <a href="#" onClick={() => { setDocumentTypeDropdown('inactive'); setDocumentType('Cédula'); }} className={`block px-4 py-2 hover:bg-stroke dark:hover:bg-primary dark:hover:text-white`}>Cédula</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" onClick={() => { setDocumentTypeDropdown('inactive'); setDocumentType('Cédula de Extranjería'); }} className="hover:bg-stroke block px-4 py-2  dark:hover:bg-primary dark:hover:text-white">Cédula de Extranjería</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" onClick={() => { setDocumentTypeDropdown('inactive'); setDocumentType('Pasaporte'); }} className="block px-4 py-2 hover:bg-stroke dark:hover:bg-primary dark:hover:text-white">Pasaporte</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" onClick={() => { setDocumentTypeDropdown('inactive'); setDocumentType('Permiso de Trabajo'); }} className="block px-4 py-2 hover:bg-stroke dark:hover:bg-primary dark:hover:text-white">Permiso de Trabajo</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" onClick={() => { setDocumentTypeDropdown('inactive'); setDocumentType('Otro'); }} className="block px-4 py-2 hover:bg-stroke dark:hover:bg-primary dark:hover:text-white">Otro</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="h-21">
                                    <label className="mb-3 block text-black dark:text-white">
                                        Documento
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Número de Documento"
                                        className="w-100  rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>

                                <div className="h-21">
                                    <label className="mb-3 block text-black dark:text-white">
                                        Género
                                    </label>
                                    <div className="h-13">
                                        <button onClick={() => sexDropdown === 'inactive' ? setSexDropdown('active') : setSexDropdown('inactive')} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="estraasdasdasdborder-solid border-[1.5px]  border-stroke dark:border-form-strokedark  rounded-lg text-darkgray hover:bg-gray focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium px-5 py-3 h-12  text-sm text-center inline-flex items-center  dark:hover:bg-primary dark:focus:ring-blue-800" type="button">

                                            {
                                                sex === '' ? 'No Identificado' : sex
                                            }

                                            <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                                        {/* <!-- Dropdown menu Genéro --> */}
                                        <div className="absolute">
                                            <div id="dropdown" className={` ${sexDropdown === 'active' ? 'dark:bg-graydark  z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700' : 'hidden'}`}>
                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                                    <li>
                                                        <a href="#" onClick={() => { setSexDropdown('inactive'); setSex('Masculino'); }} className={`block px-4 py-2 hover:bg-stroke dark:hover:bg-primary dark:hover:text-white`}>Masculino</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" onClick={() => { setSexDropdown('inactive'); setSex('Femenino'); }} className="hover:bg-stroke block px-4 py-2  dark:hover:bg-primary dark:hover:text-white">Femenino</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" onClick={() => { setSexDropdown('inactive'); setSex('No Identificado'); }} className="block px-4 py-2 hover:bg-stroke dark:hover:bg-primary dark:hover:text-white">No Identificado</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="linebreak w-full"></div>

                                <div>
                                    <label className="mb-3 block text-black dark:text-white">
                                        E-mail
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Correo Electrónico"
                                        className="w-100 rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>

                                <div>
                                    <label className="mb-3 block text-black dark:text-white">
                                        Teléfono
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Teléfono/Celular"
                                        className="w-100 rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>

                                <div className="linebreak w-full"></div>

                                <div>
                                    <label className="mb-3 block text-black dark:text-white">
                                        Fecha de Nacimiento
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="date"
                                            className="w-100 custom-input-date custom-input-date-1 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="mb-3 block text-black dark:text-white">
                                        Lugar de Nacimiento
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Ciudad de Nacimiento"
                                        className="w-100 rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>
                            </div>
                        </fieldset>

                        {/* <!-- Información del Paciente End --> */}

                        <hr className="w-full pb-4 text-stroke border-opacity-60 dark:border-graydark" />

                        {/* Origen y Residencia Start */}
                        <fieldset className="border border-solid border-stroke border-opacity-60 dark:border-graydark rounded-lg p-3 mb-5">
                            <legend className="text-sm opacity-60 dark:text-gray dark:opacity-40">Origen y Residencia</legend>
                            <div className="flex flex-wrap gap-5.5 pb-5 pl-2.5">
                                <div>
                                    <label className="mb-3 block text-black dark:text-white">
                                        Ocupación
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Ocupación"
                                        className="w-100 rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>

                                <div className="h-21">
                                    <label className="mb-3 block text-black dark:text-white">
                                        Escolaridad
                                    </label>
                                    <div className="h-13">
                                        <button
                                            onClick={() => setEscolaridadDropdown(prev => !prev)}
                                            id="dropdownEscolaridadButton"
                                            className="w-100 border-solid border-[1.5px]  border-stroke dark:border-form-strokedark rounded-lg text-darkgray hover:bg-gray focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium px-5 py-3 h-12 text-sm text-center inline-flex items-center dark:hover:bg-primary dark:focus:ring-blue-800"
                                            type="button"
                                        >
                                            {escolaridad === '' ? 'Escolaridad' : escolaridad}

                                            <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                            </svg>
                                        </button>
                                        {/* Dropdown menu Escolaridad */}
                                        <div className="absolute">
                                            <div id="dropdownEscolaridad" className={` ${escolaridadDropdown ? 'dark:bg-graydark z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700' : 'hidden'}`}>
                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownEscolaridadButton">
                                                    {escolaridadOptions.map((option, index) => (
                                                        <li key={index}>
                                                            <a
                                                                href="#"
                                                                onClick={() => { setEscolaridadDropdown(false); setEscolaridad(option); }}
                                                                className={`block px-4 py-2 hover:bg-stroke dark:hover:bg-primary dark:hover:text-white`}
                                                            >
                                                                {option}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="linebreak w-full"></div>

                                <div className="h-21 z-20">
                                    <label className="mb-3 block text-black dark:text-white">
                                        Estado Civil
                                    </label>
                                    <div className="h-13">
                                        <button onClick={() => maritalStatusDropdown === 'inactive' ? setMaritalStatusDropdown('active') : setMaritalStatusDropdown('inactive')} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="w-100 border-solid border-[1.5px]  border-stroke rounded-lg text-darkgray hover:bg-gray focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium px-5 py-3 h-12  text-sm text-center inline-flex items-center  dark:hover:bg-primary dark:focus:ring-blue-800 dark:border-form-strokedark dark:bg-form-input" type="button">

                                            {
                                                maritalStatus === '' ? 'Estado Civil' : maritalStatus
                                            }

                                            <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                                        {/* <!-- Dropdown menu --> */}
                                        <div className="absolute">
                                            <div id="dropdown" className={` ${maritalStatusDropdown === 'active' ? 'dark:bg-graydark  z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700' : 'hidden'}`}>
                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                                    <li>
                                                        <a href="#" onClick={() => { setMaritalStatusDropdown('inactive'); setMaritalStatus('Soltero/a'); }} className={`block px-4 py-2 hover:bg-stroke dark:hover:bg-primary dark:hover:text-white`}>Soltero/a</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" onClick={() => { setMaritalStatusDropdown('inactive'); setMaritalStatus('Casado/a'); }} className="hover:bg-stroke block px-4 py-2  dark:hover:bg-primary dark:hover:text-white">Casado/a</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" onClick={() => { setMaritalStatusDropdown('inactive'); setMaritalStatus('Divorciado/a'); }} className="block px-4 py-2 hover:bg-stroke dark:hover:bg-primary dark:hover:text-white">Divorciado/a</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" onClick={() => { setMaritalStatusDropdown('inactive'); setMaritalStatus('Unión Libre'); }} className="block px-4 py-2 hover:bg-stroke dark:hover:bg-primary dark:hover:text-white">Unión Libre</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" onClick={() => { setMaritalStatusDropdown('inactive'); setMaritalStatus('Viudo'); }} className="block px-4 py-2 hover:bg-stroke dark:hover:bg-primary dark:hover:text-white">Viudo</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="h-21">
                                    <label className="mb-3 block text-black dark:text-white">
                                        Grupo Sanguíneo
                                    </label>
                                    <div className="h-13">
                                        <button onClick={() => bloodGroupDropdown === 'inactive' ? setBloodGroupDropdown('active') : setBloodGroupDropdown('inactive')} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" dark:border-form-strokedark w-100 border-solid border-[1.5px]  border-stroke rounded-lg text-darkgray hover:bg-gray focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium px-5 py-3 h-12  text-sm text-center inline-flex items-center  dark:hover:bg-primary dark:focus:ring-blue-800 " type="button">

                                            {
                                                bloodGroup === '' ? 'Grupo Sanguíneo' : bloodGroup
                                            }

                                            <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                                        {/* <!-- Dropdown menu --> */}
                                        <div className="absolute">
                                            <div id="dropdown" className={` ${bloodGroupDropdown === 'active' ? 'dark:bg-graydark z-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700' : 'hidden'}`}>
                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 " aria-labelledby="dropdownDefaultButton">
                                                    <li>
                                                        <a href="#" onClick={() => { setBloodGroupDropdown('inactive'); setBloodGroup('A+'); }} className={`block px-4 py-2 hover:bg-stroke dark:hover:bg-primary dark:hover:text-white`}>A+</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" onClick={() => { setBloodGroupDropdown('inactive'); setBloodGroup('A-'); }} className="hover:bg-stroke block px-4 py-2  dark:hover:bg-primary dark:hover:text-white">A-</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" onClick={() => { setBloodGroupDropdown('inactive'); setBloodGroup('B+'); }} className="block px-4 py-2 hover:bg-stroke dark:hover:bg-primary dark:hover:text-white">B+</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" onClick={() => { setBloodGroupDropdown('inactive'); setBloodGroup('B-'); }} className="block px-4 py-2 hover:bg-stroke dark:hover:bg-primary dark:hover:text-white">B-</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" onClick={() => { setBloodGroupDropdown('inactive'); setBloodGroup('AB+'); }} className="block px-4 py-2 hover:bg-stroke dark:hover:bg-primary dark:hover:text-white">AB+</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" onClick={() => { setBloodGroupDropdown('inactive'); setBloodGroup('AB-'); }} className="block px-4 py-2 hover:bg-stroke dark:hover:bg-primary dark:hover:text-white">AB-</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" onClick={() => { setBloodGroupDropdown('inactive'); setBloodGroup('O+'); }} className="block px-4 py-2 hover:bg-stroke dark:hover:bg-primary dark:hover:text-white">O+</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" onClick={() => { setBloodGroupDropdown('inactive'); setBloodGroup('O-'); }} className="block px-4 py-2 hover:bg-stroke dark:hover:bg-primary dark:hover:text-white">O-</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </fieldset>

                        {/* Origen y Residencia End */}

                        <hr className="w-full pb-4 text-stroke border-opacity-60 dark:border-graydark" />

                        <fieldset className="border border-solid border-stroke border-opacity-60 dark:border-graydark rounded-lg p-3 mb-5">
                            <legend className="text-sm opacity-60 dark:text-gray dark:opacity-40">Información de Residencia</legend>
                            <div className="flex flex-wrap gap-5.5 pb-5 pl-2.5">
                                <div className="h-21">
                                    <label className="mb-3 block text-black dark:text-white">
                                        Departamento
                                    </label>
                                    <div className="h-13">
                                        <select
                                            value={selectedDepartment}
                                            onChange={(e) => setSelectedDepartment(e.target.value)}
                                            className="w-100 border-solid border-[1.5px]  border-stroke dark:border-form-strokedark  rounded-lg text-darkgray hover:bg-gray focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium px-5 py-3 h-12 text-sm  inline-flex items-center  dark:hover:bg-primary dark:focus:ring-blue-800 bg-transparent"
                                        >
                                            <option value="">Seleccione un Departamento</option>
                                            {
                                                departamentos_ciudades.map((dept, index) => (
                                                    <option key={index} value={dept.departamento}>{dept.departamento}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>

                                <div className="h-21">
                                    <label className="mb-3 block text-black dark:text-white">
                                        Ciudad
                                    </label>
                                    <div className="h-13">
                                        <select
                                            value={selectedCity}
                                            onChange={(e) => setSelectedCity(e.target.value)}
                                            className="w-100 border-solid border-[1.5px]  border-stroke dark:border-form-strokedark  rounded-lg text-darkgray hover:bg-gray focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium px-5 py-3 h-12 text-sm  inline-flex items-center  dark:hover:bg-primary dark:focus:ring-blue-800 bg-transparent"
                                        >
                                            <option value="">Seleccione una Ciudad</option>
                                            {
                                                cities.map((city, index) => (
                                                    <option key={index} value={city}>{city}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>

                                <div className="linebreak w-full"></div>

                                <div className="h-21">
                                    <label className="mb-3 block text-black dark:text-white">
                                        Estrato
                                    </label>
                                    <div className="h-13">
                                        <button
                                            onClick={() => estratoDropdown === 'inactive' ? setEstratoDropdown('active') : setEstratoDropdown('inactive')}
                                            id="dropdownDefaultButton"
                                            data-dropdown-toggle="dropdown"
                                            className="w-100 border-solid border-[1.5px] border-stroke dark:border-form-strokedark rounded-lg text-darkgray hover:bg-gray focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium px-5 py-3 h-12 text-sm text-center inline-flex items-center dark:hover:bg-primary dark:focus:ring-blue-800"
                                            type="button"
                                        >
                                            {estrato === '' ? 'No Identificado' : estrato}
                                            <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                            </svg>
                                        </button>
                                        {/* Dropdown menu Estrato */}
                                        <div className="absolute">
                                            <div id="dropdown" className={` ${estratoDropdown === 'active' ? 'dark:bg-graydark z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700' : 'hidden'}`}>
                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                                    {[1, 2, 3, 4, 5, 6].map((value) => (
                                                        <li key={value}>
                                                            <a
                                                                href="#"
                                                                onClick={() => { setEstratoDropdown('inactive'); setEstrato(value.toString()); }}
                                                                className="block px-4 py-2 hover:bg-stroke dark:hover:bg-primary dark:hover:text-white"
                                                            >
                                                                {value}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="h-21">
                                    <label className="mb-3 block text-black dark:text-white">
                                        Zona
                                    </label>
                                    <div className="h-13">
                                        <button
                                            onClick={() => zonaDropdown === 'inactive' ? setZonaDropdown('active') : setZonaDropdown('inactive')}
                                            id="dropdownDefaultButton"
                                            data-dropdown-toggle="dropdown"
                                            className="w-100 border-solid border-[1.5px] border-stroke dark:border-form-strokedark rounded-lg text-darkgray hover:bg-gray focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium px-5 py-3 h-12 text-sm text-center inline-flex items-center dark:hover:bg-primary dark:focus:ring-blue-800"
                                            type="button"
                                        >
                                            {zona === '' ? 'No Identificado' : zona}
                                            <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                            </svg>
                                        </button>
                                        {/* Dropdown menu Zona */}
                                        <div className="absolute">
                                            <div id="dropdown" className={` ${zonaDropdown === 'active' ? 'dark:bg-graydark z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700' : 'hidden'}`}>
                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                                    {['Rural', 'Urbana'].map((value) => (
                                                        <li key={value}>
                                                            <a
                                                                href="#"
                                                                onClick={() => { setZonaDropdown('inactive'); setZona(value); }}
                                                                className="block px-4 py-2 hover:bg-stroke dark:hover:bg-primary dark:hover:text-white"
                                                            >
                                                                {value}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </fieldset >



                    </div>
                </div>}

                {activeTab === 'reception' && <div>Reception Data</div>}
                {activeTab === 'exams' && <div>Exams</div>}
            </div>





        </DefaultLayout>
    );

};

export default CreateReception;