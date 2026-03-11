import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[600px] px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-sttb-primary-blue mb-4">404</h1>
        <h2 className="text-3xl font-bold text-sttb-dark-blue mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button asChild size="lg" className="bg-sttb-primary-blue hover:bg-sttb-dark-blue cursor-pointer">
          <Link href="/">
            <Home className="mr-2 h-5 w-5" />
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
