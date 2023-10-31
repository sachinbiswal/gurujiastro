import { BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Navbar = ({
  searchHandler,
  searchQuery,
  setSearchQuery,
  searchField,
  savedItems,
}) => {
  const navActiveStyle = ({ isActive }) => {
    return {
      color: isActive ? "#f43f5e" : 'black',
    };
  };

  return (
    <div className='navbar'>
      <h2 className='logo text-2xl font-bold italic lowercase'>
        fun<span className='text-rose-500'>toeat</span>
      </h2>
      <form className='search-bar' onSubmit={searchHandler}>
        <div className='search-box'>
          <BsSearch className='search-icon' />
          <input
            ref={searchField}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type='search'
            placeholder='Search recipe...'
            required
            className='bg-white/75 p-3 pl-8 pr-4 rounded-full shadow-lg shadow-black-200 lg:w-96 focus:shadow-grey-400 duration-300'
          />
        </div>
      </form>
      <ul className='menu flex gap-5'>
        <li>
          <NavLink
            style={navActiveStyle}
            end
            to='/'
            className='text-gray-400 hover:text-gray-600 duration-300 outline-none'
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={navActiveStyle}
            to='/favourites'
            className='text-gray-400 hover:text-gray-600 duration-300 outline-none'
          >
            Favourites
            <span className='favourites-count text-red-400 font-bold ml-1'>
              ({savedItems.length})
            </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
