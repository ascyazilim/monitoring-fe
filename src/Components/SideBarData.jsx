import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as FaIcons6 from 'react-icons/fa6';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCapsules, faProcedures, faStethoscope } from '@fortawesome/free-solid-svg-icons';



export const SideBarData = [
    {
        title: 'AnaSayfa',
        path: '/',
        icon: <FaIcons.FaHome />,
        cName: 'nav-text'
    },
    {
        title: 'Muayene Bilgisi',
        path: '/muayene',
        icon: <MdIcons.MdMedicalInformation />,
        cName: 'nav-text'
    },
    {
        title: 'Muayene Bilgisi Oluştur',
        path: '/muayene-olustur',
        icon: <FaIcons.FaFileMedicalAlt />,
        cName: 'nav-text'
    },
    {
        title: 'Hasta Bilgisi',
        path: '/hasta',
        icon: <FontAwesomeIcon icon={faProcedures} />,
        cName: 'nav-text'
    },
    {
        title: "Doktor Bilgisi",
        path: "/doktor",
        icon: <FaIcons6.FaUserDoctor />,
        cName: 'nav-text'
    },
    {
        title: "Doktor Listesi",
        path: "/doktor-list",
        icon: <FontAwesomeIcon icon={faStethoscope} />,
        cName: "nav-text"
    },
    
    {
        title: 'Tani Listesi',
        path: '/tani',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Tani Bilgisi Oluştur',
        path: '/tani-olustur',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'İlaç Bilgisi',
        path: '/ilac-bilgisi',
        icon: <FaIcons.FaCapsules/>,
        cName: 'nav-text'
    },
    {
        title: 'İlaç Listesi',
        path: '/ilac-listesi',
        icon: <FaIcons.FaPrescriptionBottle/>,
        cName: 'nav-text'
    },
    {
        title: 'Diabet takip Formu',
        path: '/#',
        icon: <FaIcons6.FaRectangleList/>,
        cName: 'nav-text'
    },
    {
        title: 'Ameliyat Girişim Bilgisi',
        path: '/#   ',
        icon: <FaIcons6.FaHeartPulse/>,
        cName: 'nav-text'
    },



]


