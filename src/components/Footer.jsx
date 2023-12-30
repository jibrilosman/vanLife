import '../index.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Created by <a href="">@jessicamvs</a></p>
      <p>&copy; {currentYear} #vanlife</p>
    </footer>
  );
};

export default Footer;
