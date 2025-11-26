import * as React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

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

// Sample data for charts
const activityData = [
  { name: "Mon", value: 12 },
  { name: "Tue", value: 19 },
  { name: "Wed", value: 15 },
  { name: "Thu", value: 25 },
  { name: "Fri", value: 22 },
  { name: "Sat", value: 8 },
  { name: "Sun", value: 14 },
];

const trendData = [
  { value: 10 },
  { value: 15 },
  { value: 12 },
  { value: 18 },
  { value: 22 },
  { value: 19 },
  { value: 25 },
];

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
    owner: "Design Team",
    progress: 75,
  },
  {
    id: 2,
    name: "Analytics workspace",
    status: "Active",
    owner: "Engineering",
    progress: 90,
  },
  {
    id: 3,
    name: "Internal tools sandbox",
    status: "Paused",
    owner: "Product",
    progress: 45,
  },
  {
    id: 4,
    name: "Prototype: experimental UI",
    status: "Idea",
    owner: "Research",
    progress: 10,
  },
  {
    id: 5,
    name: "Documentation site",
    status: "Active",
    owner: "Content",
    progress: 60,
  },
];

// Sparkline component for stat cards
function Sparkline({ data, color = "var(--primary)" }: { data: { value: number }[]; color?: string }) {
  return (
    <div className="h-8 w-20">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={1.5}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// Stat card component
function StatCard({
  title,
  value,
  change,
  changeType,
  sparklineData,
}: {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  sparklineData?: { value: number }[];
}) {
  return (
    <Card className="flex-1 min-w-[180px]">
      <CardContent className="pt-4 pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-body-small text-muted-foreground">{title}</p>
            <p className="text-headline">{value}</p>
            <div className="flex items-center gap-1.5">
              <Badge
                variant={
                  changeType === "positive"
                    ? "success"
                    : changeType === "negative"
                    ? "destructive"
                    : "secondary"
                }
                className="text-xs px-1.5 py-0"
              >
                {change}
              </Badge>
              <span className="text-body-small text-muted-foreground">vs last week</span>
            </div>
          </div>
          {sparklineData && (
            <Sparkline
              data={sparklineData}
              color={
                changeType === "positive"
                  ? "var(--success)"
                  : changeType === "negative"
                  ? "var(--destructive)"
                  : "var(--muted-foreground)"
              }
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
}

// Status badge helper
function getStatusVariant(status: string): "success" | "warning" | "destructive" | "outline" | "default" {
  switch (status) {
    case "Active":
      return "success";
    case "Paused":
      return "warning";
    case "Done":
      return "default";
    case "In progress":
      return "default";
    default:
      return "outline";
  }
}

function App() {
  const [email, setEmail] = React.useState("");
  const [saving, setSaving] = React.useState(false);

  const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaving(true);
    setTimeout(() => setSaving(false), 800);
  };

  return (
    <TooltipProvider>
      <div className="min-h-svh bg-background text-foreground">
        {/* Header */}
        <header className="sticky top-0 z-10 border-b bg-surface/80 backdrop-blur supports-[backdrop-filter]:bg-surface/60">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-control bg-primary text-lg font-bold text-primary-foreground">
                WB
              </div>
              <div className="flex flex-col">
                <span className="text-subtitle font-semibold tracking-tight">Workbench</span>
                <span className="text-body-small text-muted-foreground">
                  Design System Dashboard
                </span>
              </div>
              <Badge variant="secondary" className="ml-1 px-2.5 py-0.5">
                v0.1.0
              </Badge>
            </div>

            <div className="flex items-center gap-3">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="default" className="h-10 w-10 p-0 text-lg font-medium" aria-label="Help">
                    ?
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs text-body-small">
                    This dashboard showcases the Workbench design system tokens
                    and components.
                  </p>
                </TooltipContent>
              </Tooltip>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2 h-10 px-3">
                    <Avatar className="h-7 w-7">
                      <AvatarImage src="" alt="" />
                      <AvatarFallback className="text-body-small font-medium">YA</AvatarFallback>
                    </Avatar>
                    <span className="hidden text-body md:inline">
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

        <main className="mx-auto max-w-7xl px-4 py-6 space-y-6">
          {/* Page header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-headline">Dashboard</h1>
              <p className="text-subtitle text-muted-foreground">
                Overview of your workspace activity and projects
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Export</Button>
              <Button>New Project</Button>
            </div>
          </div>

          {/* Stats cards row - Dashboard pattern */}
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              title="Total Projects"
              value="24"
              change="+12%"
              changeType="positive"
              sparklineData={trendData}
            />
            <StatCard
              title="Active Tasks"
              value="142"
              change="+8%"
              changeType="positive"
              sparklineData={[{ value: 100 }, { value: 120 }, { value: 115 }, { value: 130 }, { value: 142 }]}
            />
            <StatCard
              title="Completion Rate"
              value="87%"
              change="-2%"
              changeType="negative"
              sparklineData={[{ value: 90 }, { value: 88 }, { value: 89 }, { value: 85 }, { value: 87 }]}
            />
            <StatCard
              title="Team Members"
              value="16"
              change="0%"
              changeType="neutral"
            />
          </section>

          {/* Chart + Form section */}
          <div className="grid gap-6 lg:grid-cols-5">
            {/* Activity chart */}
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle className="text-title">Weekly Activity</CardTitle>
                <CardDescription className="text-body-small">
                  Task completions and updates over the past week
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[280px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={activityData}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="var(--border)"
                        vertical={false}
                      />
                      <XAxis
                        dataKey="name"
                        stroke="var(--muted-foreground)"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis
                        stroke="var(--muted-foreground)"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <RechartsTooltip
                        contentStyle={{
                          backgroundColor: "var(--surface)",
                          border: "1px solid var(--border)",
                          borderRadius: "var(--radius-surface)",
                          fontSize: "var(--text-body-small-size)",
                        }}
                        labelStyle={{ color: "var(--foreground)" }}
                      />
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="var(--primary)"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorValue)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Quick form */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-title">Quick Add</CardTitle>
                <CardDescription className="text-body-small">
                  Create a new task or note
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleSave}>
                  <div className="space-y-1.5">
                    <Label htmlFor="task-title" className="text-label">
                      Title
                    </Label>
                    <Input
                      id="task-title"
                      placeholder="Enter task title"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="task-desc" className="text-label">
                      Description
                    </Label>
                    <Textarea
                      id="task-desc"
                      placeholder="Brief description…"
                      rows={3}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-label">Priority</Label>
                    <Select defaultValue="medium">
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="notify" />
                    <Label htmlFor="notify" className="text-body-small font-normal">
                      Notify team members
                    </Label>
                  </div>
                  <CardFooter className="px-0 pt-2">
                    <Button type="submit" className="w-full" disabled={saving}>
                      {saving ? "Creating…" : "Create Task"}
                    </Button>
                  </CardFooter>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Projects table + Recent items */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Projects table */}
            <Card className="lg:col-span-2">
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <div>
                  <CardTitle className="text-title">Projects</CardTitle>
                  <CardDescription className="text-body-small">
                    All active and upcoming projects
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[320px]">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-label">Project</TableHead>
                        <TableHead className="text-label">Status</TableHead>
                        <TableHead className="text-label">Owner</TableHead>
                        <TableHead className="text-label text-right">Progress</TableHead>
                        <TableHead className="text-label text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {projects.map((project) => (
                        <TableRow key={project.id}>
                          <TableCell className="text-body font-medium">
                            {project.name}
                          </TableCell>
                          <TableCell>
                            <Badge variant={getStatusVariant(project.status)}>
                              {project.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-body-small text-muted-foreground">
                            {project.owner}
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex items-center justify-end gap-2">
                              <div className="h-2 w-16 rounded-full bg-muted overflow-hidden">
                                <div
                                  className="h-full bg-primary rounded-full"
                                  style={{ width: `${project.progress}%` }}
                                />
                              </div>
                              <span className="text-body-small text-muted-foreground w-8">
                                {project.progress}%
                              </span>
                            </div>
                          </TableCell>
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

            {/* Recent items */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <div>
                  <CardTitle className="text-title">Recent Activity</CardTitle>
                  <CardDescription className="text-body-small">
                    Latest updates and tasks
                  </CardDescription>
                </div>
                <Badge variant="secondary">{recentItems.length} items</Badge>
              </CardHeader>
              <CardContent className="relative">
                <ScrollArea className="h-[280px] pr-4">
                  <div className="space-y-3 pb-12">
                    {recentItems.map((item, index) => (
                      <div key={item.id}>
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <p className="text-body font-medium truncate">
                              {item.title}
                            </p>
                            <p className="text-body-small text-muted-foreground line-clamp-2">
                              {item.description}
                            </p>
                          </div>
                          <Badge variant={getStatusVariant(item.status)} className="shrink-0">
                            {item.status}
                          </Badge>
                        </div>
                        {index < recentItems.length - 1 && (
                          <Separator className="my-3" />
                        )}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                {/* Fade overlay indicating scrollable content */}
                <div 
                  className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-surface to-transparent"
                  aria-hidden="true"
                />
              </CardContent>
            </Card>
          </div>

          {/* Tabs section with form and components */}
          <Tabs defaultValue="components" className="space-y-4">
            <div className="flex items-center justify-between relative z-0">
              <TabsList>
                <TabsTrigger value="components">Components</TabsTrigger>
                <TabsTrigger value="profile">Profile Form</TabsTrigger>
                <TabsTrigger value="loading">Loading States</TabsTrigger>
              </TabsList>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    Open Dialog
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-title">Example Dialog</DialogTitle>
                    <DialogDescription className="text-body-small">
                      A modal composed entirely of shadcn/ui primitives.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-3 py-2 text-body text-muted-foreground">
                    <p>
                      Use dialogs to confirm actions, edit small bits of data,
                      or display focused information.
                    </p>
                    <div className="flex gap-2 pt-2">
                      <Badge variant="success">Success</Badge>
                      <Badge variant="warning">Warning</Badge>
                      <Badge variant="destructive">Destructive</Badge>
                      <Badge variant="outline">Outline</Badge>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <TabsContent value="components">
              <Card>
                <CardHeader>
                  <CardTitle className="text-title">Component Showcase</CardTitle>
                  <CardDescription className="text-body-small">
                    Interactive examples of all component variants and form controls
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Badge variants */}
                  <div className="space-y-2">
                    <h3 className="text-label text-muted-foreground">Badge Variants</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="success">Success</Badge>
                      <Badge variant="warning">Warning</Badge>
                      <Badge variant="destructive">Destructive</Badge>
                      <Badge variant="outline">Outline</Badge>
                    </div>
                  </div>

                  {/* Button variants */}
                  <div className="space-y-2">
                    <h3 className="text-label text-muted-foreground">Button Variants</h3>
                    <div className="flex flex-wrap gap-2">
                      <Button>Primary</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="destructive">Destructive</Button>
                      <Button variant="link">Link</Button>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Button size="sm">Small</Button>
                      <Button size="default">Default</Button>
                      <Button size="lg">Large</Button>
                      <Button size="icon">+</Button>
                    </div>
                  </div>

                  {/* Input controls */}
                  <div className="space-y-2">
                    <h3 className="text-label text-muted-foreground">Input Controls</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-1.5">
                        <Label htmlFor="demo-input" className="text-label">Text Input</Label>
                        <Input id="demo-input" placeholder="Enter text here..." />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="demo-select" className="text-label">Select</Label>
                        <Select defaultValue="option1">
                          <SelectTrigger id="demo-select">
                            <SelectValue placeholder="Choose an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="option1">Option One</SelectItem>
                            <SelectItem value="option2">Option Two</SelectItem>
                            <SelectItem value="option3">Option Three</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="demo-textarea" className="text-label">Textarea</Label>
                      <Textarea id="demo-textarea" placeholder="Enter longer text..." rows={2} />
                    </div>
                  </div>

                  {/* Checkboxes and Radio */}
                  <div className="space-y-2">
                    <h3 className="text-label text-muted-foreground">Checkboxes &amp; Radio Buttons</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-3 rounded-surface border p-4">
                        <p className="text-body-small text-muted-foreground">Checkboxes</p>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="demo-check1" defaultChecked />
                          <Label htmlFor="demo-check1" className="text-body font-normal">Checked by default</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="demo-check2" />
                          <Label htmlFor="demo-check2" className="text-body font-normal">Unchecked option</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="demo-check3" disabled />
                          <Label htmlFor="demo-check3" className="text-body font-normal text-muted-foreground">Disabled</Label>
                        </div>
                      </div>
                      <div className="space-y-3 rounded-surface border p-4">
                        <p className="text-body-small text-muted-foreground">Radio Group</p>
                        <RadioGroup defaultValue="radio1">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="radio1" id="demo-radio1" />
                            <Label htmlFor="demo-radio1" className="text-body font-normal">First option</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="radio2" id="demo-radio2" />
                            <Label htmlFor="demo-radio2" className="text-body font-normal">Second option</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="radio3" id="demo-radio3" />
                            <Label htmlFor="demo-radio3" className="text-body font-normal">Third option</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  </div>

                  {/* Typography scale */}
                  <div className="space-y-2">
                    <h3 className="text-label text-muted-foreground">Typography Scale</h3>
                    <div className="space-y-1 rounded-surface border p-4 bg-muted/30">
                      <p className="text-headline">Headline (1.75rem)</p>
                      <p className="text-title">Title (1.25rem)</p>
                      <p className="text-subtitle">Subtitle (1rem)</p>
                      <p className="text-body">Body (0.9375rem)</p>
                      <p className="text-body-small">Body Small (0.875rem)</p>
                      <p className="text-label">Label (0.875rem, medium weight)</p>
                      <p className="text-code">Code (0.875rem, monospace)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle className="text-title">Profile Settings</CardTitle>
                  <CardDescription className="text-body-small">
                    Update your profile information using Input, Select, and
                    RadioGroup components.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4" onSubmit={handleSave}>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-1.5">
                        <Label htmlFor="name" className="text-label">Name</Label>
                        <Input
                          id="name"
                          placeholder="Ada Lovelace"
                          autoComplete="name"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="email" className="text-label">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          autoComplete="email"
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="bio" className="text-label">Bio</Label>
                      <Textarea
                        id="bio"
                        placeholder="Tell us a bit about yourself…"
                      />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-1.5">
                        <Label className="text-label">Role</Label>
                        <Select defaultValue="developer">
                          <SelectTrigger>
                            <SelectValue placeholder="Select a role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="designer">Designer</SelectItem>
                            <SelectItem value="developer">Developer</SelectItem>
                            <SelectItem value="pm">Product Manager</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-1.5">
                        <Label className="text-label">Theme Preference</Label>
                        <RadioGroup
                          defaultValue="system"
                          className="flex flex-wrap gap-4 pt-1"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="light" id="theme-light" />
                            <Label htmlFor="theme-light" className="text-body font-normal">
                              Light
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="dark" id="theme-dark" />
                            <Label htmlFor="theme-dark" className="text-body font-normal">
                              Dark
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="system" id="theme-system" />
                            <Label htmlFor="theme-system" className="text-body font-normal">
                              System
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 py-2">
                      <Checkbox id="marketing" className="shrink-0" />
                      <Label htmlFor="marketing" className="text-body-small font-normal cursor-pointer">
                        Receive occasional product emails
                      </Label>
                    </div>

                    <CardFooter className="flex justify-between px-0 pt-4">
                      <Button type="button" variant="ghost" className="text-muted-foreground">
                        Cancel
                      </Button>
                      <Button type="submit" disabled={saving}>
                        {saving ? "Saving…" : "Save Changes"}
                      </Button>
                    </CardFooter>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="loading">
              <Card>
                <CardHeader>
                  <CardTitle className="text-title">Loading States</CardTitle>
                  <CardDescription className="text-body-small">
                    Skeleton placeholders for content that is loading.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <Skeleton className="h-6 w-1/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                  <div className="flex items-center gap-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-4 w-1/3" />
                      <Skeleton className="h-3 w-1/2" />
                    </div>
                  </div>
                  <div className="grid gap-4 grid-cols-3">
                    <Skeleton className="h-24 rounded-surface" />
                    <Skeleton className="h-24 rounded-surface" />
                    <Skeleton className="h-24 rounded-surface" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Alert section */}
          <Alert>
            <AlertTitle className="text-title">Design System Ready</AlertTitle>
            <AlertDescription className="text-body-small">
              All components are rendering correctly with the Workbench design
              tokens. The theme supports dark mode by default with full
              accessibility features.
            </AlertDescription>
          </Alert>
        </main>
      </div>
    </TooltipProvider>
  );
}

export default App;
