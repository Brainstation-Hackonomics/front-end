import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="-239 130.8 126 139.5"
          style={{ enableBackground: "new -239 130.8 126 139.5" }}
          className="header__logo"
        >
          <g>
            <g>
              <g>
                <path
                  d="M-136.4,156.8h-39.5c-22.6,0-41.2,17.1-43.6,39l0,0c-3.4-6.3-5.5-13.5-5.5-21.2c0-24.3,19.8-43.8,43.8-43.8     h68.2L-136.4,156.8z"
                  fill="#ED1C24"
                />
                <path
                  d="M-215.4,244.3h39.5c22.6,0,41.2-17.1,43.6-39l0,0c3.4,6.3,5.5,13.5,5.5,21.2c0,24.1-19.5,43.8-43.8,43.8     H-239L-215.4,244.3z"
                  fill="#ED1C24"
                />
                <circle cx="-175.9" cy="200.7" r="35.2" fill="#ED1C24" />
              </g>
            </g>
          </g>
        </svg>
        <h3 className="header__title">Money Mentor Matchmaker</h3>
      </div>
      <button className="header__button">
        <svg
          viewBox="0 0 15 11"
          xmlns="http://www.w3.org/2000/svg"
          className="header__icon"
        >
          <path d="M6.66667 10.5H8.33333C8.79167 10.5 9.16667 10.125 9.16667 9.66667C9.16667 9.20833 8.79167 8.83333 8.33333 8.83333H6.66667C6.20833 8.83333 5.83333 9.20833 5.83333 9.66667C5.83333 10.125 6.20833 10.5 6.66667 10.5ZM0 1.33333C0 1.79167 0.375 2.16667 0.833333 2.16667H14.1667C14.625 2.16667 15 1.79167 15 1.33333C15 0.875 14.625 0.5 14.1667 0.5H0.833333C0.375 0.5 0 0.875 0 1.33333ZM3.33333 6.33333H11.6667C12.125 6.33333 12.5 5.95833 12.5 5.5C12.5 5.04167 12.125 4.66667 11.6667 4.66667H3.33333C2.875 4.66667 2.5 5.04167 2.5 5.5C2.5 5.95833 2.875 6.33333 3.33333 6.33333Z" />
        </svg>
        <p className="header__filter">FILTER</p>
      </button>
    </header>
  );
}

export default Header;
