import './Footer.scss';

const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <footer className="copyright">
      Made with &#10084; by Denovann - {year} ©
    </footer>
  );
};

export default Footer;
