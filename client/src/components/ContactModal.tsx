"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Mail } from "lucide-react";
import { toast } from "react-hot-toast";

const ContactSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

type ContactFormValues = z.infer<typeof ContactSchema>;

export default function ContactModal() {
  const [open, setOpen] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const payload = {
        name: data.fullName, // ✅ Match backend expectation
        email: data.email,
        message: data.message,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        toast.success("✅ Message sent successfully!");
        setOpen(false);
        reset();
      } else {
        toast.error("❌ Failed to send message. Try again.");
      }
    } catch (err) {
      toast.error("⚠️ Error occurred while sending message.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="text-primary underline ml-1">Contact Support</button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <Mail size={18} /> Contact Support
        </h3>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 mt-2">
          <div>
            <Input
              autoFocus
              aria-label="Full Name"
              placeholder="Full Name"
              {...register("fullName")}
            />
            {errors.fullName && (
              <p className="text-sm text-red-500">
                {errors.fullName.message}
              </p>
            )}
          </div>
          <div>
            <Input
              aria-label="Email Address"
              placeholder="Email Address"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div>
            <Textarea
              aria-label="Message"
              rows={5}
              placeholder="Write your message here..."
              {...register("message")}
            />
            {errors.message && (
              <p className="text-sm text-red-500">{errors.message.message}</p>
            )}
          </div>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
                Sending...
              </>
            ) : (
              "Submit Request"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
