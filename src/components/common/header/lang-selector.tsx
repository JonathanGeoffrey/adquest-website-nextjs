"use client"
import { ID, US } from 'country-flag-icons/react/1x1';
import Link from 'next/link';
import React, { useState } from 'react';
import { TbChevronDown } from 'react-icons/tb';
import { twMerge } from 'tailwind-merge';
import { Lang, useLang, useLangHref } from '@/utils/lang';

const selections = [
  { value: 'id', label: <ID width={20} height={15} title="Indonesia" />, name: "Indonesian" },
  { value: 'en', label: <US width={20} height={15} title="United States" />, name: "English" }
]

const LangSelector: React.FC = () => {
  const [show, setShow] = useState(false)
  const currentLang = useLang()
  const getLangHref = useLangHref()
  const selectedLang = selections.find((x) => x.value === currentLang) || selections[0]

  const onSelectLang = () => {
    setShow(false)
  }

  return (
    <div className='relative'>
      <button onClick={() => setShow(!show)} className={twMerge('px-4 py-2  rounded-lg flex gap-2 items-center bg-gray-100', show ? 'bg-gray-200' : '')}>
        <span>{selectedLang.label}</span>
        <span className={twMerge(show ? 'rotate-180' : "")}><TbChevronDown /></span>
      </button>
      {show && (
        <div className='bg-white absolute w-[150px] right-0 shadow-md border rounded-lg flex flex-col text-sm overflow-clip'>
          {selections.map((selection, index) => (
            <Link href={getLangHref(selection.value as Lang)} onClick={onSelectLang} key={index} className={twMerge('flex items-center gap-3 px-4 py-2 hover:bg-gray-100 hover:cursor-pointer active:bg-gray-200', selectedLang.value === selection.value ? 'bg-gray-100' : '')}>
              <span>{selection.label}</span>
              <span>{selection.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default LangSelector;
