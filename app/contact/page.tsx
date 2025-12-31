"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simuler l'envoi du formulaire
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-black">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Me Contacter
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            N'hésitez pas à me contacter pour toute question ou collaboration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Formulaire de contact */}
          <div className="bg-white dark:bg-zinc-800 rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Envoyer un message
            </h2>

            {isSubmitted ? (
              <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-4 rounded-lg mb-6">
                Merci pour votre message ! Je vous répondrai bientôt.
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-zinc-700 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-zinc-700 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-zinc-700 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-zinc-700 dark:text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Informations de contact */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-zinc-800 rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Informations de contact
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Email
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    contact@example.com
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Téléphone
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    +1 (555) 123-4567
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Localisation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Montréal, QC, Canada
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Réseaux sociaux
              </h2>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-blue-600 dark:text-blue-400 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="block text-blue-600 dark:text-blue-400 hover:underline"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="block text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
