"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { contactSchema, type ContactFormData } from "@/lib/validations/contact";

const services = ["Web Development", "UI/UX Design", "SaaS Engineering", "Brand Identity", "Performance Optimization", "Other"];
const budgets = ["Under $5,000", "$5,000 - $10,000", "$10,000 - $25,000", "$25,000 - $50,000", "$50,000+"];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center"
      >
        <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-slate-900 mb-2">Message Sent!</h3>
        <p className="text-slate-500">Thank you for reaching out. We will get back to you within 24 hours.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl border border-slate-200 p-6 lg:p-8"
    >
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Name *</label>
          <input {...register("name")} type="text" placeholder="Your name" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors" />
          {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Email *</label>
          <input {...register("email")} type="email" placeholder="your@email.com" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors" />
          {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Company</label>
          <input {...register("company")} type="text" placeholder="Your company (optional)" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Budget</label>
          <select {...register("budget")} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors">
            <option value="">Select budget range</option>
            {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Service *</label>
          <select {...register("service")} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors">
            <option value="">Select a service</option>
            {services.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          {errors.service && <p className="text-sm text-red-500 mt-1">{errors.service.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Message *</label>
          <textarea {...register("message")} rows={5} placeholder="Tell us about your project..." className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors resize-none" />
          {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>}
        </div>
        <button type="submit" disabled={isSubmitting} className="w-full btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed">
          {isSubmitting ? (
            <><Loader2 className="w-5 h-5 animate-spin" />Sending...</>
          ) : (
            <><>Send Message</><Send className="w-5 h-5" /></>
          )}
        </button>
      </form>
    </motion.div>
  );
}
