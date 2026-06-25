import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} - Calculadora de IMC</p>
      <p>Desenvolvido como exercício de ReactJS</p>
    </footer>
  );
}

export default Footer;