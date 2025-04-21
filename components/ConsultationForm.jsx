"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ClipButtonWithBackground from "./ClipButtonWithBackground";

export default function ConsultationForm() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        className="w-full max-w-2xl space-y-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <span>First Name *</span>
            <Input
              placeholder="First name"
              className="mt-4 bg-transparent border border-white/20 text-white rounded-[0.75rem_0_0.75rem_0] px-4 py-3 focus:ring-2 focus:ring-violet-500"
            />
          </div>
          <div className="flex flex-col">
            <span>Last Name *</span>
            <Input
              placeholder="Last name"
              className="mt-4 bg-transparent border border-white/20 text-white rounded-[0.75rem_0_0.75rem_0] px-4 py-3 focus:ring-2 focus:ring-violet-500"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <span>Email *</span>
          <Input
            placeholder="Email"
            className="mt-4 bg-transparent border border-white/20 text-white rounded-[0.75rem_0_0.75rem_0] px-4 py-3 focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div className="flex flex-col">
          <span>Company </span>
          <Input
            placeholder="Company"
            className="mt-4 bg-transparent border border-white/20 text-white px-4 py-3 rounded-[0.75rem_0_0.75rem_0] focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div className="flex flex-col">
          <span>Where did you hear about CTRL?</span>
          <Textarea
            placeholder="Where did you hear about CTRL?"
            className="mt-4 bg-transparent border border-white/20 text-white px-4 py-3 rounded-[0.75rem_0_0.75rem_0] focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <ClipButtonWithBackground
          buttonName={"Submit"}
          type="submit"
          style={{ width: "100%" }}
        />
      </form>
    </div>
  );
}
