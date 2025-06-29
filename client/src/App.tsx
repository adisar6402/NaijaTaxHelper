import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { TooltipProvider } from "@/components/ui/tooltip";
import { TranslationProvider } from "@/lib/translation-context";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import TermsPage from "@/pages/terms"; // ✅ NEW
import PrivacyPage from "@/pages/privacy"; // ✅ NEW

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/terms" component={TermsPage} /> {/* ✅ NEW */}
      <Route path="/privacy" component={PrivacyPage} /> {/* ✅ NEW */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <TranslationProvider>
          <Toaster position="top-right" reverseOrder={false} />
          <Router />
        </TranslationProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
