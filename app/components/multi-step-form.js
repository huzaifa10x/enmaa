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
const steps = [
    { id: 1, title: "Personal Info" },
    { id: 2, title: "Project Details" },
    { id: 3, title: "Services" },
    { id: 4, title: "Requirements" },
    { id: 5, title: "Notes" },
    { id: 6, title: "Uploads" },
];

const projectTypes = [
    "Residential Villa",
    "Commercial Building",
    "Renovation",
    "Exterior Design",
    "Engineering Supervision",
    "Other",
];

const servicesList = [
    "Architectural Design",
    "Structural Drawings",
    "Electrical & Mechanical Drawings",
    "3D Visualization",
    "Facade Design",
    "Engineering Supervision",
    "Building Permits",
];

// --- Zod Schema ---
const formSchema = z.object({
    // Step 1
    fullName: z.string().min(2, "Name is required"),
    phoneNumber: z.string().min(5, "Phone number is required"),
    hearAbout: z.string().optional(),

    // Step 2
    projectType: z.string().min(1, "Project type is required"),
    projectTypeOther: z.string().optional(),
    projectLocation: z.string().min(2, "Location is required"),
    plotSize: z.string().optional(),
    builtUpArea: z.string().optional(),
    budget: z.string().optional(),

    // Step 3
    services: z.array(z.string()).refine((value) => value.length > 0, {
        message: "Select at least one service.",
    }),

    // Step 4
    hasExistingDrawings: z.enum(["yes", "no"]),
    existingDrawingsUrl: z.any().optional(), // In a real app, validate file type
    requireSiteVisit: z.enum(["yes", "no"]),
    preferredStyles: z.string().optional(),
    pinterestLink: z.string().url("Invalid URL").optional().or(z.literal("")),

    // Step 5
    additionalNotes: z.string().optional(),

    // Step 6 (File placeholders - in real app, use FileList validation)
    filesSitePhotos: z.any().optional(),
    filesSketches: z.any().optional(),
    filesExistingDrawings: z.any().optional(),
    filesPlotMap: z.any().optional(),
    filesRefImages: z.any().optional(),
    filesOther: z.any().optional(),
});

// type FormValues = z.infer<typeof formSchema>;

export default function QuoteModal() {
    const [open, setOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
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
                fieldsToValidate = ["fullName", "phoneNumber"];
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
                break;
            case 6:
                // No strict validation for optional uploads
                break;
        }

        const isValid = await trigger(fieldsToValidate);
        if (isValid) {
            setCurrentStep((prev) => Math.min(prev + 1, steps.length));
        }
    };

    const handleBack = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    const onSubmit = (data) => {
        console.log("Form Submitted:", data);
        // Handle API submission here
        alert("Quote request submitted successfully!");
        setOpen(false);
        setCurrentStep(1);
        form.reset();
    };

    // --- Sub-components for Steps ---

    const renderStep1 = () => (
        <div className="space-y-4">
            <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Full Name <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                            <Input placeholder="John Doe" {...field} />
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
                        <FormLabel>Phone Number <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                            <Input placeholder="+971 50 000 0000" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="hearAbout"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>How did you hear about Enmaa? (Optional)</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select an option" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value="social">Social Media</SelectItem>
                                <SelectItem value="friend">Friend / Referral</SelectItem>
                                <SelectItem value="search">Google Search</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );

    const renderStep2 = () => (
        <div className="space-y-4">
            <FormField
                control={form.control}
                name="projectType"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Project Type <span className="text-red-500">*</span></FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Type" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {projectTypes.map((type) => (
                                    <SelectItem key={type} value={type}>
                                        {type}
                                    </SelectItem>
                                ))}
                            </SelectContent>
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
                            <FormLabel>Please specify</FormLabel>
                            <FormControl>
                                <Input {...field} />
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
                        <FormLabel>Project Location (Emirate / Area) <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                            <Input placeholder="e.g. Dubai, Jumeirah" {...field} />
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
                            <FormLabel>Plot Size</FormLabel>
                            <FormControl>
                                <Input placeholder="Sq. ft." {...field} />
                            </FormControl>
                            <FormDescription className="text-xs">
                                Please attach plot map in Step 6.
                            </FormDescription>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="builtUpArea"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Est. Built-up Area</FormLabel>
                            <FormControl>
                                <Input placeholder="Sq. ft." {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
            </div>

            <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Approximate Budget</FormLabel>
                        <FormControl>
                            <Input placeholder="AED" {...field} />
                        </FormControl>
                    </FormItem>
                )}
            />
        </div>
    );

    const renderStep3 = () => (
        <div className="space-y-4">
            <FormField
                control={form.control}
                name="services"
                render={() => (
                    <FormItem>
                        <div className="mb-4">
                            <FormLabel className="text-base">Required Services <span className="text-red-500">*</span></FormLabel>
                            <FormDescription>
                                Select all that apply.
                            </FormDescription>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {servicesList.map((service) => (
                                <FormField
                                    key={service}
                                    control={form.control}
                                    name="services"
                                    render={({ field }) => {
                                        return (
                                            <FormItem
                                                key={service}
                                                className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3 shadow-sm hover:bg-gray-50 cursor-pointer"
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
                                                <FormLabel className="font-normal cursor-pointer w-full">
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

    const renderStep4 = () => (
        <div className="space-y-6">
            <FormField
                control={form.control}
                name="hasExistingDrawings"
                render={({ field }) => (
                    <FormItem className="space-y-3">
                        <FormLabel>Do you already have existing drawings?</FormLabel>
                        <FormControl>
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex space-x-4"
                            >
                                <FormItem className="flex items-center space-x-2 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="yes" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Yes</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-2 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="no" />
                                    </FormControl>
                                    <FormLabel className="font-normal">No</FormLabel>
                                </FormItem>
                            </RadioGroup>
                        </FormControl>
                    </FormItem>
                )}
            />

            {hasExistingDrawings === "yes" && (
                <div className="p-4 border border-dashed rounded-md bg-gray-50">
                    <FormLabel className="mb-2 block">Upload Existing Drawings</FormLabel>
                    <Input type="file" multiple className="cursor-pointer" />
                </div>
            )}

            <FormField
                control={form.control}
                name="requireSiteVisit"
                render={({ field }) => (
                    <FormItem className="space-y-3">
                        <FormLabel>Do you require a site visit from our team?</FormLabel>
                        <FormControl>
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex space-x-4"
                            >
                                <FormItem className="flex items-center space-x-2 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="yes" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Yes</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-2 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="no" />
                                    </FormControl>
                                    <FormLabel className="font-normal">No</FormLabel>
                                </FormItem>
                            </RadioGroup>
                        </FormControl>
                    </FormItem>
                )}
            />

            <div className="space-y-4">
                <FormLabel className="text-base">Styles & References</FormLabel>
                <FormField
                    control={form.control}
                    name="preferredStyles"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Preferred Styles</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g. Modern, Islamic, Minimalist" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="pinterestLink"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Pinterest Board Link</FormLabel>
                            <FormControl>
                                <Input placeholder="https://pinterest.com/..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="p-4 border border-dashed rounded-md bg-gray-50">
                    <FormLabel className="mb-2 block">Upload Reference Images</FormLabel>
                    <Input type="file" multiple accept="image/*" className="cursor-pointer" />
                </div>
            </div>
        </div>
    );

    const renderStep5 = () => (
        <div className="space-y-4">
            <FormField
                control={form.control}
                name="additionalNotes"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Additional Notes</FormLabel>
                        <FormDescription>
                            Provide any extra details or project requirements here.
                        </FormDescription>
                        <FormControl>
                            <Textarea
                                placeholder="Tell us more about your vision..."
                                className="min-h-[200px]"
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
    )

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

    // --- Main Render ---
    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button size="lg" className="bg-transparent hover:bg-transparent shadow-none text-white pl-0 pr-4">
                        Request a Quote Now
                    </Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[600px] h-[90vh] flex flex-col p-0 gap-0">
                    <DialogHeader className="p-6 pb-2">
                        <DialogTitle>Get a Quote</DialogTitle>
                        <DialogDescription>
                            Step {currentStep} of {steps.length}: {steps[currentStep - 1].title}
                        </DialogDescription>

                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 h-2 mt-4 rounded-full overflow-hidden">
                            <div
                                className="bg-blue-600 h-full transition-all duration-300 ease-in-out"
                                style={{ width: `${(currentStep / steps.length) * 100}%` }}
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

                                {currentStep < steps.length ? (
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