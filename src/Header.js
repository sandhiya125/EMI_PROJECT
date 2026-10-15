import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#f1f1f1',
      padding: '20px',
      textAlign: 'center',
      borderTop: '1px solid #ccc',
      marginTop: '30px',
      position: 'relative',
      bottom: '0',
      width: '100%'
    }}>
      <p style={{ margin: '0 0 10px 0', fontWeight: 'bold' }}>
        Finance Tool App &copy; {new Date().getFullYear()}
      </p>
      
      {/* EMI Calculator Link or Indicator */}
      <div style={{ fontSize: '14px', color: '#555' }}>
        <span>Explore our <strong>EMI Calculator</strong> feature on the main page.</span>
      </div>
    </footer>
  );
}

export default Footer;
