
import logoImage from '../../assets/icons/logo.png';
const Logo = () => {
    return (
        <div className='flex items-end '>

            <img src={logoImage} alt="logo" />
            <h2 className='text-[#303030] font-extrabold text-2xl -ms-3'>ZapShift</h2>
            
        </div>
    );
};

export default Logo;