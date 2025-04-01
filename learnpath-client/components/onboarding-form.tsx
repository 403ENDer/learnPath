"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Briefcase, Lightbulb, Trash2 } from "lucide-react";

const formSchema = z.object({
  careerGoal: z.string().min(2, {
    message: "Please select a career goal.",
  }),
  experienceLevel: z.number().min(1).max(5),
  interests: z.array(z.string()).min(1, {
    message: "Please select at least one interest.",
  }),
  customInterest: z.string().optional(),
});

const interestOptions = [
  { id: "web-development", label: "Web Development" },
  { id: "mobile-development", label: "Mobile Development" },
  { id: "data-science", label: "Data Science" },
  { id: "machine-learning", label: "Machine Learning" },
  { id: "devops", label: "DevOps" },
  { id: "ui-ux", label: "UI/UX Design" },
  { id: "cloud-computing", label: "Cloud Computing" },
  { id: "cybersecurity", label: "Cybersecurity" },
];

export default function OnboardingForm() {
  const router = useRouter();
  const [customInterests, setCustomInterests] = useState<string[]>([]);
  const [customInterestInput, setCustomInterestInput] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      careerGoal: "",
      experienceLevel: 3,
      interests: [],
      customInterest: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, you would save this to your backend
    // For now, we'll just navigate to the recommendations tab
    localStorage.setItem(
      "userPreferences",
      JSON.stringify({
        ...values,
        interests: [...values.interests, ...customInterests],
      })
    );
    router.push("/?tab=recommendations");
    // Force a reload of the recommendations tab
    window.location.reload();
  }

  const addCustomInterest = () => {
    if (
      customInterestInput.trim() &&
      !customInterests.includes(customInterestInput.trim())
    ) {
      setCustomInterests([...customInterests, customInterestInput.trim()]);
      setCustomInterestInput("");
    }
  };

  const removeCustomInterest = (interest: string) => {
    setCustomInterests(customInterests.filter((i) => i !== interest));
  };

  const experienceLevelLabels = [
    "Beginner",
    "Elementary",
    "Intermediate",
    "Advanced",
    "Expert",
  ];

  return (
    <Card className="w-full border-none bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
      <CardHeader className="space-y-4">
        <CardTitle className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Tell us about your learning goals
        </CardTitle>
        <CardDescription className="text-base leading-relaxed">
          We'll use this information to create a personalized learning path for
          you
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="careerGoal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Career Goal</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your career goal" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="frontend-developer">
                        <div className="flex items-center">
                          <Code className="mr-2 h-4 w-4" />
                          <span>Frontend Developer</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="backend-developer">
                        <div className="flex items-center">
                          <Code className="mr-2 h-4 w-4" />
                          <span>Backend Developer</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="fullstack-developer">
                        <div className="flex items-center">
                          <Code className="mr-2 h-4 w-4" />
                          <span>Full Stack Developer</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="data-scientist">
                        <div className="flex items-center">
                          <Lightbulb className="mr-2 h-4 w-4" />
                          <span>Data Scientist</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="ux-designer">
                        <div className="flex items-center">
                          <Briefcase className="mr-2 h-4 w-4" />
                          <span>UX Designer</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="product-manager">
                        <div className="flex items-center">
                          <Briefcase className="mr-2 h-4 w-4" />
                          <span>Product Manager</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Select the career path you're interested in pursuing
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="experienceLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Experience Level</FormLabel>
                  <FormControl>
                    <div className="space-y-4">
                      <Slider
                        min={1}
                        max={5}
                        step={1}
                        defaultValue={[field.value]}
                        onValueChange={(value) => field.onChange(value[0])}
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        {experienceLevelLabels.map((label, index) => (
                          <span
                            key={label}
                            className={
                              index + 1 === field.value
                                ? "font-bold text-primary"
                                : ""
                            }
                          >
                            {label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </FormControl>
                  <FormDescription>
                    How would you rate your current knowledge in this field?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="interests"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel>Interests</FormLabel>
                    <FormDescription>
                      Select topics you're interested in learning about
                    </FormDescription>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {interestOptions.map((interest) => (
                      <FormField
                        key={interest.id}
                        control={form.control}
                        name="interests"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={interest.id}
                              className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(interest.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          interest.id,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== interest.id
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">
                                {interest.label}
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

            <div className="space-y-4">
              <FormLabel>Custom Interests</FormLabel>
              <div className="flex gap-2">
                <Input
                  placeholder="Add a custom interest"
                  value={customInterestInput}
                  onChange={(e) => setCustomInterestInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addCustomInterest();
                    }
                  }}
                />
                <Button
                  type="button"
                  onClick={addCustomInterest}
                  variant="outline"
                >
                  Add
                </Button>
              </div>
              {customInterests.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {customInterests.map((interest) => (
                    <Badge
                      key={interest}
                      variant="secondary"
                      className="flex items-center gap-1"
                    >
                      {interest}
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-4 w-4 p-0 ml-1"
                        onClick={() => removeCustomInterest(interest)}
                      >
                        <Trash2 className="h-3 w-3" />
                        <span className="sr-only">Remove {interest}</span>
                      </Button>
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            <Button type="submit" className="w-full">
              Get Recommendations <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
