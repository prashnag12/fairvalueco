import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, CheckCircle } from 'lucide-react';

export default function BlogCommentForm({ postTitle }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await base44.integrations.Core.SendEmail({
      to: 'hello@fairvalueanalysis.com',
      subject: `Blog Enquiry: ${postTitle}`,
      body: `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    });
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="mt-12 border border-border rounded-lg p-8 text-center">
        <CheckCircle className="w-8 h-8 text-secondary mx-auto mb-3" />
        <p className="font-semibold text-primary">Message received!</p>
        <p className="text-sm text-muted-foreground mt-1">We'll get back to you at {form.email}.</p>
      </div>
    );
  }

  return (
    <div className="mt-12 border border-border rounded-lg p-6 sm:p-8">
      <div className="flex items-center gap-2 mb-6">
        <MessageSquare className="w-5 h-5 text-secondary" />
        <h3 className="text-base font-extrabold text-primary">Get in Touch</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-6">Have a question about this article or want to discuss your situation? Leave a message and we'll respond to your email.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="comment-name" className="text-sm font-semibold text-primary">Name</Label>
            <Input
              id="comment-name"
              required
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              className="border-border focus:border-secondary"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="comment-email" className="text-sm font-semibold text-primary">Email</Label>
            <Input
              id="comment-email"
              type="email"
              required
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              className="border-border focus:border-secondary"
            />
          </div>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="comment-message" className="text-sm font-semibold text-primary">Message</Label>
          <Textarea
            id="comment-message"
            required
            placeholder="Your question or comment…"
            rows={4}
            value={form.message}
            onChange={(e) => update('message', e.target.value)}
            className="border-border focus:border-secondary resize-none"
          />
        </div>
        <Button
          type="submit"
          disabled={submitting}
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded px-6"
        >
          {submitting ? 'Sending…' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
}