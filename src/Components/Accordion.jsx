import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const Accordion = () => {
    return (
        <div className="w-full">
            <div className="w-full rounded-2xl bg-white py-2">
                <Disclosure>
                    {({ open }) => (
                        <div className={`${open && "bg-purple-50 "} rounded-lg`}>
                            <Disclosure.Button className={`flex w-full justify-between rounded-lg px-4 py-2 text-left text-lg font-semibold ${open && 'text-purple-600'} focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}>
                                <span>Create And Save Your Nates With Our Software </span>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transition-transform duration-300 transform' : ''
                                        } h-5 w-5 transition-transform duration-300 text-purple-500`}
                                />
                            </Disclosure.Button>
                            <Transition enter="transition duration-300 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0">

                                <Disclosure.Panel className="px-4 pt-4 pb-2">
                                    You can customize and Create Your task With our software
                                </Disclosure.Panel>
                            </Transition>
                        </div>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                        <div className={`${open && "bg-purple-50 "} rounded-lg`}>
                            <Disclosure.Button className={`flex w-full justify-between rounded-lg px-4 py-2 text-left text-lg font-semibold ${open && 'text-purple-600'} focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}>
                                <span>Best In Designing</span>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform transition-transform duration-300' : ''
                                        } h-5 w-5 text-purple-500 transition-transform duration-300`}
                                />
                            </Disclosure.Button>
                            <Transition enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0">
                                <Disclosure.Panel className="px-4 pt-4 pb-2">
                                    Create design according to Your need.
                                </Disclosure.Panel>
                            </Transition>
                        </div>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                        <div className={`${open && "bg-purple-50 "} rounded-lg`}>
                            <Disclosure.Button className={`flex w-full justify-between rounded-lg px-4 py-2 text-left text-lg font-semibold ${open && 'text-purple-600'} focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}>
                                <span>Protect Your Site With Hosting And SSL</span>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform transition-transform duration-300' : ''
                                        } h-5 w-5 text-purple-500 transition-transform duration-300`}
                                />
                            </Disclosure.Button>
                            <Transition enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0">
                                <Disclosure.Panel className="px-4 pt-4 pb-2">
                                    We are also provide best domain and hosting with SSL
                                </Disclosure.Panel>
                            </Transition>
                        </div>
                    )}
                </Disclosure>
            </div>
        </div>
    );
};

export default Accordion;