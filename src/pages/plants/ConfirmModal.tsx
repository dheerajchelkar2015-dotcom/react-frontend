// src/components/ConfirmModal.tsx
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

interface ConfirmModalProps {
  open: boolean;
  title?: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmModal({ open, title = "Confirm", message, onConfirm, onCancel }: ConfirmModalProps) {
  // Disable background scroll when modal is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0 z-50 flex items-center justify-center
        bg-black/30 backdrop-blur-sm
      "
    >
      <div
        className="
          w-full max-w-sm p-6
          rounded-2xl
          bg-[#eaf0ec]
          shadow-[8px_8px_16px_#cfd8d3,-8px_-8px_16px_#ffffff]
          dark:bg-[#0f172a]
          dark:shadow-[8px_8px_16px_#020617,-8px_-8px_16px_#1f2933]
          flex flex-col gap-4
          animate-fade-in
        "
      >
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          {title}
        </h3>

        {/* Message */}
        <p className="text-sm text-gray-600 dark:text-gray-200">{message}</p>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-4">
          <Button
            size="sm"
            className="
           w-20
              rounded-xl
            bg-[#eaf0ec] text-gray-800
            shadow-[5px_5px_10px_#cfd8d3,-5px_-5px_10px_#ffffff]
            hover:text-emerald-700
              hover:bg-[#eaf0ec]
            hover:shadow-[inset_4px_4px_8px_#cfd8d3,inset_-4px_-4px_8px_#ffffff]

            dark:bg-[#0f172a] dark:text-emerald-400
            dark:shadow-[5px_5px_10px_#020617,-5px_-5px_10px_#1f2933]
            dark:hover:shadow-[inset_4px_4px_8px_#020617,inset_-4px_-4px_8px_#1f2933]
        
            transition-all
          "
            onClick={onCancel}
          >
            No
          </Button>

          <Button
            size="sm"
            className="
           w-20
              rounded-xl
            bg-[#eaf0ec] text-gray-800
            shadow-[5px_5px_10px_#cfd8d3,-5px_-5px_10px_#ffffff]
         hover:text-red-600
hover:bg-[#eaf0ec]
hover:shadow-[inset_4px_4px_8px_#d6bcbc,inset_-4px_-4px_8px_#ffffff]

dark:hover:text-red-400
dark:hover:bg-[#0f172a]
dark:hover:shadow-[inset_4px_4px_8px_#020617,inset_-4px_-4px_8px_#1f2933]

        
            transition-all
          "
            onClick={onConfirm}
          >
            Yes
          </Button>
        </div>
      </div>
    </div>
  );
}
