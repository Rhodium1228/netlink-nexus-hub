import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";

const formSchema = z.object({
  businessName: z.string().trim().min(1, "Business name is required").max(100),
  abn: z.string().trim().regex(/^\d{11}$/, "ABN must be exactly 11 digits"),
  postcode: z.string().trim().regex(/^\d{4}$/, "Postcode must be exactly 4 digits"),
  contactName: z.string().trim().min(1, "Contact name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(1, "Phone number is required").max(20),
  preferredPlan: z.string().min(1, "Please select a plan"),
  message: z.string().max(1000).optional()
});

type FormData = z.infer<typeof formSchema>;

interface BusinessQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPlan?: string;
}

const BusinessQuoteModal = ({ isOpen, onClose, preselectedPlan }: BusinessQuoteModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      abn: "",
      postcode: "",
      contactName: "",
      email: "",
      phone: "",
      preferredPlan: preselectedPlan || "",
      message: ""
    }
  });

  // Update form when preselected plan changes
  if (preselectedPlan && form.getValues("preferredPlan") !== preselectedPlan) {
    form.setValue("preferredPlan", preselectedPlan);
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke('send-business-quote', {
        body: data
      });

      if (error) throw error;

      toast({
        title: "Quote Request Sent!",
        description: "We'll contact you within 1 business day with a detailed quote.",
      });

      form.reset();
      onClose();
    } catch (error) {
      console.error("Error submitting quote:", error);
      toast({
        title: "Error",
        description: "Failed to send quote request. Please try again or email support@ginet.au",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary">Get Business Quote</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll send you a detailed quote within 1 business day.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="businessName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Business Pty Ltd" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="abn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ABN *</FormLabel>
                  <FormControl>
                    <Input placeholder="12345678901" maxLength={11} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="postcode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Postcode *</FormLabel>
                  <FormControl>
                    <Input placeholder="2000" maxLength={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contactName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="John Smith" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="contact@business.com.au" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone *</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="0400 000 000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="preferredPlan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Plan *</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a plan" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Business Basic">Business Basic</SelectItem>
                      <SelectItem value="Business Pro">Business Pro</SelectItem>
                      <SelectItem value="Business Halal">Business Halal</SelectItem>
                      <SelectItem value="Business Ultra">Business Ultra</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message (Optional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Any additional requirements or questions..."
                      className="resize-none"
                      rows={3}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="text-xs text-muted-foreground">
              We collect ABN & postcode for NBN eligibility. See <a href="/privacy" className="underline">privacy policy</a>.
            </div>

            <div className="flex gap-3 pt-2">
              <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting} className="flex-1 bg-primary hover:bg-primary/90">
                {isSubmitting ? "Sending..." : "Submit Quote Request"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default BusinessQuoteModal;
