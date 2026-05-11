import React from 'react';
import { Link } from 'react-router';
import useAuth from '../../hooks/useAuth';

const NavBtn = () => {
    const {user, logOut} = useAuth();

    const handleSignOut = ()=>{
        return logOut().then((err)=>{console.log(err)}).catch(err=>console.log(err));
    }
    
    return (
        <div className='flex gap-2'>
            {
                user ? <button onClick={handleSignOut} className='btn btn-outline border-[#DADADA] '>Logout</button>:
                <Link to="/login" className='btn btn-outline border-[#DADADA] '>Sign In</Link>
            }
            <Link to="/rider" className='btn btn-secondary'>Be A Rider</Link>
        </div>
    );
};

export default NavBtn;