import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
        
<footer class="footer">
    <div class="footer-content">
        <h5>Contact Us</h5>
        <p>Email: <a href="mailto:asmaeelhaddouchi06@gmail.com" class="link">asmaeelhaddouchi06@gmail.com</a></p>
        <p>Phone: <a href="tel:0772147790" class="link">+212772147790</a></p>
        
        <h5>Follow Us</h5>
        <div class="social-icons">
            <a href="https://www.instagram.com/asmae_.elhaddouchi/" ><i class="fa-brands fa-instagram"></i></a> 
            <a href="https://github.com/Asmae-elhadouchi" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
            <a href="https://www.linkedin.com/in/asmae-el-haddouchi-a9a611301" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
            <a href="https://www.facebook.com/profile.php?id=100095569563356"><i class="fa-brands fa-facebook"></i></a>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; All rights reserved.</p>
    </div>
</footer>
    </div>
  )
}

export default Footer