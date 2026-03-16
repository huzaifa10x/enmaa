"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Upload, Check, ChevronRight, ChevronLeft, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";


// --- Constants ---
const translations = {
    en: {
        steps: [
            { id: 1, title: "Personal Info" },
            { id: 2, title: "Project Details" },
            { id: 3, title: "Services" },
            { id: 4, title: "Requirements" },
            { id: 5, title: "Notes" },
        ],

        projectTypes: [
            "Residential Villa",
            "Commercial Building",
            "Renovation",
            "Exterior Design",
            "Engineering Supervision",
            "Other",
        ],

        servicesList: [
            "Architectural Design",
            "Structural Drawings",
            "Electrical & Mechanical Drawings",
            "3D Visualization",
            "Facade Design",
            "Engineering Supervision",
            "Building Permits",
        ],
    },

    ar: {
        steps: [
            { id: 1, title: "المعلومات الشخصية" },
            { id: 2, title: "تفاصيل المشروع" },
            { id: 3, title: "الخدمات" },
            { id: 4, title: "المتطلبات" },
            { id: 5, title: "ملاحظات" },
        ],

        projectTypes: [
            "فيلا سكنية",
            "مبنى تجاري",
            "تجديد",
            "تصميم خارجي",
            "إشراف هندسي",
            "أخرى",
        ],

        servicesList: [
            "التصميم المعماري",
            "الرسومات الإنشائية",
            "رسومات الكهرباء والميكانيكا",
            "تصور ثلاثي الأبعاد",
            "تصميم الواجهات",
            "الإشراف الهندسي",
            "تصاريح البناء",
        ],
    },
};

// --- Zod Schema ---
// --- Zod Schema (Any language allowed in inputs) ---
const getFormSchema = () => {
    return z.object({
        fullName: z.string().min(2, "Name is required"),
        email: z.string().email("Invalid email address"),
        phoneNumber: z.string().min(5, "Phone number is required"),
        hearAbout: z.string().optional(),

        projectType: z.string().min(1, "Project type is required"),
        projectTypeOther: z.string().optional(),

        projectLocation: z.string().min(2, "Location is required"),

        plotSize: z.string().optional(),
        builtUpArea: z.string().optional(),
        budget: z.string().optional(),

        services: z.array(z.string()).refine((val) => val.length > 0, {
            message: "Select at least one service.",
        }),

        hasExistingDrawings: z.enum(["yes", "no"]),
        requireSiteVisit: z.enum(["yes", "no"]),

        preferredStyles: z.string().optional(),
        pinterestLink: z.string().url("Invalid URL").optional().or(z.literal("")),
        additionalNotes: z.string().optional(),
    });
};
// .refine((data) => {
//     if (!data.plotSize || !data.builtUpArea) return true;
//     const plot = Number(data.plotSize);
//     const built = Number(data.builtUpArea);
//     if (isNaN(plot) || isNaN(built)) return true;
//     return built < plot;
// }, {
//     message: "Value should be less than Plot Size",
//     path: ["builtUpArea"],
// });

export default function QuoteModal({ text, isArabic }) {
    const [open, setOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);


    const form = useForm({
        resolver: zodResolver(getFormSchema()), // No more isArabic dependency
        defaultValues: {
            fullName: "",
            email: "",
            phoneNumber: "",
            hearAbout: "",
            projectType: "",
            projectTypeOther: "",
            projectLocation: "",
            plotSize: "",
            builtUpArea: "",
            budget: "",
            services: [],
            hasExistingDrawings: "no",
            requireSiteVisit: "no",
            preferredStyles: "",
            pinterestLink: "",
            additionalNotes: "",
        },
        mode: "onChange",
    });

    const { watch, trigger } = form;
    const projectType = watch("projectType");
    const hasExistingDrawings = watch("hasExistingDrawings");

    // --- Navigation Logic ---
    const handleNext = async () => {
        let fieldsToValidate = [];

        switch (currentStep) {
            case 1:
                fieldsToValidate = ["fullName", "email", "phoneNumber"];
                break;
            case 2:
                fieldsToValidate = ["projectType", "projectLocation"];
                if (projectType === "Other") fieldsToValidate.push("projectTypeOther");
                break;
            case 3:
                fieldsToValidate = ["services"];
                break;
            case 4:
                fieldsToValidate = ["hasExistingDrawings", "requireSiteVisit"];
                if (watch("pinterestLink")) fieldsToValidate.push("pinterestLink");
                break;
            case 5:
                // No strict required fields in notes
                fieldsToValidate = [];
                break;
        }

        const isValid = await trigger(fieldsToValidate);
        if (isValid) {
            setCurrentStep((prev) => Math.min(prev + 1, translations.en.steps.length));
        }
    };

    const handleBack = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    const onSubmit = async (values) => {
        try {
            // 1. Create a structured object for the message content
            const structuredMessage = {
                contact: {
                    fullName: values.fullName,
                    email: values.email,
                    phone: values.phoneNumber,
                    referral: values.hearAbout || 'N/A'
                },
                project: {
                    type: values.projectType === 'Other' ? values.projectTypeOther : values.projectType,
                    location: values.projectLocation,
                    plotSizeSqFt: values.plotSize || null,
                    builtUpAreaSqFt: values.builtUpArea || null,
                    budgetAED: values.budget || 0
                },
                services: values.services || [],
                requirements: {
                    hasExistingDrawings: values.hasExistingDrawings === 'yes',
                    requiresSiteVisit: values.requireSiteVisit === 'yes',
                    preferredStyles: values.preferredStyles || '',
                    pinterestLink: values.pinterestLink || ''
                },
                notes: values.additionalNotes || 'None'
            };

            // 2. Prepare the final payload
            const payload = {
                name: values.fullName,
                email: values.email,
                // Convert the object to a JSON string for the 'message' field
                message: JSON.stringify(structuredMessage),
                image: values.pinterestLink || "https://example.com/default.png",
                budget: Number(values.budget) || 0,
            };

            console.log("Submitting structured payload:", payload);

            const response = await fetch('https://yellow-termite-327315.hostingersite.com/api/inquiries', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const result = await response.json();
            console.log("Success:", result);

            alert("Quote request submitted successfully!");
            setOpen(false);
            setCurrentStep(1);
            form.reset();
        } catch (error) {
            console.error("Submission Error:", error);
            alert("Failed to submit request. Please check your connection and try again.");
        }
    };

    // --- Sub-components for Steps ---

    const renderStep1 = () => (
        <div className={`space-y-4 ${isArabic ? "text-right" : "text-left"}`}>

            <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                    <FormItem>

                        <FormLabel className={`flex items-center ${isArabic ? "text-right! justify-end" : "text-left! justify-start"}`}>
                            {isArabic ? "الاسم الكامل" : "Full Name"} <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                            <Input
                                placeholder={isArabic ? "محمد أحمد" : "John Doe"}
                                className={isArabic ? "text-right" : "text-left"}
                                {...field}
                            />
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

                        <FormLabel className={`flex items-center ${isArabic ? "text-right! justify-end" : "text-left! justify-start"}`}>
                            {isArabic ? "البريد الإلكتروني" : "Email"} <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                            <Input
                                placeholder={isArabic ? "example@email.com" : "ali@gmail.com"}
                                className={isArabic ? "text-right" : "text-left"}
                                {...field}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className={`flex items-center ${isArabic ? "text-right! justify-end" : "text-left! justify-start"}`}>
                            {isArabic ? "رقم الهاتف" : "Phone Number"} <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                            <Input
                                placeholder={isArabic ? "+971 50 000 0000" : "+971 50 000 0000"}
                                className={isArabic ? "text-right" : "text-left"}
                                {...field}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="hearAbout"
                render={({ field }) => (
                    <FormItem className={`flex flex-col ${isArabic ? "text-right items-end justify-end" : "text-left items-start justify-start"}`}>
                        <FormLabel className={`${isArabic ? "text-right! justify-end" : "text-left! justify-start"}`} >
                            {isArabic
                                ? "كيف سمعت عن إنماء؟ (اختياري)"
                                : "How did you hear about Enmaa? (Optional)"}
                        </FormLabel>


                        <Select onValueChange={field.onChange} defaultValue={field.value} className="" >
                            <FormControl>
                                <SelectTrigger >
                                    <SelectValue
                                        placeholder={isArabic ? "اختر خياراً" : "Select an option"}
                                    />
                                </SelectTrigger>
                            </FormControl>

                            <SelectContent>
                                <SelectItem value="social">
                                    {isArabic ? "وسائل التواصل الاجتماعي" : "Social Media"}
                                </SelectItem>
                                <SelectItem value="friend">
                                    {isArabic ? "صديق / إحالة" : "Friend / Referral"}
                                </SelectItem>
                                <SelectItem value="search">
                                    {isArabic ? "بحث جوجل" : "Google Search"}
                                </SelectItem>
                                <SelectItem value="other">
                                    {isArabic ? "أخرى" : "Other"}
                                </SelectItem>
                            </SelectContent>
                        </Select>

                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );

    const renderStep2 = () => (
        <div className={`space-y-4 ${isArabic ? "text-right" : "text-left"}`}>

            <FormField
                control={form.control}
                name="projectType"
                render={({ field }) => (
                    <FormItem className={`${isArabic ? "text-right! justify-end" : "text-left! justify-start"}`}>
                        <FormLabel className={`flex items-center ${isArabic ? "text-right! justify-end" : "text-left! justify-start"}`}>
                            {isArabic ? "نوع المشروع" : "Project Type"} <span className="text-red-500">*</span>
                        </FormLabel>

                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger className={isArabic ? "text-right" : "text-left"}>
                                    <SelectValue placeholder={isArabic ? "اختر النوع" : "Select Type"} />
                                </SelectTrigger>
                            </FormControl>
                            {isArabic ?
                                <SelectContent >
                                    {translations.ar.projectTypes.map((type) => (
                                        <SelectItem className='flex justify-end text-right' key={type} value={type}>
                                            {type}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                                :

                                <SelectContent>
                                    {translations.en.projectTypes.map((type) => (
                                        <SelectItem key={type} value={type}>
                                            {type}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            }
                        </Select>

                        <FormMessage />
                    </FormItem>
                )}
            />

            {projectType === "Other" && (
                <FormField
                    control={form.control}
                    name="projectTypeOther"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className={`flex items-center ${isArabic ? "text-right! justify-end" : "text-left! justify-start"}`}>
                                {isArabic ? "يرجى التحديد" : "Please specify"}
                            </FormLabel>
                            <FormControl>
                                <Input
                                    className={isArabic ? "text-right" : "text-left"}
                                    placeholder={isArabic ? "اكتب نوع المشروع" : ""}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            )}

            <FormField
                control={form.control}
                name="projectLocation"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className={`flex items-center ${isArabic ? "text-right! justify-end" : "text-left! justify-start"}`}>
                            {isArabic
                                ? "موقع المشروع (الإمارة / المنطقة)"
                                : "Project Location (Emirate / Area)"}{" "}
                            <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                            <Input
                                placeholder={
                                    isArabic ? "مثال: دبي، جميرا" : "e.g. Dubai, Jumeirah"
                                }
                                className={isArabic ? "text-right" : "text-left"}
                                {...field}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <div className="grid grid-cols-2 gap-4">
                <FormField
                    control={form.control}
                    name="plotSize"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className={`flex items-center ${isArabic ? "text-right! justify-end" : "text-left! justify-start"}`}>{isArabic ? "مساحة الأرض" : "Plot Size"}</FormLabel>
                            <FormControl>
                                <Input
                                    type="number"
                                    placeholder={isArabic ? "قدم مربع" : "Sq. ft."}
                                    className={isArabic ? "text-right" : "text-left"}
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="builtUpArea"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className={`flex items-center ${isArabic ? "text-right! justify-end" : "text-left! justify-start"}`}>
                                {isArabic ? "المساحة المبنية التقديرية" : "Est. Built-up Area"}
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="number"
                                    placeholder={isArabic ? "قدم مربع" : "Sq. ft."}
                                    className={isArabic ? "text-right" : "text-left"}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>

            <FormDescription className={`flex items-center text-xs ${isArabic ? "text-right! justify-end" : "text-left! justify-start"}`}>
                {isArabic
                    ? "يرجى إرفاق خريطة الأرض في الخطوة 6."
                    : "Please attach plot map in Step 6."}
            </FormDescription>

            <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className={`flex items-center ${isArabic ? "text-right! justify-end" : "text-left! justify-start"}`}>
                            {isArabic ? "الميزانية التقريبية" : "Approximate Budget"}
                        </FormLabel>
                        <FormControl>
                            <Input
                                type="number"
                                placeholder={isArabic ? "درهم إماراتي" : "AED"}
                                className={isArabic ? "text-right" : "text-left"}
                                {...field}
                            />
                        </FormControl>
                    </FormItem>
                )}
            />
        </div>
    );
    const renderStep3 = () => {
        const t = isArabic ? translations.ar : translations.en;

        return (
            <div className={`space-y-4 ${isArabic ? "text-right" : "text-left"}`}>
                <FormField
                    control={form.control}
                    name="services"
                    render={() => (
                        <FormItem>
                            <div className="mb-4">
                                <FormLabel
                                    className={`flex items-center text-base ${isArabic ? "justify-end text-right" : "justify-start text-left"
                                        }`}
                                >
                                    {isArabic ? "الخدمات المطلوبة" : "Required Services"}{" "}
                                    <span className="text-red-500">*</span>
                                </FormLabel>

                                <FormDescription className={isArabic ? "text-right" : "text-left"}>
                                    {isArabic ? "اختر كل ما ينطبق." : "Select all that apply."}
                                </FormDescription>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {t.servicesList.map((service) => (
                                    <FormField key={service} control={form.control} name="services" render={({ field }) => {
                                        return (
                                            <FormItem
                                                key={service}
                                                className={`flex items-end rounded-md border p-3 shadow-sm hover:bg-gray-50 cursor-pointer ${isArabic
                                                    ? "flex-row-reverse"
                                                    : "flex-row"
                                                    }`}
                                            >
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value?.includes(service)}
                                                        onCheckedChange={(checked) => {
                                                            return checked
                                                                ? field.onChange([...field.value, service])
                                                                : field.onChange(
                                                                    field.value?.filter(
                                                                        (value) => value !== service
                                                                    )
                                                                );
                                                        }}
                                                    />
                                                </FormControl>

                                                <FormLabel className="font-normal cursor-pointer ">
                                                    {service}
                                                </FormLabel>
                                            </FormItem>
                                        );
                                    }}
                                    />
                                ))}
                            </div>

                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
        );
    };

    const renderStep4 = () => (
        <div className={`space-y-6 ${isArabic ? "text-right" : "text-left"}`}>

            <FormField
                control={form.control}
                name="hasExistingDrawings"
                render={({ field }) => (
                    <FormItem className="space-y-3">
                        <FormLabel className={`${isArabic ? "text-right! justify-end" : "text-left! justify-start"}`}>
                            {isArabic
                                ? "هل لديك مخططات موجودة مسبقاً؟"
                                : "Do you already have existing drawings?"}
                        </FormLabel>

                        <FormControl>
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className={`flex ${isArabic ? "flex-row-reverse space-x-reverse space-x-4" : "space-x-4"}`}
                            >
                                <FormItem className="flex items-center space-x-2 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="yes" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                        {isArabic ? "نعم" : "Yes"}
                                    </FormLabel>
                                </FormItem>

                                <FormItem className="flex items-center space-x-2 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="no" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                        {isArabic ? "لا" : "No"}
                                    </FormLabel>
                                </FormItem>
                            </RadioGroup>
                        </FormControl>
                    </FormItem>
                )}
            />

            {hasExistingDrawings === "yes" && (
                <div className="p-4 border border-dashed rounded-md bg-gray-50">
                    <FormLabel className={`mb-2 block ${isArabic ? "text-right! justify-end" : "text-left! justify-start"}`}>
                        {isArabic ? "تحميل المخططات الحالية" : "Upload Existing Drawings"}
                    </FormLabel>
                    <Input type="file" multiple className="cursor-pointer" />
                </div>
            )}

            <FormField
                control={form.control}
                name="requireSiteVisit"
                render={({ field }) => (
                    <FormItem className="space-y-3">
                        <FormLabel className={`${isArabic ? "text-right! justify-end" : "text-left! justify-start"}`}>
                            {isArabic
                                ? "هل تحتاج إلى زيارة موقع من فريقنا؟"
                                : "Do you require a site visit from our team?"}
                        </FormLabel>

                        <FormControl>
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className={`flex ${isArabic ? "flex-row-reverse space-x-reverse space-x-4" : "space-x-4"}`}
                            >
                                <FormItem className="flex items-center space-x-2 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="yes" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                        {isArabic ? "نعم" : "Yes"}
                                    </FormLabel>
                                </FormItem>

                                <FormItem className="flex items-center space-x-2 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="no" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                        {isArabic ? "لا" : "No"}
                                    </FormLabel>
                                </FormItem>
                            </RadioGroup>
                        </FormControl>
                    </FormItem>
                )}
            />

            <div className="space-y-4">
                <FormLabel className={`text-base ${isArabic ? "text-right! justify-end" : "text-left! justify-start"}`}>
                    {isArabic ? "الأنماط والمراجع" : "Styles & References"}
                </FormLabel>

                <FormField
                    control={form.control}
                    name="preferredStyles"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className={`${isArabic ? "text-right! justify-end" : "text-left! justify-start"}`}>
                                {isArabic ? "الأنماط المفضلة" : "Preferred Styles"}
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder={
                                        isArabic
                                            ? "مثال: حديث، إسلامي، بسيط"
                                            : "e.g. Modern, Islamic, Minimalist"
                                    }
                                    className={isArabic ? "text-right" : "text-left"}
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="pinterestLink"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className={`${isArabic ? "text-right! justify-end" : "text-left! justify-start"}`}>
                                {isArabic ? "رابط لوحة Pinterest" : "Pinterest Board Link"}
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="url"
                                    placeholder="https://pinterest.com/..."
                                    className={isArabic ? "text-right" : "text-left"}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="p-4 border border-dashed rounded-md bg-gray-50">
                    <FormLabel className="mb-2 block">
                        {isArabic ? "تحميل صور مرجعية" : "Upload Reference Images"}
                    </FormLabel>
                    <Input type="file" multiple accept="image/*" className="cursor-pointer" />
                </div>
            </div>
        </div>
    );

    const renderStep5 = () => (
        <div className={`space-y-4 ${isArabic ? "text-right" : "text-left"}`}>
            <FormField
                control={form.control}
                name="additionalNotes"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>
                            {isArabic ? "ملاحظات إضافية" : "Additional Notes"}
                        </FormLabel>

                        <FormDescription className={isArabic ? "text-right" : "text-left"}>
                            {isArabic
                                ? "يرجى إضافة أي تفاصيل إضافية أو متطلبات خاصة بالمشروع هنا."
                                : "Provide any extra details or project requirements here."}
                        </FormDescription>

                        <FormControl>
                            <Textarea
                                placeholder={
                                    isArabic
                                        ? "أخبرنا المزيد عن رؤيتك للمشروع..."
                                        : "Tell us more about your vision..."
                                }
                                className={`min-h-[200px] ${isArabic ? "text-right" : "text-left"}`}
                                {...field}
                            />
                        </FormControl>

                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
    const FileUploadField = ({ label, description }) => (
        <div className="mb-4">
            <FormLabel className="mb-1 block text-sm font-medium">{label}</FormLabel>
            {description && <p className="text-xs text-muted-foreground mb-2">{description}</p>}
            <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-6 h-6 text-gray-500 mb-1" />
                        <p className="text-xs text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    </div>
                    <Input type="file" className="hidden" multiple />
                </label>
            </div>
        </div>
    );

    const renderStep6 = () => (
        <div className="space-y-2">
            <h3 className="font-medium mb-4">Upload Available Files</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FileUploadField label="Site Photos" />
                <FileUploadField label="Sketches" />
                <FileUploadField label="Existing Drawings" description="Plans, elevations, DWG, PDF" />
                <FileUploadField label="Plot Map" description="Required if Plot Size provided" />
                <FileUploadField label="Reference Images" />
                <FileUploadField label="Additional Documents" />
            </div>
        </div>
    );

    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger className='lg:justify-center justify-start' asChild>
                    <Button size="lg" className="bg-transparent hover:bg-transparent shadow-none pl-0 pr-4">
                        {isArabic ? "اطلب عرض سعر الآن" : "Request a Quote Now"}
                    </Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[600px] overflow-y-auto flex flex-col p-0 gap-0">
                    <DialogHeader className="p-6 pb-2">
                        <DialogTitle className={`${isArabic ? 'text-right mt-5' : 'text-left'}`}>
                            {isArabic ? "احصل على عرض أسعار" : "Get a Quote"}

                        </DialogTitle>
                        {isArabic ?
                            <DialogDescription className={`${isArabic ? 'text-right' : 'text-left'}`}>
                                خطوات{currentStep} / {translations.ar.steps.length} : {translations.ar.steps[currentStep - 1].title}
                            </DialogDescription>

                            :

                            <DialogDescription className={`${isArabic ? 'text-right' : 'text-left'}`}>
                                Step {currentStep} of {translations.en.steps.length}: {translations.en.steps[currentStep - 1].title}
                            </DialogDescription>
                        }

                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 h-2 mt-4 rounded-full overflow-hidden">
                            <div
                                className="bg-blue-600 h-full transition-all duration-300 ease-in-out"
                                style={{ width: `${(currentStep / translations.en.steps.length) * 100}%` }}
                            />
                        </div>
                    </DialogHeader>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 flex flex-col overflow-hidden">
                            <ScrollArea className="flex-1 p-6 pt-2">
                                <div className="px-1">
                                    {currentStep === 1 && renderStep1()}
                                    {currentStep === 2 && renderStep2()}
                                    {currentStep === 3 && renderStep3()}
                                    {currentStep === 4 && renderStep4()}
                                    {currentStep === 5 && renderStep5()}
                                    {currentStep === 6 && renderStep6()}
                                </div>
                            </ScrollArea>

                            <DialogFooter className="p-6 border-t mt-auto flex flex-row justify-between sm:justify-between">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={handleBack}
                                    disabled={currentStep === 1}
                                    className="gap-2"
                                >
                                    <ChevronLeft className="w-4 h-4" /> Back
                                </Button>

                                {currentStep < translations.en.steps.length ? (
                                    <Button type="button" onClick={handleNext} className="gap-2">
                                        Next <ChevronRight className="w-4 h-4" />
                                    </Button>
                                ) : (
                                    <Button type="submit" className="gap-2 bg-green-600 hover:bg-green-700">
                                        Submit Request <Check className="w-4 h-4" />
                                    </Button>
                                )}
                            </DialogFooter>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </>
    );
}
