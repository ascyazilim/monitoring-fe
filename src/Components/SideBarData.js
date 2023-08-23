import React from 'react'
import* as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';

export const SideBarData = [
    {
        title: 'AnaSayfa',
        path: '/home',
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
        title: 'Muayene Bilgisi Ekle',
        path: '/muayene-olustur',
        icon: <FaIcons.FaFileMedicalAlt />,
        cName: 'nav-text'
    },
    {
        title: 'Hasta Bilgisi',
        path: '/hasta',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Tani Bilgisi',
        path: '/',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Tani Bilgisi Oluştur',
        path: '/create',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Tanı Listesi',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
]
