import '../estilos/footer.css'

export const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer-contacto">
                <h2>COTIZA CON NOSOTROS</h2>
                <p>SERA UN GUSTO PODER SERVIRTE</p>
                <p>Con gusto estaremos dándole seguimiento a tu solicitud. ¡Contáctanos!</p>
                <button className="btn-email" onClick={() => window.location.href = 'mailto:info@constructoradaze.com'}>
                    ENVIAR EMAIL
                </button>

                <div className="info-contacto">
                    <p><span>📍 Dirección:</span> 6 Avenida 4-18 Balcones de San Cristóbal, Zona 8 de Mixco, Guatemala.</p>
                    <p><span>📞 Teléfono:</span> (502) 2478 3206</p>
                    <p><span>✉️ Correo:</span> <a href="mailto:info@constructoradaze.com">info@constructoradaze.com</a></p>

                    <div className="social-media">
                        <a href="#"><img src="icono-facebook.svg" alt="Facebook" /></a>
                        <a href="#"><img src="icono-youtube.svg" alt="YouTube" /></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 @Derechos Reservados</p>
            </div>
        </footer>
    );
};
