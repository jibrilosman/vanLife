import '../index.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; {currentYear} #vanlife</p>
    </footer>
  );
};

export default Footer;
