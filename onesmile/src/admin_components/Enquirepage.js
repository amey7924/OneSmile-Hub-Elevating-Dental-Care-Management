import React from 'react'

export default function Enquirepage() {
  return (

    <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h2 style={{ color: 'blue' }}>ENQUIRY FORM</h2>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '1', border: '1px solid #ccc', padding: '10px' }}>
        <img
  src='https://static.showit.co/1200/NVyu1HUlT1i7YcsOdIg2Sg/84619/fmc-dental-clinic-background.png'
  alt="Background"
  style={{ width: '100%' }}
/>
        </div>
        <div style={{ flex: '1', border: '1px solid #ccc', padding: '10px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', marginBottom: '10px' }}>
              <div style={{ flex: '1', textAlign: 'center', marginRight: '10px' }}>
                <h4>Your Name:</h4>
              </div>
              <div style={{ flex: '1' }}>
                <input type="text" style={{ width: '100%' }} />
              </div>
            </div>
          
            <div style={{ display: 'flex', marginBottom: '10px' }}>
              <div style={{ flex: '1', textAlign: 'center', marginRight: '10px' }}>
                <h4>Email:</h4>
              </div>
              <div style={{ flex: '1' }}>
                <input type="text" style={{ width: '100%' }} />
              </div>
            </div>
            <div style={{ display: 'flex', marginBottom: '10px' }}>
              <div style={{ flex: '1', textAlign: 'center', marginRight: '10px' }}>
                <h4>Contact:</h4>
              </div>
              <div style={{ flex: '1' }}>
                <input type="text" style={{ width: '100%' }} />
              </div>
            </div>
        
            <div style={{ display: 'flex', marginBottom: '10px' }}>
              <div style={{ flex: '1', textAlign: 'center', marginRight: '10px' }}>
                <h4>Message:</h4>
              </div>
              <div style={{ flex: '1' }}>
              
                <textarea id="dat" style={{ width: '100%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}