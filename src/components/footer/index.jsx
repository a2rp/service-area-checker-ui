import { createElement } from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { FiBookOpen, FiCoffee, FiGithub, FiGlobe, FiHeart, FiMail, FiMessageCircle } from "react-icons/fi";
import { SiCodepen } from "react-icons/si";
import { Styled } from "./styled";

const connect = [
    ["Portfolio", "https://www.ashishranjan.net/", FiGlobe],
    ["GitHub", "https://github.com/a2rp", FiGithub],
    ["CodePen", "https://codepen.io/ash1198", SiCodepen],
    ["LinkedIn", "https://www.linkedin.com/in/aashishranjan", FaLinkedinIn],
    ["Facebook", "https://www.facebook.com/theash.ashish/", FaFacebookF],
    ["YouTube", "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", FaYoutube],
    ["Email", "mailto:ash.ranjan09@gmail.com", FiMail],
];

const support = [
    ["Support", "https://a2rp-donation-page.netlify.app/", FiHeart],
    ["Buy Me a Coffee", "https://buymeacoffee.com/a2rp", FiCoffee],
    ["Patreon", "https://patreon.com/a2rp", FiBookOpen],
];

function IconLinks({ items }) {
    return (
        <div className="socialGrid iconOnlyGrid">
            {items.map(([label, href, Icon]) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
                    {createElement(Icon, { "aria-hidden": true })}
                </a>
            ))}
        </div>
    );
}

const Footer = () => (
    <Styled.Wrapper className="footer">
        <div className="footerInner">
            <div className="footerTop">
                <div className="brandColumn">
                    <div className="brand">
                        <span className="brandIcon"><FiGlobe /></span>
                        <span className="brandText"><strong>Service Area</strong><span>Checker UI</span></span>
                    </div>
                    <p>A modern service-area availability interface for checking ZIP-based regional coverage and supported services.</p>
                    <a className="emailLink" href="mailto:ash.ranjan09@gmail.com"><FiMail /> ash.ranjan09@gmail.com</a>
                </div>
                <div className="linkColumn">
                    <span className="columnLabel">CONNECT</span>
                    <IconLinks items={connect} />
                </div>
                <div className="linkColumn">
                    <span className="columnLabel">SUPPORT</span>
                    <IconLinks items={support} />
                </div>
            </div>

            <div className="footerDivider" />

            <div className="footerBottom">
                <div className="copyright">
                    <span>Copyright © {new Date().getFullYear()} <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></span>
                    <span>All rights reserved.</span>
                </div>
                <div className="buildMeta"><span><i />Interface operational</span><span>React + Vite</span></div>
            </div>
        </div>
    </Styled.Wrapper>
);

export default Footer;
