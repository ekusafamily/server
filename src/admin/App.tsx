
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import AdminLayout from "./components/AdminLayout";
import PlaceholderPage from "./components/PlaceholderPage";

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <Toaster />
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />

                    <Route element={<AdminLayout />}>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/shop" element={<PlaceholderPage title="Shop Management" />} />
                        <Route path="/blog" element={<PlaceholderPage title="Blog Management" />} />
                        <Route path="/programs" element={<PlaceholderPage title="Programs Management" />} />
                    </Route>
                </Routes>
            </Router>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;
