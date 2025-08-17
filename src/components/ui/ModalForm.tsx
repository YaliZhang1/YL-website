// components/ui/ModalForm.tsx
import React from "react";
import { X, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type ModalFormProps = {
  show: boolean;
  type: "form" | "meeting";
  onClose: () => void;
  formData: {
    email: string;
    message: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: () => void;
};

export const ModalForm: React.FC<ModalFormProps> = ({
  show,
  type,
  onClose,
  formData,
  onChange,
  onSubmit,
}) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[20000] px-4 pt-24">
      <div className="bg-white rounded-2xl p-6 max-w-md max-h-[90vh] w-full overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold text-blue-900 mb-2">
          {type === "meeting" ? "Book a Meeting" : "Request Early Access"}
        </h2>
        <p className="text-gray-600 mb-6">
          {type === "meeting"
            ? "Schedule a demo to see how Regnora can transform your compliance process."
            : "Get early access to Regnora and start transforming your compliance today."}
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Mail className="inline w-4 h-4 mr-2" />
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message (Optional)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={onChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Tell us about your compliance needs..."
            />
          </div>

          <Button
            variant="fancy"
            type="submit"
            className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg flex items-center justify-center"
          >
            {type === "meeting" ? "Schedule Meeting" : "Request Access"}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>
      </div>
    </div>
  );
};
