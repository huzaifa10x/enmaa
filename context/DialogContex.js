"use client";

import QuoteModal from "@/app/components/multi-step-form";
import React, { createContext, useContext, useState, useEffect } from "react";

const DialogContext = createContext();

export function DialogProvider({ children }) {
    const [dialogConfig, setDialogConfig] = useState({
        isOpen: false,
        props: {},
    });

    // Scroll lock logic
    useEffect(() => {
        document.body.style.overflow = dialogConfig.isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [dialogConfig.isOpen]);

    // Simplified to accept just the props (like isArabic)
    const openDialog = (props = {}) => {
        setDialogConfig({ isOpen: true, props });
    };

    const closeDialog = () => {
        setDialogConfig({ isOpen: false, props: {} });
    };

    return (
        <DialogContext.Provider value={{ openDialog, closeDialog }}>
            {children}

            {/* QuoteModal is conditionally rendered and receives context state */}
            {dialogConfig.isOpen && (
                <QuoteModal
                    open={dialogConfig.isOpen}
                    onClose={closeDialog}
                    {...dialogConfig.props}
                />
            )}
        </DialogContext.Provider>
    );
}

export const useDialog = () => useContext(DialogContext);