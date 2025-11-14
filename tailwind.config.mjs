/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        sans: ['Manrope', 'DM Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        body: ['Poppins', 'Manrope', 'DM Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        logo: ['Source Serif Pro', 'serif'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      fontSize: {
        // Primary typography scale - for main content areas
        'display': ['3.5rem', { lineHeight: '1.1', fontWeight: '600', letterSpacing: '-0.02em' }],  // 56px - Hero/landing page titles
        'title': ['2.5rem', { lineHeight: '1.2', fontWeight: '600', letterSpacing: '-0.01em' }],     // 40px - Page titles (h1)
        'heading': ['1.875rem', { lineHeight: '1.3', fontWeight: '600' }],                           // 30px - Major section headings (h2)
        'subheading': ['1.5rem', { lineHeight: '1.4', fontWeight: '500' }],                          // 24px - Subsection headings (h3)
        'body-lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],                           // 18px - Large body text
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],                                  // 16px - Standard body text
        'body-sm': ['0.9375rem', { lineHeight: '1.6', fontWeight: '400' }],                          // 15px - Small body text
        'caption': ['0.875rem', { lineHeight: '1.5', fontWeight: '500' }],                           // 14px - Captions, labels, metadata
        'label': ['0.8125rem', { lineHeight: '1.5', fontWeight: '500' }],                            // 13px - Form labels, small UI text
        'tiny': ['0.75rem', { lineHeight: '1.4', fontWeight: '500' }],                               // 12px - Very small text, badges
        
        // Specialized typography - for specific components
        'logo': ['1.75rem', { lineHeight: '1.2', fontWeight: '700' }],                               // 28px - Logo text
        'button-lg': ['1rem', { lineHeight: '1.5', fontWeight: '500' }],                             // 16px - Large buttons
        'button': ['0.9375rem', { lineHeight: '1.5', fontWeight: '500' }],                           // 15px - Standard buttons
        'button-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '500' }],                         // 14px - Small buttons
        
        // Landing page sections - optimized for marketing content with reduced sizes for elegance
        'hero-title': ['2.5rem', { lineHeight: '1.1', fontWeight: '500', letterSpacing: '-0.01em' }],  // 40px (reduced from 48px) - Hero section title
        'hero-subtitle': ['1rem', { lineHeight: '1.7', fontWeight: '400' }],                         // 16px (reduced from 18px) - Hero description
        'section-title': ['1.75rem', { lineHeight: '1.3', fontWeight: '500' }],                      // 28px (reduced from 32px) - Section titles
        'section-subtitle': ['1rem', { lineHeight: '1.6', fontWeight: '500' }],                      // 16px (reduced from 18px) - Section subtitles
        'section-body': ['0.9375rem', { lineHeight: '1.6', fontWeight: '400' }],                     // 15px (reduced from 16px) - Section body text
        'card-title': ['1rem', { lineHeight: '1.4', fontWeight: '500' }],                            // 16px (reduced from 18px) - Card/feature titles
        'card-body': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }],                         // 14px (reduced from 15px) - Card descriptions
      },
      colors: {
        // Modern wellness brand palette
        'wellness': {
          'beige': '#FDF6E7',
          'yellow': '#FFF5D1',
          'blue': '#DCE5E9',
          'gray': '#1C1C1C',
          'light-beige': '#efebe5',
          'extra-light-beige': '#fff8ee',
          'card-beige': '#F7F5F2',
        },
      },
      boxShadow: {
        // Soft, subtle shadows for depth
        'soft-xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'soft-sm': '0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
        'soft-md': '0 6px 12px -2px rgba(0, 0, 0, 0.1), 0 3px 6px -2px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 10px 20px -3px rgba(0, 0, 0, 0.1), 0 4px 8px -2px rgba(0, 0, 0, 0.05)',
        'soft-xl': '0 20px 30px -5px rgba(0, 0, 0, 0.12), 0 8px 12px -4px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-wellness': 'linear-gradient(135deg, #FDF6E7 0%, #FFF5D1 50%, #DCE5E9 100%)',
        'gradient-beige': 'linear-gradient(135deg, #FDF6E7 0%, #FFF5D1 100%)',
        'gradient-blue': 'linear-gradient(135deg, #DCE5E9 0%, #FDF6E7 100%)',
        'gradient-pricing': 'linear-gradient(135deg, #DCE5E9 0%, #FDF6E7 70%, #FFF5D1 100%)',
        'gradient-card-soft': 'linear-gradient(135deg, #FFFFFF 0%, #F7F5F2 100%)',
        'gradient-sandy': 'linear-gradient(135deg, #d19131 0%, #c9a86a 50%, #e0b878 100%)',
        'gradient-sandy-card': 'linear-gradient(135deg, rgba(162, 114, 42, 0.3) 0%, rgba(201, 168, 106, 0.25) 100%)',
        'gradient-beige-card': 'linear-gradient(135deg, #F7F5F2 0%, #FDF6E7 50%, #F7F5F2 100%)',
      },
      borderRadius: {
        'wellness': '20px',
        'wellness-lg': '24px',
      },
    },
  },
  plugins: [],
};
