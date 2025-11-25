import * as React from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

const recentItems = [
  {
    id: 1,
    title: "Build UI playground",
    status: "In progress",
    description: "Experiment with components, layouts, and theming.",
  },
  {
    id: 2,
    title: "Define design principles",
    status: "Planned",
    description: "Capture the visual language and interaction patterns.",
  },
  {
    id: 3,
    title: "Add foundation docs",
    status: "Planned",
    description: "Document colors, typography, spacing, and radii.",
  },
  {
    id: 4,
    title: "Wire example layouts",
    status: "Done",
    description: "Create a few reference dashboards and forms.",
  },
];

const projects = [
  {
    id: 1,
    name: "Sample admin dashboard",
    status: "Active",
    owner: "Team",
  },
  {
    id: 2,
    name: "Analytics workspace",
    status: "Active",
    owner: "Team",
  },
  {
    id: 3,
    name: "Internal tools sandbox",
    status: "Paused",
    owner: "Team",
  },
  {
    id: 4,
    name: "Prototype: experimental UI",
    status: "Idea",
    owner: "Team",
  },
];

function App() {
  const [email, setEmail] = React.useState("");
  const [saving, setSaving] = React.useState(false);
  const [count, setCount] = React.useState(0);

  const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaving(true);
    // Fake async save
    setTimeout(() => setSaving(false), 800);
  };

  return (
    <TooltipProvider>
      <div className="min-h-svh bg-background text-foreground">
        {/* Header */}
        <header className="border-b bg-card/40 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
                UI
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold">
                  Design System Playground
                </span>
                <span className="text-xs text-muted-foreground">
                  React · Tailwind · shadcn/ui
                </span>
              </div>
              <Badge variant="outline" className="ml-2">
                WIP
              </Badge>
            </div>

            <div className="flex items-center gap-3">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Help">
                    ?
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs text-xs">
                    This header exercises Tooltip, Button, Badge, Avatar, and
                    DropdownMenu.
                  </p>
                </TooltipContent>
              </Tooltip>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <Avatar className="h-6 w-6">
                      {/* Add AvatarImage if you like */}
                      <AvatarImage src="" alt="" />
                      <AvatarFallback>YA</AvatarFallback>
                    </Avatar>
                    <span className="hidden text-sm md:inline">
                      Your account
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Sign out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-6 space-y-6">
          {/* Vite + React starter block */}
          <section className="rounded-lg border bg-card p-4">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex gap-4">
                <a href="https://vite.dev" target="_blank" rel="noreferrer">
                  <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                  <img
                    src={reactLogo}
                    className="logo react"
                    alt="React logo"
                  />
                </a>
              </div>
              <div className="flex-1 min-w-[220px]">
                <h1 className="text-xl font-semibold">Vite + React</h1>
                <div className="card mt-2">
                  <button onClick={() => setCount((c) => c + 1)}>
                    count is {count}
                  </button>
                  <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                  </p>
                </div>
                <p className="read-the-docs mt-2 text-xs text-muted-foreground">
                  Click on the Vite and React logos to learn more
                </p>
              </div>
            </div>
          </section>

          {/* Design system playground layout */}
          <div className="flex flex-col gap-6 md:flex-row">
            {/* Left column: tabs + alert */}
            <section className="flex-1 space-y-4">
              <Tabs defaultValue="profile">
                <div className="mb-2 flex items-center justify-between">
                  <TabsList>
                    <TabsTrigger value="profile">Profile form</TabsTrigger>
                    <TabsTrigger value="preferences">Preferences</TabsTrigger>
                  </TabsList>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        Open dialog
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Example dialog</DialogTitle>
                        <DialogDescription>
                          A modal composed entirely of shadcn/ui primitives.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-3 py-2 text-sm text-muted-foreground">
                        <p>
                          Use this to confirm actions, edit small bits of data,
                          or display focused information.
                        </p>
                        <p>
                          This instance doesn&apos;t do anything; it&apos;s just
                          here to verify styling and behavior.
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                <TabsContent value="profile">
                  <Card>
                    <CardHeader>
                      <CardTitle>Profile</CardTitle>
                      <CardDescription>
                        A simple profile form using Input, Textarea, Select,
                        Checkbox, and RadioGroup.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4" onSubmit={handleSave}>
                        <div className="space-y-1.5">
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            placeholder="Ada Lovelace"
                            autoComplete="name"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            autoComplete="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>

                        <div className="space-y-1.5">
                          <Label htmlFor="bio">Bio</Label>
                          <Textarea
                            id="bio"
                            placeholder="Tell us a bit about yourself…"
                          />
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-1.5">
                            <Label>Role</Label>
                            <Select defaultValue="developer">
                              <SelectTrigger>
                                <SelectValue placeholder="Select a role" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="designer">
                                  Designer
                                </SelectItem>
                                <SelectItem value="developer">
                                  Developer
                                </SelectItem>
                                <SelectItem value="pm">
                                  Product manager
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-1.5">
                            <Label>Theme</Label>
                            <RadioGroup
                              defaultValue="system"
                              className="flex flex-wrap gap-4"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                  value="light"
                                  id="theme-light"
                                />
                                <Label
                                  htmlFor="theme-light"
                                  className="font-normal"
                                >
                                  Light
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                  value="dark"
                                  id="theme-dark"
                                />
                                <Label
                                  htmlFor="theme-dark"
                                  className="font-normal"
                                >
                                  Dark
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                  value="system"
                                  id="theme-system"
                                />
                                <Label
                                  htmlFor="theme-system"
                                  className="font-normal"
                                >
                                  System
                                </Label>
                              </div>
                            </RadioGroup>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox id="marketing" />
                          <Label
                            htmlFor="marketing"
                            className="text-sm font-normal"
                          >
                            Receive occasional product emails
                          </Label>
                        </div>

                        <CardFooter className="mt-2 flex justify-between px-0">
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="text-muted-foreground"
                          >
                            Cancel
                          </Button>
                          <Button type="submit" size="sm" disabled={saving}>
                            {saving ? "Saving…" : "Save changes"}
                          </Button>
                        </CardFooter>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="preferences">
                  <Card>
                    <CardHeader>
                      <CardTitle>Preferences</CardTitle>
                      <CardDescription>
                        Empty state using Skeleton placeholders.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Skeleton className="h-4 w-1/3" />
                      <Skeleton className="h-4 w-2/3" />
                      <Skeleton className="h-4 w-1/2" />
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <Alert className="mt-4">
                <AlertTitle>Design system smoke test</AlertTitle>
                <AlertDescription>
                  If this page renders and the components are interactive, your
                  shadcn + Tailwind setup is working correctly.
                </AlertDescription>
              </Alert>
            </section>

            {/* Right column: recent items + table */}
            <section className="flex-1 space-y-4">
              <Card className="h-[320px]">
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                  <div>
                    <CardTitle>Recent items</CardTitle>
                    <CardDescription>
                      ScrollArea, Separator, and Badge inside a Card.
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">12 new</Badge>
                </CardHeader>
                <CardContent className="pt-2">
                  <ScrollArea className="h-[220px] pr-4">
                    <div className="space-y-3">
                      {recentItems.map((item, index) => (
                        <div key={item.id}>
                          <div className="flex items-center justify-between text-sm">
                            <div className="font-medium">{item.title}</div>
                            <Badge
                              variant={
                                item.status === "Done"
                                  ? "default"
                                  : "outline"
                              }
                            >
                              {item.status}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {item.description}
                          </p>
                          {index < recentItems.length - 1 && (
                            <Separator className="my-2" />
                          )}
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Projects</CardTitle>
                  <CardDescription>
                    Table, ScrollArea, and Buttons in a compact layout.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[220px]">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Project</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Owner</TableHead>
                          <TableHead className="text-right">
                            Actions
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {projects.map((project) => (
                          <TableRow key={project.id}>
                            <TableCell className="font-medium">
                              {project.name}
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  project.status === "Active"
                                    ? "default"
                                    : "outline"
                                }
                              >
                                {project.status}
                              </Badge>
                            </TableCell>
                            <TableCell>{project.owner}</TableCell>
                            <TableCell className="text-right">
                              <Button size="sm" variant="ghost">
                                View
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </ScrollArea>
                </CardContent>
              </Card>
            </section>
          </div>
        </main>
      </div>
    </TooltipProvider>
  );
}

export default App;
