import React, { useState } from 'react';
import { CUSTOMER_REVIEWS } from '../data/servicesData';
import { ReviewItem } from '../types';
import { Star, CheckCircle2, MessageSquarePlus, ShieldCheck, ThumbsUp } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>(CUSTOMER_REVIEWS);
  const [showModal, setShowModal] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    location: 'Dubai, UAE',
    serviceUsed: 'AC Repairing & Installation',
    reviewText: '',
    rating: 5
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.reviewText) return;

    const item: ReviewItem = {
      id: `rev-${Date.now()}`,
      name: newReview.name,
      location: newReview.location,
      rating: newReview.rating,
      date: 'Just now',
      serviceUsed: newReview.serviceUsed,
      reviewText: `"${newReview.reviewText}"`,
      verified: true
    };

    setReviews([item, ...reviews]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowModal(false);
      setNewReview({ name: '', location: 'Dubai, UAE', serviceUsed: 'AC Repairing & Installation', reviewText: '', rating: 5 });
    }, 1800);
  };

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-black tracking-widest text-[#ea580c] uppercase bg-orange-100 px-3.5 py-1.5 rounded-full">
              Real Client Feedback
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#0b2545] mt-3">
              Trusted by Homeowners Across the UAE
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mt-3">
              Read transparent reviews from clients in Dubai, Abu Dhabi, and Sharjah who experienced our fast, clean, and reliable maintenance squad first-hand.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200 flex items-center gap-3">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <div>
                <span className="font-heading font-black text-xl text-[#0b2545]">4.9 / 5.0</span>
                <span className="text-xs text-gray-500 block">Over 1,200+ Verified Jobs</span>
              </div>
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#0b2545] hover:bg-blue-900 text-white font-extrabold px-5 py-4 rounded-2xl shadow transition text-sm"
            >
              <MessageSquarePlus className="w-5 h-5 text-[#f59e0b]" />
              <span>Leave Your Review</span>
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div 
              key={rev.id}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col justify-between relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-400 font-medium">{rev.date}</span>
                </div>

                {/* Review Text exact from blueprint */}
                <p className="text-gray-800 font-medium text-sm sm:text-base italic leading-relaxed mb-6">
                  {rev.reviewText}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-heading font-black text-base text-[#0b2545]">{rev.name}</span>
                    {rev.verified && (
                      <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" title="Verified UAE Homeowner" />
                    )}
                  </div>
                  <span className="text-xs text-gray-500 block">{rev.location}</span>
                  <span className="text-[11px] font-bold text-[#ea580c] block mt-0.5">{rev.serviceUsed}</span>
                </div>

                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0b2545]">
                  <ThumbsUp className="w-4 h-4" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Submit Review Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-gray-100 relative">
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-[#ea580c]" />
                  <h3 className="font-heading font-black text-xl text-[#0b2545]">Share Your Experience</h3>
                </div>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-700 font-black text-lg p-1"
                >
                  ✕
                </button>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-heading font-black text-2xl text-[#0b2545]">Review Submitted!</h4>
                  <p className="text-gray-600 text-sm">Thank you for cooperation and helping UAE neighbors find clean & reliable maintenance.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div>
                    <label className="block text-xs font-extrabold text-gray-700 uppercase mb-1">Your Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Tariq K."
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-extrabold text-gray-700 uppercase mb-1">Emirate / Area</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Dubai Marina"
                        value={newReview.location}
                        onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-extrabold text-gray-700 uppercase mb-1">Rating</label>
                      <select
                        value={newReview.rating}
                        onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none text-sm bg-white"
                      >
                        <option value={5}>⭐⭐⭐⭐⭐ (5 Stars)</option>
                        <option value={4}>⭐⭐⭐⭐ (4 Stars)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-gray-700 uppercase mb-1">Service Completed</label>
                    <input 
                      type="text" 
                      placeholder="e.g. AC Repair / Kitchen Tiling"
                      value={newReview.serviceUsed}
                      onChange={(e) => setNewReview({ ...newReview, serviceUsed: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-gray-700 uppercase mb-1">Your Honest Feedback</label>
                    <textarea 
                      required
                      rows={3}
                      placeholder="Tell us about the clean execution, prompt arrival, and pricing..."
                      value={newReview.reviewText}
                      onChange={(e) => setNewReview({ ...newReview, reviewText: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none text-sm"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#ea580c] hover:bg-orange-600 text-white font-extrabold py-3.5 rounded-xl shadow-lg transition text-sm"
                    >
                      Publish Verified Review
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
