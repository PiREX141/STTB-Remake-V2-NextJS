"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const ListItem = ({
  className,
  title,
  children,
  href,
  ...props
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

const MobileLink = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-base font-medium hover:text-sttb-primary-blue transition-colors"
    >
      {children}
    </Link>
  );
};

const MobileDropdown = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-base font-medium hover:text-sttb-primary-blue transition-colors"
      >
        {title}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform",
            isOpen && "transform rotate-180",
          )}
        />
      </button>
      {isOpen && (
        <div className="ml-4 mt-2 space-y-2 flex flex-col">{children}</div>
      )}
    </div>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-sttb-dark-blue">
      <div className="container mx-auto max-w-screen-xl flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center">
            <span className="text-xl font-bold text-white">STTB</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link
                  href="/"
                  className="text-white hover:text-sttb-secondary-blue transition-colors px-3 py-2"
                >
                  Home
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:text-sttb-secondary-blue hover:bg-transparent data-[state=open]:bg-transparent">
                  About STTB
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <ListItem href="/about#history" title="History">
                      Learn about our heritage and founding
                    </ListItem>
                    <ListItem
                      href="/about/vision-mission"
                      title="Vision & Mission"
                    >
                      Our purpose and core values
                    </ListItem>
                    <ListItem href="/about/leadership" title="Leadership">
                      Meet our board and administration
                    </ListItem>
                    <ListItem href="/about/accreditation" title="Accreditation">
                      Our academic recognition
                    </ListItem>
                    <ListItem
                      href="/about/facilities"
                      title="Campus Facilities"
                    >
                      Explore our campus resources
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:text-sttb-secondary-blue hover:bg-transparent data-[state=open]:bg-transparent">
                  Academics
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <ListItem
                      href="/academics/programs"
                      title="Programs & Degrees"
                    >
                      Undergraduate and graduate programs
                    </ListItem>
                    <ListItem href="/academics/faculty" title="Faculty">
                      Meet our teaching scholars
                    </ListItem>
                    <ListItem href="/academics/curriculum" title="Curriculum">
                      Course offerings and structure
                    </ListItem>
                    <ListItem
                      href="/academics/calendar"
                      title="Academic Calendar"
                    >
                      Important dates and schedules
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:text-sttb-secondary-blue hover:bg-transparent data-[state=open]:bg-transparent">
                  Admissions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <ListItem
                      href="/admissions/requirements"
                      title="Requirements"
                    >
                      Admission criteria and prerequisites
                    </ListItem>
                    <ListItem
                      href="/admissions/process"
                      title="Application Process"
                    >
                      Steps to apply
                    </ListItem>
                    <ListItem href="/admissions/tuition" title="Tuition & Fees">
                      Cost of attendance
                    </ListItem>
                    <ListItem
                      href="/admissions/scholarships"
                      title="Scholarships"
                    >
                      Financial aid opportunities
                    </ListItem>
                    <ListItem href="/admissions/apply" title="Apply Now">
                      Start your application
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:text-sttb-secondary-blue hover:bg-transparent data-[state=open]:bg-transparent">
                  Student Life
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <ListItem
                      href="/student-life/activities"
                      title="Campus Activities"
                    >
                      Events and programs
                    </ListItem>
                    <ListItem
                      href="/student-life/organizations"
                      title="Student Organizations"
                    >
                      Clubs and ministries
                    </ListItem>
                    <ListItem
                      href="/student-life/spiritual"
                      title="Spiritual Formation"
                    >
                      Chapel and spiritual life
                    </ListItem>
                    <ListItem
                      href="/student-life/facilities"
                      title="Facilities"
                    >
                      Housing and amenities
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link
                  href="/news-events"
                  className="text-white hover:text-sttb-secondary-blue transition-colors px-3 py-2"
                >
                  News & Events
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/resources"
                  className="text-white hover:text-sttb-secondary-blue transition-colors px-3 py-2"
                >
                  Resources
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/contact"
                  className="text-white hover:text-sttb-secondary-blue transition-colors px-3 py-2"
                >
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button
            asChild
            className="bg-sttb-accent-red hover:bg-sttb-accent-red/90 text-white"
          >
            <Link href="/admissions/apply">Apply Now</Link>
          </Button>
        </nav>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-sttb-primary-blue"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] overflow-y-auto"
          >
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <nav className="flex flex-col space-y-4 mt-8">
              <MobileLink href="/" onClick={() => setIsOpen(false)}>
                Home
              </MobileLink>
              <MobileDropdown title="About STTB">
                <MobileLink
                  href="/about/history"
                  onClick={() => setIsOpen(false)}
                >
                  History
                </MobileLink>
                <MobileLink
                  href="/about/vision-mission"
                  onClick={() => setIsOpen(false)}
                >
                  Vision & Mission
                </MobileLink>
                <MobileLink
                  href="/about/leadership"
                  onClick={() => setIsOpen(false)}
                >
                  Leadership
                </MobileLink>
                <MobileLink
                  href="/about/accreditation"
                  onClick={() => setIsOpen(false)}
                >
                  Accreditation
                </MobileLink>
                <MobileLink
                  href="/about/facilities"
                  onClick={() => setIsOpen(false)}
                >
                  Campus Facilities
                </MobileLink>
              </MobileDropdown>
              <MobileDropdown title="Academics">
                <MobileLink
                  href="/academics/programs"
                  onClick={() => setIsOpen(false)}
                >
                  Programs & Degrees
                </MobileLink>
                <MobileLink
                  href="/academics/faculty"
                  onClick={() => setIsOpen(false)}
                >
                  Faculty
                </MobileLink>
                <MobileLink
                  href="/academics/curriculum"
                  onClick={() => setIsOpen(false)}
                >
                  Curriculum
                </MobileLink>
                <MobileLink
                  href="/academics/calendar"
                  onClick={() => setIsOpen(false)}
                >
                  Academic Calendar
                </MobileLink>
              </MobileDropdown>
              <MobileDropdown title="Admissions">
                <MobileLink
                  href="/admissions/requirements"
                  onClick={() => setIsOpen(false)}
                >
                  Requirements
                </MobileLink>
                <MobileLink
                  href="/admissions/process"
                  onClick={() => setIsOpen(false)}
                >
                  Application Process
                </MobileLink>
                <MobileLink
                  href="/admissions/tuition"
                  onClick={() => setIsOpen(false)}
                >
                  Tuition & Fees
                </MobileLink>
                <MobileLink
                  href="/admissions/scholarships"
                  onClick={() => setIsOpen(false)}
                >
                  Scholarships
                </MobileLink>
                <MobileLink
                  href="/admissions/apply"
                  onClick={() => setIsOpen(false)}
                >
                  Apply Now
                </MobileLink>
              </MobileDropdown>
              <MobileDropdown title="Student Life">
                <MobileLink
                  href="/student-life/activities"
                  onClick={() => setIsOpen(false)}
                >
                  Campus Activities
                </MobileLink>
                <MobileLink
                  href="/student-life/organizations"
                  onClick={() => setIsOpen(false)}
                >
                  Student Organizations
                </MobileLink>
                <MobileLink
                  href="/student-life/spiritual"
                  onClick={() => setIsOpen(false)}
                >
                  Spiritual Formation
                </MobileLink>
                <MobileLink
                  href="/student-life/facilities"
                  onClick={() => setIsOpen(false)}
                >
                  Facilities
                </MobileLink>
              </MobileDropdown>
              <MobileLink href="/news-events" onClick={() => setIsOpen(false)}>
                News & Events
              </MobileLink>
              <MobileLink href="/resources" onClick={() => setIsOpen(false)}>
                Resources
              </MobileLink>
              <MobileLink href="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </MobileLink>
              <Button
                asChild
                className="bg-sttb-accent-red hover:bg-sttb-accent-red/90 text-white mt-4"
              >
                <Link href="/admissions/apply" onClick={() => setIsOpen(false)}>
                  Apply Now
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
