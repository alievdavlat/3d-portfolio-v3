const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        
          <a href="https://github.com/alievdavlat" target="_blank">
          <div className="social-icon">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </div>
          </a>

          <a href="https://t.me/alievv_15" target="_blank">
        <div className="social-icon">
          <img src="/assets/telegram.svg" alt="telegram" className="w-1/2 h-1/2" />
        </div>
          </a>

          <a href="https://www.linkedin.com/in/mamurjonov-davlat-76762925b/" target="_blank">
          <div className="social-icon">
          <img src="/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2" />
        </div>
          </a>

        <a href="https://instagram.com/1.al1evv?igshid=MzRlODBiNWFlZA" target="_blank">
        <div className="social-icon">
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </div>
        </a>
      </div>

      <p className="text-white-500">© {new Date().getFullYear()} Aliev Davlatbek. All rights reserved.</p>
    </footer>
  );
};

export default Footer;