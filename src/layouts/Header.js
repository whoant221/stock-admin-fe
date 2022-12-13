import React from "react";
import {Navbar,Nav, NavItem,} from "reactstrap";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  let location = useLocation();

  const logout = () => { localStorage.removeItem('token-info') }

  const navigation = [
    { title: "Home", href: "/starter", icon: "bi bi-speedometer2", },
    { title: "Tài khoản", href: "/table", icon: "bi bi-people", },
    { title: "Thêm admin", href: "/adduser", icon: "bi bi-textarea-resize", },
    { title: "Cổ phiếu", href: "/stocktable", icon: "bi bi-link", },
    { title: "Mở cổ phiếu", href: "/addstock", icon: "bi bi-patch-check", },
    { title: "Đăng xuất", href: "/", icon: "bi bi-box-arrow-right", onClick: logout},
  ];

  return (
    <Navbar color="light-info" expand="md" >
        <Nav horizontal className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg" onClick={navi.onClick}>
              <Link
                to={navi.href}         
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3"
                    : "nav-link text-secondary py-3"}
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block" >{navi.title}</span>
              </Link>
            </NavItem>
          ))}
        </Nav>
    </Navbar>
  );
};
export default Header;
