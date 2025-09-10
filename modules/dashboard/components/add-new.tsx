"use client";

import { Button } from "@/components/ui/button";
import { Plus, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import TemplateSelectionModal from "./template-selection-model";
import { toast } from "sonner";
import { createPlayground } from "../actions";
const AddNewButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<{
    title: string;
    template: "REACT" | "NEXTJS" | "EXPRESS" | "VUE" | "HONO" | "ANGULAR";
    description?: string;
  } | null>(null);
  const router = useRouter();

  const handleSubmit = async (data: {
    title: string;
    template: "REACT" | "NEXTJS" | "EXPRESS" | "VUE" | "HONO" | "ANGULAR";
    description?: string;
  }) => {
    setSelectedTemplate(data);

    const res = await createPlayground(data);
    toast.success("Playground Created successfully");
    setIsModalOpen(false);
    router.push(`/playground/${res?.id}`);
  };

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="group relative px-6 py-6 flex flex-row justify-between items-center border-2 border-transparent rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 cursor-pointer 
        transition-all duration-500 ease-out
        hover:border-gradient-to-r hover:from-blue-400 hover:to-purple-400
        hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)]
        hover:scale-[1.02] hover:-translate-y-1
        before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-blue-500/10 before:to-purple-500/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
      >
        <div className="relative z-10 flex flex-row justify-center items-start gap-4">
          <div className="relative">
            <Button
              variant={"outline"}
              className="flex justify-center items-center bg-white dark:bg-slate-800 border-2 group-hover:border-blue-400 group-hover:bg-gradient-to-r group-hover:from-blue-50 group-hover:to-purple-50 dark:group-hover:from-blue-900/30 dark:group-hover:to-purple-900/30 transition-all duration-300 shadow-lg group-hover:shadow-xl"
              size={"icon"}
            >
              <Plus
                size={24}
                className="text-blue-500 transition-all duration-300 group-hover:rotate-90 group-hover:scale-110"
              />
            </Button>
            <div className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-400 to-orange-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
              Create New Project
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-[220px] group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
              Start with a template or blank project
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
            <Plus className="w-16 h-16 text-white opacity-80" />
          </div>
        </div>
      </div>
      <TemplateSelectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default AddNewButton;
