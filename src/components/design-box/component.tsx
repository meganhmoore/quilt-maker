import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid'
import Quilt from 'components/quilt';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const quiltTypes: {[type: string]: string} = {'Pillowcase (20x20)': 'pillowcase', 'Crib Quilt': 'crib', 'Queen Quilt': 'queen', 'King Quilt': 'king', 'Custom Dimensions': 'custom'};

const DesignBox: React.FC = () => {
    const typeKeys = Object.keys(quiltTypes)
    let quiltSize: string = 'crib';

    const setQuiltSize = (setSize: string) => {
       quiltSize = setSize;
    };

    const options = typeKeys.map((type) => <Menu.Item>
    {({ active }) => (<a className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 
    'block px-4 py-2 text-sm')} onClick={() => setQuiltSize(quiltTypes[type])}>{type}</a>)}</Menu.Item>);

    

    return(
        <div className="relative justify-center text-center">
            <div>
                <h1 className='p-4 text-3xl'>Design Your Custom Quilt</h1>
            </div>
            <div className="grid grid-cols-2">
                <div>
                    <Menu as="div" className="relative inline-block text-right">
                        {({ open }) => (
                            <>
                                <div>
                                    <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                                        Quilt Sizes
                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                    </Menu.Button>
                                </div>

                                <Transition
                                    show={open}
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items
                                        static
                                        className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    >
                                        <div className="py-1">
                                            {options}
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </>
                        )}
                    </Menu> 
                </div>
                <div className="h-screen">
                    <Quilt size={quiltSize} />
                </div>
            </div>
        </div>
    )
}

export default DesignBox