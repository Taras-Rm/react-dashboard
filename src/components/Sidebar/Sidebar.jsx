import React from 'react';
import s from './Sidebar.module.scss';
import avatar from '../../assets/photos/Profile.png';
import { Link, useLocation } from 'react-router-dom';

const links = ['dashboard', 'expenses', 'wallets', 'summary', 'accounts', 'settings'];

function Sidebar() {
  const location = useLocation();

  return (
    <aside className={s.sidebar}>
      <div className={s.sidebarContent}>
        <div className={s.profile}>
          <div className={s.avatar}>
            <img src={avatar} alt="avatar" />
            <div className={s.natification}>4</div>
          </div>
          <div className={s.profileName}>Sanabtha</div>
          <div className={s.profileEmail}>samantha@email.com</div>
        </div>
        <nav className={s.sidebarNav}>
          <ul>
            {links.map((l) => (
              <li className={s.sidebarNavItem} key={l}>
                <Link
                  className={`${location.pathname === `/${l}` ? s.sidebarNavLinkActive : s.sidebarNavLink}`}
                  to={`/${l}`}
                >
                  {l[0].toUpperCase() + l.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
