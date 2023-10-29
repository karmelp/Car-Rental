"use client"
import { useState } from 'react'
import MenuBtn from '../menuBtn/MenuBtn'
import Image from 'next/image'
import './sidebar.scss'
import Dashboard from '../../../public/assets/Dashboard.svg'
import Car from '../../../public/assets/Car.svg'
import Logo from '../../../public/assets/Logo.svg'
import Bookings from '../../../public/assets/Booking.svg'
import Bell from '../../../public/assets/Bell.svg'
import Settings from '../../../public/assets/Settings.svg'
import Payment from '../../../public/assets/Payment.svg'
import Transaction from '../../../public/assets/Transaction.svg'
import Report from '../../../public/assets/Report.svg'
import Logout from '../../../public/assets/Logout.svg'

const Sidebar: React.FC = () => {
  const [activeLink, setActiveLink] = useState('/');
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = (e: React.MouseEvent<HTMLDivElement>) => {
    // e.preventDefault();
    // e.stopPropagation();
    // console.log("click")
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <label className='sidebar-toggle' htmlFor="check">
        <input type="checkbox" id="check"/> 
        <div onClick={toggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </label>
      <div className='upper'>
        <Image src={Logo} alt="Logo" />
        <div className='sidebar-nav'>
          <div className='sidebar-buttons'>
            <MenuBtn 
            icon={Dashboard} 
            link="/" text="Dashboard" 
            isActive={activeLink === '/'}
            onClick={() => setActiveLink('/')} 
            />
            <MenuBtn 
            icon={Car} 
            link="/drivers" text="Drivers" 
            isActive={activeLink === '/drivers'}
            onClick={() => setActiveLink('/drivers')} 
            />
            <MenuBtn 
            icon={Bookings} 
            link="/bookings" text="Bookings" 
            isActive={activeLink === '/bookings'}
            onClick={() => setActiveLink('/bookings')} 
            />
            <MenuBtn 
            icon={Bell} 
            link="/notifications" text="Notifications" 
            isActive={activeLink === '/notifications'}
            onClick={() => setActiveLink('/notifications')} 
            />
            <MenuBtn 
            icon={Settings} 
            link="/settings" text="Settings" 
            isActive={activeLink === '/settings'}
            onClick={() => setActiveLink('/settings')} 
            />
          </div>
          <div className="divider"></div>
          <div>
            <p>Report</p>
            <div className="sidebar-buttons">
              <MenuBtn 
                icon={Payment} 
                link="/payment" text="Payment" 
                isActive={activeLink === '/payment'}
                onClick={() => setActiveLink('/payment')} 
                />
                <MenuBtn 
                icon={Transaction} 
                link="/transaction" text="Transaction" 
                isActive={activeLink === '/transaction'}
                onClick={() => setActiveLink('/transaction')} 
                />
                <MenuBtn 
                icon={Report} 
                link="/car-report" text="Car Report" 
                isActive={activeLink === '/car-report'}
                onClick={() => setActiveLink('/car-report')} 
                />
            </div>
            
          </div>
        </div>
      </div>
      <div className='logout'>
        <button>
          <Image className='logout-icon' src={Logout} alt="Logo" />
          Logout
        </button>
      </div>
    </div>
  )
}

export default Sidebar;