import { useState } from 'react';
import { XMarkIcon, PaperAirplaneIcon, CheckCircleIcon, MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';
import parse from 'html-react-parser';
import { useContactDetails } from '../hooks/useSanity';

interface ContactPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactPanel({ isOpen, onClose, contactDetails, loading }: any) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Call our serverless API endpoint instead of Resend directly
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.details || data.error || 'Erreur lors de l\'envoi du message');
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitError(
        error instanceof Error 
          ? error.message 
          : 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    // Clear error message when user starts editing
    if (submitError) {
      setSubmitError(null);
    }
    
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full md:w-1/2 bg-white z-50 shadow-2xl transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between p-6 border-b-4 border-black bg-black text-white">
            <h2 className="text-2xl font-bold">Contactez-nous</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 transition-colors"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="p-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href={`tel:${contactDetails?.phone || ''}`}
                  className="group bg-gray-50 p-6 border-2 border-gray-200 hover:border-[#ff1616] transition-all duration-300"
                >
                  <PhoneIcon className="w-8 h-8 text-black mb-3 group-hover:text-[#ff1616] transition-colors" />
                  <div className="text-sm text-gray-500 mb-1">Téléphone</div>
                  <div className="text-black font-semibold">{contactDetails?.phoneDisplay || ''}</div>
                </a>

                <a
                  href={`mailto:${contactDetails?.email || ''}`}
                  className="group bg-gray-50 p-6 border-2 border-gray-200 hover:border-[#ff1616] transition-all duration-300"
                >
                  <EnvelopeIcon className="w-8 h-8 text-black mb-3 group-hover:text-[#ff1616] transition-colors" />
                  <div className="text-sm text-gray-500 mb-1">Email</div>
                  <div className="text-black font-semibold text-sm">{contactDetails?.email || ''}</div>
                </a>
              </div>

              {isSubmitted ? (
                <div className="py-16 text-center">
                  <div className="inline-flex w-20 h-20 bg-[#ff1616] items-center justify-center mb-6">
                    <CheckCircleIcon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Message envoyé !</h3>
                  <p className="text-xl text-gray-600">
                    Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Envoyez-nous un message</h3>
                  </div>

                  {submitError && (
                    <div className="p-4 bg-red-50 border-2 border-red-500 text-red-700">
                      <p className="font-semibold mb-1">Erreur d'envoi</p>
                      <p className="text-sm">{submitError}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 focus:outline-none focus:border-[#ff1616] transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                        Nom *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 focus:outline-none focus:border-[#ff1616] transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:outline-none focus:border-[#ff1616] transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:outline-none focus:border-[#ff1616] transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:outline-none focus:border-[#ff1616] transition-all duration-300 font-semibold cursor-pointer"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="Demande d'information">Demande d'information</option>
                      <option value="Question sur un véhicule">Question sur un véhicule</option>
                      <option value="Service de sourcing">Service de sourcing</option>
                      <option value="Estimation de mon véhicule">Estimation de mon véhicule</option>
                      <option value="Prise de rendez-vous">Prise de rendez-vous</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:outline-none focus:border-[#ff1616] transition-all duration-300 resize-none"
                      placeholder="Décrivez-nous votre projet..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`group w-full flex items-center justify-center gap-3 px-8 py-4 bg-black text-white font-bold text-lg transition-all duration-300 ${
                      isSubmitting 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:bg-[#ff1616]'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <PaperAirplaneIcon className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        <span>Envoyer le message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

              <div className="pt-8 border-t-2 border-gray-200 space-y-4">
                <h3 className="text-lg font-bold mb-4">Informations pratiques</h3>

                <div className="flex items-start gap-4 p-4 bg-gray-50">
                  <MapPinIcon className="w-5 h-5 text-[#ff1616] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Adresse</div>
                    <div className="text-sm text-gray-600">
                     {parse(contactDetails?.address || '')}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50">
                  <ClockIcon className="w-5 h-5 text-[#ff1616] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Horaires</div>
                    <div className="text-sm text-gray-600 space-y-1">
                     {parse(contactDetails?.horaire || '')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
