'use client';
import { useState } from 'react';

const DonationMenu = ({ isOpen, onClose }) => {
  const predefinedAmounts = [10, 25, 50, 100, 250, 500];
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        backdropFilter: 'blur(8px)',
      }}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          width: '92%',
          maxWidth: '1100px',
          position: 'relative',
          boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
          display: 'flex',
          overflow: 'hidden',
          animation: 'slideUp 0.4s ease-out',
        }}
      >
        {/* Left Section with Image and Text */}
        <div
          style={{
            flex: '1',
            backgroundColor: '#F0F7FF',
            padding: '54px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '6px',
              background: 'linear-gradient(90deg, #3182CE, #63B3ED)',
            }}
          />
          <img
            src="/hindu_temple_attack.png"
            alt="Supporting Our Mission"
            style={{
              width: '100%',
              height: '240px',
              objectFit: 'cover',
              borderRadius: '12px',
              marginBottom: '28px',
              boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
            }}
          />

          <h3
            style={{
              color: '#1A365D',
              fontSize: '1.75rem',
              marginBottom: '20px',
              fontWeight: '800',
              letterSpacing: '-0.02em',
            }}
          >
            Supporting Our Mission
          </h3>

          <p
            style={{
              color: '#2D4A6E',
              lineHeight: '1.8',
              fontSize: '1.1rem',
              textShadow: '0 1px 2px rgba(0,0,0,0.05)',
            }}
          >
            Your donation helps us continue our vital work in the community. Every
            contribution, no matter the size, makes a meaningful impact in
            supporting our cause and helping those in need.
          </p>
        </div>

        {/* Right Section with Donation Options */}
        <div
          style={{
            flex: '1',
            padding: '54px',
            position: 'relative',
            background: 'linear-gradient(135deg, #ffffff, #f8faff)',
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              right: '28px',
              top: '28px',
              border: 'none',
              background: 'rgba(0,0,0,0.06)',
              height: '40px',
              width: '40px',
              borderRadius: '50%',
              fontSize: '22px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              color: '#4A5568',
            }}
            onMouseEnter={(e) => e.target.style.background = 'rgba(0,0,0,0.1)'}
            onMouseLeave={(e) => e.target.style.background = 'rgba(0,0,0,0.06)'}
          >
            ×
          </button>

          <h2
            style={{
              color: '#2D3748',
              marginBottom: '36px',
              fontSize: '2rem',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #2C5282, #3182CE)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Choose Your Impact
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
              marginBottom: '32px',
            }}
          >
            {predefinedAmounts.map((amount) => (
              <button
                key={amount}
                onClick={() => setSelectedAmount(amount)}
                style={{
                  padding: '24px 16px',
                  border: 'none',
                  borderRadius: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  background: selectedAmount === amount 
                    ? 'linear-gradient(135deg, #3182CE, #2C5282)'
                    : 'rgba(255,255,255,0.8)',
                  boxShadow: selectedAmount === amount
                    ? '0 8px 20px rgba(49, 130, 206, 0.3)'
                    : '0 4px 12px rgba(0,0,0,0.05)',
                  transform: selectedAmount === amount ? 'translateY(-2px)' : 'none',
                }}
                onMouseEnter={(e) => {
                  if (selectedAmount !== amount) {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 16px rgba(0,0,0,0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedAmount !== amount) {
                    e.target.style.transform = 'none';
                    e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
                  }
                }}
              >
                <div style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  color: selectedAmount === amount ? 'white' : '#2D3748',
                }}>
                  ${amount}
                </div>
              </button>
            ))}
          </div>

          <div
            style={{
              position: 'relative',
              marginBottom: '32px',
              background: 'white',
              padding: '24px',
              borderRadius: '16px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            }}
          >
            <label
              style={{
                display: 'block',
                marginBottom: '12px',
                color: '#4A5568',
                fontSize: '1rem',
                fontWeight: '600',
              }}
            >
              Custom Amount
            </label>
            <div style={{ position: 'relative' }}>
              <span
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#4A5568',
                  fontSize: '1.2rem',
                }}
              >
                $
              </span>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                placeholder="Enter amount"
                style={{
                  width: '100%',
                  padding: '16px 16px 16px 36px',
                  fontSize: '1.2rem',
                  borderRadius: '12px',
                  border: '2px solid #E2E8F0',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  background: '#F7FAFC',
                  color: '#2D3748',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#3182CE';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#E2E8F0';
                }}
              />
            </div>
          </div>

          <button
            style={{
              width: '100%',
              padding: '20px',
              fontSize: '1.2rem',
              background: 'linear-gradient(135deg, #3182CE, #2C5282)',
              color: 'white',
              border: 'none',
              borderRadius: '14px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              marginBottom: '16px',
              fontWeight: '700',
              boxShadow: '0 4px 15px rgba(49, 130, 206, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(49, 130, 206, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'none';
              e.target.style.boxShadow = '0 4px 15px rgba(49, 130, 206, 0.3)';
            }}
          >
            Complete Donation
          </button>

          <button
            onClick={onClose}
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '1rem',
              backgroundColor: 'transparent',
              color: '#718096',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '500',
            }}
            onMouseEnter={(e) => e.target.style.color = '#4A5568'}
            onMouseLeave={(e) => e.target.style.color = '#718096'}
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationMenu;
