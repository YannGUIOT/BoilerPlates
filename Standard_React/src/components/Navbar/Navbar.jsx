import {Link} from 'react-router-dom';
import { DarkMode } from '../DarkMode/DarkMode';

export const Navbar = () => {

  return (
    <div>
      <nav>
        <div>
          <ul>
            <li><Link to="/"> Home </Link></li>
            <li><Link to="/about"> About </Link></li>
            <li><Link to="/other"> Other </Link></li>
          </ul>
        </div>
        <div>
          <DarkMode />
        </div>
      </nav>
    </div>
  )
}