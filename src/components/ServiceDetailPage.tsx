import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ServicePageData } from '../types';
import { PHONE_NUMBER, PHONE_CLEAN, WHATSAPP_LINK } from '../data/servicesData';
import { SERVICE_PAGES } from '../data/servicePagesData';
import { 
  Phone, 
  MessageSquare, 
  CalendarCheck2, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  HelpCircle, 
  ChevronDown, 
  Sparkles,
  MapPin,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

interface ServiceDetailPageProps {
  pageData: ServicePageData;
  onNavigateHome: () => void;
  onNavigateToRoute: (route: string) => void;
  onOpenBookingModal: (serviceId: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  pageData,
  onNavigateHome,
  onNavigateToRoute,
  onOpenBookingModal
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Update SEO Document Title, Meta Description, Open Graph, Twitter & Schema
  useEffect(() => {
    document.title = pageData.metaTitle;

    const setMetaTag = (attr: 'name' | 'property', key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMetaTag('name', 'description', pageData.metaDescription);
    setMetaTag('name', 'robots', 'index, follow');
    if (pageData.keywords && pageData.keywords.length > 0) {
      setMetaTag('name', 'keywords', pageData.keywords.join(', '));
    }
    setMetaTag('property', 'og:title', pageData.metaTitle);
    setMetaTag('property', 'og:description', pageData.metaDescription);
    setMetaTag('property', 'og:url', `https://fixdubai.pro${pageData.slug}`);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', 'Fix Dubai');

    if (pageData.heroImage) {
      const fullImageUrl = pageData.heroImage.startsWith('http')
        ? pageData.heroImage
        : `https://fixdubai.pro${pageData.heroImage}`;
      setMetaTag('property', 'og:image', fullImageUrl);
      setMetaTag('name', 'twitter:image', fullImageUrl);
    }
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', pageData.metaTitle);
    setMetaTag('name', 'twitter:description', pageData.metaDescription);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', `https://fixdubai.pro${pageData.slug}`);

    // Structured Data JSON-LD
    const jsonLdData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
          "@id": "https://fixdubai.pro/#localbusiness",
          "name": "Fix Dubai",
          "url": "https://fixdubai.pro",
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
        },
        {
          "@type": "Service",
          "@id": `https://fixdubai.pro${pageData.slug}#service`,
          "name": pageData.title,
          "serviceType": pageData.category,
          "description": pageData.metaDescription,
          "url": `https://fixdubai.pro${pageData.slug}`,
          "provider": {
            "@id": "https://fixdubai.pro/#localbusiness"
          },
          "areaServed": {
            "@type": "City",
            "name": "Dubai"
          }
        },
        {
          "@type": "FAQPage",
          "@id": `https://fixdubai.pro${pageData.slug}#faq`,
          "mainEntity": pageData.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        },
        {
          "@type": "BreadcrumbList",
          "@id": `https://fixdubai.pro${pageData.slug}#breadcrumb`,
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://fixdubai.pro/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Our Services",
              "item": "https://fixdubai.pro/#services"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": pageData.title,
              "item": `https://fixdubai.pro${pageData.slug}`
            }
          ]
        }
      ]
    };

    let scriptTag = document.getElementById('service-schema-jsonld') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'service-schema-jsonld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(jsonLdData);

    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      const existingScript = document.getElementById('service-schema-jsonld');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [pageData]);

  const serviceWaText = encodeURIComponent(
    `Hello FIX DUBAI,\n\nI am visiting your website on https://fixdubai.pro${pageData.slug}.\nI need urgent service for *${pageData.title}* in Dubai.\n\nPlease provide a quote and technician availability.`
  );
  const serviceWhatsAppUrl = `https://wa.me/971568374070?text=${serviceWaText}`;

  const relatedServicesList = pageData.relatedSlugs
    .map(slug => SERVICE_PAGES[slug])
    .filter(Boolean);

  return (
    <div className="bg-white text-[#0b2545] min-h-screen">
      
      {/* Breadcrumbs Navigation */}
      <div className="bg-gray-50 border-b border-gray-200 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-600 font-medium">
          <Link 
            to="/"
            onClick={onNavigateHome}
            className="hover:text-[#ea580c] transition flex items-center gap-1 font-semibold"
          >
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link 
            to="/"
            onClick={onNavigateHome}
            className="hover:text-[#ea580c] transition font-semibold"
          >
            Our Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-[#ea580c] font-bold truncate max-w-[200px] sm:max-w-none">
            {pageData.title}
          </span>
        </div>
      </div>

      {/* Main Hero Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-8 pb-16 lg:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Heading, Meta, CTAs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Category & Badge */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="bg-orange-100 text-[#ea580c] text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  {pageData.category}
                </span>
                {pageData.emergencyAvailable && (
                  <span className="bg-red-100 text-red-700 text-xs font-black px-3 py-1 rounded-full flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> 24/7 Rapid Emergency Response
                  </span>
                )}
                <span className="bg-blue-50 text-[#0b2545] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" /> 25+ Years UAE Experience
                </span>
              </div>

              {/* H1 Heading */}
              <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-5xl text-[#0b2545] tracking-tight leading-[1.15]">
                {pageData.h1}
              </h1>

              {/* Subtitle */}
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
                {pageData.h1Subtitle}
              </p>

              {/* Key Quick Guarantee Stats */}
              <div className="grid grid-cols-2 gap-3 pt-2 pb-2">
                <div className="bg-white p-3.5 rounded-2xl border border-gray-200 shadow-xs">
                  <span className="block text-[11px] text-gray-500 font-bold uppercase tracking-wider">Response Time</span>
                  <span className="font-heading font-black text-lg sm:text-xl text-[#ea580c]">{pageData.responseTime}</span>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-gray-200 shadow-xs">
                  <span className="block text-[11px] text-gray-500 font-bold uppercase tracking-wider">Guarantee</span>
                  <span className="font-heading font-bold text-xs sm:text-sm text-green-700 leading-tight block mt-1">100% Quality Guaranteed</span>
                </div>
              </div>

              {/* Dual Primary Call-to-Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <a
                  href={`tel:${PHONE_CLEAN}`}
                  className="flex-1 flex items-center justify-center gap-2.5 bg-[#0b2545] hover:bg-[#134074] text-white font-extrabold px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition duration-200 text-sm sm:text-base group"
                >
                  <Phone className="w-5 h-5 text-[#f59e0b] group-hover:rotate-12 transition-transform" />
                  <span>Call {PHONE_NUMBER}</span>
                </a>

                <a
                  href={serviceWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-emerald-600 text-white font-extrabold px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition duration-200 text-sm sm:text-base group"
                >
                  <MessageSquare className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  <span>WhatsApp Technician</span>
                </a>

                <button
                  onClick={() => onOpenBookingModal(pageData.serviceId)}
                  className="sm:w-auto flex items-center justify-center gap-2 bg-[#ea580c] hover:bg-orange-600 text-white font-extrabold px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition duration-200 text-sm sm:text-base"
                >
                  <CalendarCheck2 className="w-5 h-5" />
                  <span>Book Online</span>
                </button>
              </div>

              {/* Trust Subtext */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 font-medium pt-1">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-600" /> DEWA & Dubai Municipality Compliant
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-600" /> Transparent AED Quotes
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-600" /> Certified Technicians
                </span>
              </div>

            </div>

            {/* Right Column: Hero Visual & Fast Estimate Trigger */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100 group">
                <img 
                  src={pageData.heroImage} 
                  alt={pageData.imageAlt || pageData.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 lg:h-[430px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b2545]/80 via-transparent to-transparent" />
                
                {/* Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/40">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase text-[#ea580c] tracking-wider block">
                        Official FIX DUBAI Guarantee
                      </span>
                      <p className="font-heading font-black text-sm sm:text-base text-[#0b2545]">
                        {pageData.warranty}
                      </p>
                    </div>
                    <a
                      href={serviceWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-extrabold px-3 py-2 rounded-xl transition flex items-center gap-1 shrink-0"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Inquire Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Overview & UAE Context Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">
            <span className="text-xs font-black tracking-widest text-[#ea580c] uppercase bg-orange-100 px-3 py-1 rounded-full">
              Expert UAE Perspective
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-[#0b2545]">
              Tailored Technical Mastery for Dubai & UAE Homes
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4 text-base sm:text-lg leading-relaxed font-normal">
              {pageData.overview.map((para, idx) => (
                <p key={idx} className="leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Natural Internal Links Notice */}
            {pageData.internalLinks && pageData.internalLinks.length > 0 && (
              <div className="mt-8 bg-blue-50/70 border border-blue-100 rounded-2xl p-5 sm:p-6 space-y-3 not-prose">
                <span className="text-xs font-extrabold uppercase text-[#0b2545] tracking-wider block">
                  Related Dubai Property Services
                </span>
                <div className="space-y-2 text-sm sm:text-base text-gray-700">
                  {pageData.internalLinks.map((linkItem, lIdx) => (
                    <p key={lIdx} className="leading-relaxed">
                      {linkItem.prefixText}{' '}
                      <Link
                        to={linkItem.route}
                        onClick={() => onNavigateToRoute(linkItem.route)}
                        className="text-[#ea580c] font-bold hover:underline inline-flex items-center gap-0.5"
                      >
                        <span>{linkItem.anchorText}</span>
                        <ChevronRight className="w-3.5 h-3.5 inline text-[#ea580c]" />
                      </Link>
                      {linkItem.suffixText ? ` ${linkItem.suffixText}` : ''}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Detailed Services Scope Grid */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black tracking-widest text-[#ea580c] uppercase bg-orange-100 px-3 py-1 rounded-full">
              Comprehensive Service Scope
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-[#0b2545] mt-3">
              Full Range of {pageData.title}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              Every job is executed by trained specialists equipped with professional diagnostic and installation gear.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pageData.detailedServicesList.map((srv, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#ea580c] flex items-center justify-center font-bold text-sm mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#0b2545] mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {srv.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#ea580c]">
                  <span>Included in Service</span>
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Key Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-black tracking-widest text-[#ea580c] uppercase bg-orange-100 px-3 py-1 rounded-full">
                The FIX DUBAI Advantage
              </span>
              <h2 className="font-heading font-black text-2xl sm:text-4xl text-[#0b2545]">
                Why UAE Property Owners Trust Our Workmanship
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Operating continuously across Dubai for 25+ years, we built our reputation on punctuality, pristine cleanliness, and uncompromised technical integrity.
              </p>

              <div className="bg-[#0b2545] text-white p-6 rounded-2xl space-y-3">
                <span className="text-xs text-orange-400 font-black uppercase tracking-wider block">
                  Direct Line to Master Technician
                </span>
                <p className="text-sm text-gray-200">
                  Speak directly with a senior technical supervisor, not an automated call center. Get instant troubleshooting advice over the phone.
                </p>
                <a
                  href={`tel:${PHONE_CLEAN}`}
                  className="inline-flex items-center gap-2 bg-[#ea580c] hover:bg-orange-600 text-white font-extrabold px-4 py-2.5 rounded-xl text-xs transition"
                >
                  <Phone className="w-3.5 h-3.5" /> Call Hotline: {PHONE_NUMBER}
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {pageData.whyChooseUs.map((benefit, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-200/80">
                  <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#ea580c] flex items-center justify-center mb-3">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#0b2545] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black tracking-widest text-[#ea580c] uppercase bg-orange-100 px-3 py-1 rounded-full">
              Common Questions
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-[#0b2545] mt-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              Need immediate answers? Read our verified guide for UAE property owners.
            </p>
          </div>

          <div className="space-y-3.5">
            {pageData.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs transition"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-heading font-bold text-sm sm:text-base text-[#0b2545] hover:text-[#ea580c] transition"
                  >
                    <span className="flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-[#ea580c] shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dubai & UAE Coverage Areas Badges */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-black text-[#ea580c] uppercase tracking-wider mb-3">
            <MapPin className="w-4 h-4" /> Service Coverage Across Dubai & Northern Emirates
          </div>
          <p className="text-gray-600 text-xs sm:text-sm max-w-2xl mx-auto mb-6">
            Our mobile response teams operate 24/7 across all major gated villa communities, luxury freehold towers, and commercial hubs:
          </p>
          <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
            {pageData.coverageAreas.map((area, i) => (
              <span key={i} className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-gray-200">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services Links Section for Clean Internal Linking */}
      {relatedServicesList.length > 0 && (
        <section className="py-16 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-xs font-black tracking-widest text-[#ea580c] uppercase bg-orange-100 px-3 py-1 rounded-full">
                  Cross-Division Maintenance
                </span>
                <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#0b2545] mt-2">
                  Other Specialized UAE Services
                </h2>
              </div>
              <Link 
                to="/"
                onClick={onNavigateHome} 
                className="text-xs font-bold text-[#ea580c] hover:underline flex items-center gap-1 self-start sm:self-auto"
              >
                <span>View All 8 Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServicesList.map((rel) => (
                <Link 
                  key={rel.slug}
                  to={rel.slug}
                  onClick={() => onNavigateToRoute(rel.slug)}
                  className="bg-white rounded-2xl p-5 border border-gray-200 shadow-xs hover:shadow-lg transition cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-extrabold text-[#ea580c] uppercase tracking-wider block mb-1">
                      {rel.category}
                    </span>
                    <h3 className="font-heading font-black text-lg text-[#0b2545] group-hover:text-[#ea580c] transition">
                      {rel.title}
                    </h3>
                    <p className="text-gray-600 text-xs mt-2 line-clamp-2 leading-relaxed">
                      {rel.h1Subtitle}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold">
                    <span className="text-gray-500 font-semibold">Free Quote & Inspection</span>
                    <span className="text-[#ea580c] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      View Service Details →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom Conversion Sticky Banner */}
      <section className="bg-gradient-to-r from-[#0b2545] via-[#134074] to-[#0b2545] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-xs font-black uppercase text-[#f59e0b] tracking-wider block mb-1">
              Ready for Fast, Guaranteed Repairs?
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl tracking-tight">
              Get an Instant Free Quote for {pageData.title}
            </h2>
            <p className="text-gray-300 text-sm mt-1 max-w-xl">
              Technicians on standby across Dubai 24/7. Call our emergency hotline or message our technical desk on WhatsApp.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${PHONE_CLEAN}`}
              className="bg-[#ea580c] hover:bg-orange-600 text-white font-extrabold px-6 py-3.5 rounded-xl shadow-lg transition flex items-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>

            <a
              href={serviceWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-emerald-600 text-white font-extrabold px-6 py-3.5 rounded-xl shadow-lg transition flex items-center gap-2 text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>

            <button
              onClick={() => onOpenBookingModal(pageData.serviceId)}
              className="bg-white hover:bg-gray-100 text-[#0b2545] font-extrabold px-6 py-3.5 rounded-xl shadow-lg transition flex items-center gap-2 text-sm"
            >
              <CalendarCheck2 className="w-4 h-4" />
              <span>Book Online</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
