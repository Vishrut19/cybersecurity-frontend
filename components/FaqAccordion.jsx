import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqAccordion = () => {
  const faqs = [
    {
      question: "How Can IT Companies Help Small Businesses?",
      answer:
        "IT companies assist small businesses by providing support with networking, security, software, and infrastructure management.",
    },
    {
      question: "How Can I Find the Best IT Services in Portland, Oregon?",
      answer:
        "Look for IT service providers with great reviews, certifications, and a proven track record in the Portland area.",
    },
    {
      question: "Who Provides the Best Managed Services in Portland ?",
      answer:
        "Several top-rated providers offer managed services in Portland. Comparing reviews and service offerings is key.",
    },
    {
      question: "What Is Meant by Managed IT Services?",
      answer:
        "Managed IT Services involve outsourcing IT support and management to a third-party provider.",
    },
    {
      question: "What Does Bytagig Offer Businesses?",
      answer:
        "Bytagig offers cybersecurity, cloud services, IT consulting, and managed support for small to mid-sized businesses.",
    },
    {
      question: "What Does a Fully Managed IT Environment Feature?",
      answer:
        "It features 24/7 monitoring, automatic updates, cybersecurity, helpdesk support, and infrastructure management.",
    },
  ];

  return (
    <div className="max-w-3xl px-4 py-10 text-white">
      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-b border-gray-700"
          >
            <AccordionTrigger className="text-left text-lg font-medium text-gray-300 hover:text-purple-400 transition-colors rounded-full">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 text-sm pt-2">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqAccordion;
