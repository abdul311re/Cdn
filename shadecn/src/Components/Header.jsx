import { useState, useEffect, useRef } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Button,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Arlogo from '../Assets/ArLogo.png'; 
import Product from '../Assets/Logo/Product.png';
import Home from '../Assets/Logo/home (1).svg';
import { Link } from "react-router-dom"; 
const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', path: '/first', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const Services = [
  { name: 'Website Development' , description: 'Get a better understanding of your traffic', Route:'/Website', icon: ChartPieIcon },
  { name: 'Wordpress Development', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Shopify Development', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Mobile Development', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Software Development', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownRef1 = useRef(null);
  const [isOpen1, setIsOpen1] = useState(false);
  

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);  // Close dropdown
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);
  
  
  const toggleDropdown1 = () => {
    setIsOpen1((prev) => !prev);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) {
        setIsOpen1(false);  // Close dropdown
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside );
    };
  }, [dropdownRef1]);

  const handleClick = () => {
    if (dropdownRef1.current) {
      dropdownRef1.current.style.display = 'none ' ;
    }
  };
  return (
    <header className="bg-white sticky top-0 z-50">
      <nav aria-label="Global" className=" flex  items-center justify-between p-5 lg:px-20 md:px-10 ">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src={Arlogo}
              className=" h-16 sm:h-16 lg:h-20 w-auto absolute top-0  "
            />
          </Link>
        </div>
        <div className="flex md:hidden">
        <div>
      {/* Conditionally render Open or Close button */}
      {!mobileMenuOpen ? (
        // Show Open (Bars3Icon) when the menu is closed
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon aria-hidden="true" className="h-9 w-auto absolute right-8 top-4" />
        </button>
      ) : (
        // Show Close (XMarkIcon) when the menu is open
        <button
          type="button"
          onClick={() => setMobileMenuOpen(false)}
          className="-m-2.5 rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Close menu</span>
          <XMarkIcon aria-hidden="true" className="h-9 w-auto absolute right-8 top-4" />
        </button>
      )}
      
      {/* Mobile menu content (conditionally rendered) */}
      {mobileMenuOpen && (
        <div className="absolute top-0 left-0">
          {/* Your mobile menu content goes here */}
        </div>
      )}
    </div>
        </div>
        <PopoverGroup className="hidden md:flex lg:gap-x-8 sm:gap-x-6">
          <a href="#" className="text-base font-semibold leading-6 text-gray-900 py-1">
            Home
          </a>
          <Popover className="relative">
            <PopoverButton  onClick={toggleDropdown1}  className="flex items-center text-base  font-semibold leading-6 text-gray-900 py-1   border-none outline-none gap-x-1">
            Services
              <ChevronDownIcon aria-hidden="true"  className={`h-5 w-5 flex-none text-gray-400 transition-transform duration-300 ${
            isOpen1 ? 'rotate-180' : 'rotate-0' 
          }`} />
            </PopoverButton >

            <PopoverPanel
             ref={dropdownRef1}
              transition
              className="fixed top-16 left-0  z-10 mt-3 w-screen bg-white shadow-lg ring-1 ring-gray-900/5  transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in" 
             
            >
              <div className="p-4">
                {Services.map((item, index) => (
                  <Link to={item.Route} key={index} 
                  onClick ={handleClick}>
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto ">
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  </Link>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 ">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 "
                  >
                    <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <a href="#" className="text-base font-semibold leading-6 text-gray-900 py-1">
            About Us
          </a>
          <a href="#" className="text-base font-semibold leading-6 text-gray-900 py-1">
            Portfolio
           </a>
           <a href="#" className="text-base font-semibold leading-6 text-gray-900 py-1">
            Blog
           </a>
          <Popover className="relative" ref={dropdownRef}>
            <PopoverButton  onClick={toggleDropdown}  className="flex items-center  text-base  font-semibold leading-6 text-gray-900 py-1   border-none outline-none gap-x-1">
             Insight
              <ChevronDownIcon aria-hidden="true"  className={`h-5 w-5 flex-none text-gray-400 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0' 
          }`} />
            </PopoverButton >
            <PopoverPanel
            ref={dropdownRef1}
              transition
              className="fixed top-16 left-0  z-10 mt-3 w-screen bg-white shadow-lg ring-1 ring-gray-900/5  transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in" 
             
            >
              <div className="p-4">
                {products.map((item , index) => (
                  <Link to={item.path} key={index} 
                  onClick ={handleClick}>
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto ">
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  </Link>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 ">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 "
                  >
                    <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Button className="inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white" style={{backgroundColor:"#8E44AD"}}>
          Log in <span aria-hidden="true">&rarr;</span>
    </Button>
        </PopoverGroup>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="sm:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-4/5 h-auto mt-2 overflow-y-auto bg-white px-3 py-0 top-14 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 border-t border-t-grey-700">
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
              <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 pb-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 flex">
                 <img src={Home} alt="" style={{width:"25px" ,height:"auto" }} /> Home
                </a>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center   rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  <img src={Product} alt="" style={{width:"25px" ,height:"auto"}} /> Product
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none absolute right-9 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2 mx-4">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  <img src={Product} alt="" style={{width:"25px" ,height:"auto"}} /> Product
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none absolute right-9 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2 mx-4">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 flex">
                 <img src={Product} alt="" style={{width:"30px" ,height:"auto"}} /> Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}