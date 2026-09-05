import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { NavigationTab, ServiceItem } from './types';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PropertiesSection } from './components/PropertiesSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { StickyWhatsApp } from './components/StickyWhatsApp';
import { BookingModal } from './components/BookingModal';
import { PdfBrochureModal } from './components/PdfBrochureModal';
import { Footer } from './components/Footer';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { getServicePageByRoute } from './data/servicePagesData';
import { CORE_SERVICES } from './data/servicesData';

function DynamicServiceRouteWrapper({ 
  renderServicePage 
}: { 
  renderServicePage: (route: string) => React.ReactElement 
}) {
  const location = useLocation();
  const pageData = getServicePageByRoute(location.pathname);
  if (!pageData) {
    return <Navigate to="/" replace />;
  }
  return renderServicePage(location.pathname);
}

export default function App() {
  const [activeTab, setActiveTab] = useState<NavigationTab>('home');
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<ServiceItem | null>(null);
  const [showPdfModal, setShowPdfModal] = useState<boolean>(false);

  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  // Automatically scroll to top and reset homepage SEO tags when on root
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (location.pathname === '/') {
      document.title = 'Fix Dubai | Home Maintenance Services in Dubai';

      const setMetaTag = (attr: 'name' | 'property', key: string, content: string) => {
        let el = document.querySelector(`meta[${attr}="${key}"]`);
        if (!el) {
          el = document.createElement('meta');
          el.setAttribute(attr, key);
          document.head.appendChild(el);
        }
        el.setAttribute('content', content);
      };

      setMetaTag('name', 'description', 'Fix Dubai provides professional home maintenance, AC repair, plumbing, electrical, painting, carpentry, tiling and renovation services in Dubai, UAE.');
      setMetaTag('name', 'robots', 'index, follow');
      setMetaTag('property', 'og:title', 'Fix Dubai | Home Maintenance Services in Dubai');
      setMetaTag('property', 'og:description', 'Fix Dubai provides professional home maintenance, AC repair, plumbing, electrical, painting, carpentry, tiling and renovation services in Dubai, UAE.');
      setMetaTag('property', 'og:url', 'https://fixdubai.pro/');
      setMetaTag('property', 'og:type', 'website');
      setMetaTag('property', 'og:site_name', 'Fix Dubai');
      setMetaTag('name', 'twitter:card', 'summary_large_image');
      setMetaTag('name', 'twitter:title', 'Fix Dubai | Home Maintenance Services in Dubai');
      setMetaTag('name', 'twitter:description', 'Fix Dubai provides professional home maintenance, AC repair, plumbing, electrical, painting, carpentry, tiling and renovation services in Dubai, UAE.');

      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', 'https://fixdubai.pro/');

      const homeJsonLd = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            "@id": "https://fixdubai.pro/#website",
            "name": "Fix Dubai",
            "url": "https://fixdubai.pro/"
          },
          {
            "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
            "@id": "https://fixdubai.pro/#localbusiness",
            "name": "Fix Dubai",
            "url": "https://fixdubai.pro/",
            "telephone": "+971568374070",
            "email": "rasheedsubhanidell@gmail.com",
            "priceRange": "AED",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dubai",
              "addressCountry": "AE"
            },
            "areaServed": [
              { "@type": "City", "name": "Dubai" },
              { "@type": "Country", "name": "United Arab Emirates" }
            ],
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
          }
        ]
      };

      let homeScript = document.getElementById('home-schema-jsonld') as HTMLScriptElement | null;
      if (!homeScript) {
        homeScript = document.createElement('script');
        homeScript.id = 'home-schema-jsonld';
        homeScript.type = 'application/ld+json';
        document.head.appendChild(homeScript);
      }
      homeScript.textContent = JSON.stringify(homeJsonLd);
    } else {
      const homeScript = document.getElementById('home-schema-jsonld');
      if (homeScript) {
        homeScript.remove();
      }
    }
  }, [location.pathname, activeTab]);

  // Navigate directly to dedicated SEO service routes
  const handleNavigateToRoute = (route: string) => {
    navigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigate back to home or a specific main tab
  const handleNavigateToTab = (tab: NavigationTab) => {
    if (location.pathname !== '/') {
      navigate('/');
    }
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper renderer for service page
  const renderServicePage = (route: string) => {
    const pageData = getServicePageByRoute(route);
    if (!pageData) {
      return <Navigate to="/" replace />;
    }
    return (
      <ServiceDetailPage 
        pageData={pageData}
        onNavigateHome={() => handleNavigateToTab('home')}
        onNavigateToRoute={handleNavigateToRoute}
        onOpenBookingModal={(serviceId) => {
          const matched = CORE_SERVICES.find(s => s.id === serviceId) || CORE_SERVICES[0];
          setSelectedServiceForBooking(matched);
        }}
      />
    );
  };

  return (
    <div className="min-h-screen bg-white text-[#0b2545] font-sans flex flex-col selection:bg-orange-500 selection:text-white relative">
      
      {/* Top Bar with Emergency Hotline & UAE Flags */}
      <TopBar />

      {/* Main Navigation Bar */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={handleNavigateToTab} 
        onNavigateToRoute={handleNavigateToRoute}
        currentPath={currentPath}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        <Routes>
          {/* Main Homepage Tab Views (Home, About, Services, Properties, Reviews, Contact) */}
          <Route 
            path="/" 
            element={
              <>
                {activeTab === 'home' && (
                  <div className="space-y-0">
                    <HeroSection 
                      onNavigate={handleNavigateToTab}
                      onNavigateToRoute={handleNavigateToRoute} 
                    />
                    <WhyChooseUs />
                    <ServicesSection 
                      onSelectServiceForBooking={(service) => setSelectedServiceForBooking(service)} 
                      onNavigateToRoute={handleNavigateToRoute}
                    />
                    <AboutSection onNavigateToContact={() => handleNavigateToTab('contact')} />
                    <PropertiesSection />
                    <ReviewsSection />
                    <ContactSection />
                  </div>
                )}

                {activeTab === 'about' && (
                  <div className="pt-6 animate-fadeIn">
                    <AboutSection onNavigateToContact={() => handleNavigateToTab('contact')} />
                    <WhyChooseUs />
                  </div>
                )}

                {activeTab === 'services' && (
                  <div className="pt-6 animate-fadeIn">
                    <ServicesSection 
                      onSelectServiceForBooking={(service) => setSelectedServiceForBooking(service)} 
                      onNavigateToRoute={handleNavigateToRoute}
                    />
                  </div>
                )}

                {activeTab === 'properties' && (
                  <div className="pt-6 animate-fadeIn">
                    <PropertiesSection />
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="pt-6 animate-fadeIn">
                    <ReviewsSection />
                  </div>
                )}

                {activeTab === 'contact' && (
                  <div className="pt-6 animate-fadeIn">
                    <ContactSection />
                  </div>
                )}
              </>
            } 
          />

          {/* Explicit 8 Dedicated Service Pages */}
          <Route path="/ac-repairing-Installation" element={renderServicePage('/ac-repairing-Installation')} />
          <Route path="/painting-ceiling" element={renderServicePage('/painting-ceiling')} />
          <Route path="/plumbing-works" element={renderServicePage('/plumbing-works')} />
          <Route path="/electrical-work" element={renderServicePage('/electrical-work')} />
          <Route path="/home-maintenance" element={renderServicePage('/home-maintenance')} />
          <Route path="/Tiling-Flooring" element={renderServicePage('/Tiling-Flooring')} />
          <Route path="/tiling-flooring" element={renderServicePage('/Tiling-Flooring')} />
          <Route path="/carpentry-works" element={renderServicePage('/carpentry-works')} />
          <Route path="/home-repair-renovation" element={renderServicePage('/home-repair-renovation')} />

          {/* Dynamic Route Handler for aliases or direct path queries */}
          <Route path="/:slug" element={<DynamicServiceRouteWrapper renderServicePage={renderServicePage} />} />

          {/* Catch-all unknown routes redirect to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Interactive Sticky WhatsApp Widget */}
      <StickyWhatsApp />

      {/* Booking Modal */}
      <BookingModal 
        service={selectedServiceForBooking} 
        onClose={() => setSelectedServiceForBooking(null)} 
      />

      {/* Official PDF Brochure Preview & Download Modal */}
      {showPdfModal && (
        <PdfBrochureModal onClose={() => setShowPdfModal(false)} />
      )}

      {/* Comprehensive Footer */}
      <Footer 
        onNavigate={handleNavigateToTab} 
        onNavigateToRoute={handleNavigateToRoute}
      />

    </div>
  );
}
