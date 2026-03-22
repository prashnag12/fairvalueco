import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const disputeTypes = [
  { value: "total_loss_auto", label: "Total Loss Auto" },
  { value: "property_damage", label: "Property Damage" },
  { value: "insurance_claim", label: "Insurance Claim" },
  { value: "debt_recovery", label: "Debt Recovery" },
  { value: "breach_of_contract", label: "Breach of Contract" },
  { value: "other", label: "Other" },
];

const claimValues = [
  { value: "under_10k", label: "Under $10k" },
  { value: "10k_to_50k", label: "$10k – $50k" },
  { value: "over_50k", label: "$50k+" },
];

export default function InquiryForm() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    dispute_type: "",
    case_summary: "",
    estimated_claim_value: "",
  });

  const updateField = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch("https://formspree.io/f/xreyvyaa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        full_name: form.full_name,
        email: form.email,
        phone: form.phone,
        dispute_type: form.dispute_type,
        estimated_claim_value: form.estimated_claim_value,
        case_summary: form.case_summary,
      }),
    });

    if (response.ok) {
      alert("Your request has been submitted successfully.");
      setForm({
        full_name: "",
        email: "",
        phone: "",
        dispute_type: "",
        estimated_claim_value: "",
        case_summary: "",
      });
    } else {
      alert("Submission failed. Please try again.");
    }
  } catch (error) {
    alert("There was an error submitting the form.");
  } finally {
    setIsSubmitting(false);
  }
};

  if (submitted) {
    return (
      <section id="contact" className="py-16 sm:py-24 bg-primary border-t border-white/10">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Thank You
          </h2>
          <p className="mt-4 text-white/65">
            Your inquiry has been received. Our team will review your situation and respond within 24 hours.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-primary border-t border-white/10">
      <div className="max-w-2xl mx-auto px-5 sm:px-8">
        <div className="text-center">
          <p className="text-sm font-medium text-white/60 mb-4">
            Many individuals discover gaps in their claim or case after an independent assessment.
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Start Your Free Assessment in 2 Minutes
          </h2>
          <p className="mt-4 text-white/65 max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
            No obligation. Completely confidential.
          </p>
          <p className="mt-2 text-sm font-medium text-secondary">
            Response typically within 24 hours
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 sm:mt-12 space-y-6 bg-white rounded p-8 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="full_name" className="text-sm font-semibold text-primary">Full Name</Label>
              <Input
                id="full_name"
                required
                value={form.full_name}
                onChange={(e) => updateField('full_name', e.target.value)}
                className="border-border focus:border-secondary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-semibold text-primary">Email</Label>
              <Input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => updateField('email', e.target.value)}
                className="border-border focus:border-secondary"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-semibold text-primary">
              Phone Number <span className="text-muted-foreground font-normal">(optional but preferred)</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={(e) => updateField('phone', e.target.value)}
              className="border-border focus:border-secondary"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-primary">Dispute Type</Label>
              <Select
                required
                value={form.dispute_type}
                onValueChange={(v) => updateField('dispute_type', v)}
              >
                <SelectTrigger className="border-border">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  {disputeTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-primary">Estimated Claim Value</Label>
              <Select
                required
                value={form.estimated_claim_value}
                onValueChange={(v) => updateField('estimated_claim_value', v)}
              >
                <SelectTrigger className="border-border">
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                  {claimValues.map((val) => (
                    <SelectItem key={val.value} value={val.value}>{val.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="case_summary" className="text-sm font-semibold text-primary">Case Summary</Label>
            <Textarea
              id="case_summary"
              required
              placeholder="Briefly describe your situation"
              rows={5}
              value={form.case_summary}
              onChange={(e) => updateField('case_summary', e.target.value)}
              className="border-border focus:border-secondary resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={submitting}
            size="lg"
            className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-base py-6 rounded"
          >
            {submitting ? "Submitting…" : "Submit Request"}
          </Button>

          <p className="text-center text-xs sm:text-sm text-muted-foreground mt-2">
            100% Confidential • Independent • No Upfront Cost
          </p>
        </form>
      </div>
    </section>
  );
}
