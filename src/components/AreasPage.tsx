import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, ArrowRight } from 'lucide-react';
import { DUBAI_AREAS } from '../data/servicesData';

const AreasPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Home Maintenance Service Areas in Dubai | Fix Dubai';

    const description =
      'Fix Dubai provides home maintenance, AC repair, plumbing, electrical, painting, carpentry, tiling and renovation services across Dubai areas.';

    let meta = document.querySelector('meta[name="description"]');

    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }

    meta.setAttribute('content', description);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-orange-400 mb-4">
              <MapPin size={20} />
              <span className="font-semibold uppercase tracking-wide">
                Dubai Service Areas
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Home Maintenance Services Across Dubai
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl">
              Fix Dubai provides reliable home maintenance and repair services
              across residential communities and properties throughout Dubai,
              UAE.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">
              Home Maintenance in Dubai Areas
            </h2>

            <p className="text-slate-600 text-lg leading-8">
              Our team provides professional AC repair and installation,
              plumbing, electrical work, painting, ceiling work, carpentry,
              tiling, flooring, home repairs and renovation services across
              Dubai. Select your area below to learn more about our service
              coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">
            Areas We Serve in Dubai
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {DUBAI_AREAS.map((area) => (
              <div
                key={area}
                className="group border border-slate-200 rounded-xl p-5 bg-white hover:shadow-lg hover:border-orange-400 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-orange-500">
                      <MapPin size={19} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {area}
                      </h3>
                      <p className="text-sm text-slate-500 mt-1">
                        Home maintenance services
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    size={18}
                    className="text-slate-400 group-hover:text-orange-500 transition-colors"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">
            Our Home Services in Dubai
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <Link
              to="/ac-repairing-installation"
              className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition"
            >
              <h3 className="font-bold text-slate-900 mb-2">
                AC Repair & Installation
              </h3>
              <span className="text-orange-500 text-sm font-semibold">
                View Service →
              </span>
            </Link>

            <Link
              to="/plumbing-works"
              className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition"
            >
              <h3 className="font-bold text-slate-900 mb-2">
                Plumbing Works
              </h3>
              <span className="text-orange-500 text-sm font-semibold">
                View Service →
              </span>
            </Link>

            <Link
              to="/electrical-work"
              className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition"
            >
              <h3 className="font-bold text-slate-900 mb-2">
                Electrical Work
              </h3>
              <span className="text-orange-500 text-sm font-semibold">
                View Service →
              </span>
            </Link>

            <Link
              to="/painting-ceiling"
              className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition"
            >
              <h3 className="font-bold text-slate-900 mb-2">
                Painting & Ceiling
              </h3>
              <span className="text-orange-500 text-sm font-semibold">
                View Service →
              </span>
            </Link>

            <Link
              to="/home-maintenance"
              className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition"
            >
              <h3 className="font-bold text-slate-900 mb-2">
                Home Maintenance
              </h3>
              <span className="text-orange-500 text-sm font-semibold">
                View Service →
              </span>
            </Link>

            <Link
              to="/tiling-flooring"
              className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition"
            >
              <h3 className="font-bold text-slate-900 mb-2">
                Tiling & Flooring
              </h3>
              <span className="text-orange-500 text-sm font-semibold">
                View Service →
              </span>
            </Link>

            <Link
              to="/carpentry-works"
              className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition"
            >
              <h3 className="font-bold text-slate-900 mb-2">
                Carpentry Works
              </h3>
              <span className="text-orange-500 text-sm font-semibold">
                View Service →
              </span>
            </Link>

            <Link
              to="/home-repair-renovation"
              className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition"
            >
              <h3 className="font-bold text-slate-900 mb-2">
                Home Repair & Renovation
              </h3>
              <span className="text-orange-500 text-sm font-semibold">
                View Service →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Need Home Maintenance in Dubai?
          </h2>

          <p className="text-slate-300 text-lg mb-8">
            Contact Fix Dubai for reliable home repair and maintenance services
            in your area.
          </p>

          <a
            href="tel:+971568374070"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-4 rounded-xl transition"
          >
            <Phone size={20} />
            Call Fix Dubai
          </a>
        </div>
      </section>
    </div>
  );
};

export default AreasPage;
