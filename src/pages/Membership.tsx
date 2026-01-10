import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, Star, User, MapPin, Mail, Phone, LogOut } from "lucide-react";
import { counties } from "@/data/counties";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const benefits = [
  "Official membership card and ID",
  "Access to exclusive events and workshops",
  "Leadership development opportunities",
  "County and national networking",
  "Voting rights in elections",
  "Official merchandise discounts",
  "Community project participation",
  "Mentorship program access",
];

const Membership = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Membership | Kabila La Vijana</title>
        <meta name="description" content="Join Kabila La Vijana and become part of Kenya's largest youth empowerment movement. Open to citizens aged 18-35." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero */}
          <section className="py-20 md:py-28 hero-gradient relative overflow-hidden">
            <div className="wave-decoration opacity-50" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  {user ? `Welcome, ${user.first_name}!` : "Become a Member"}
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl">
                  {user ? "Here is your membership profile." : "Join Kenya's largest youth movement today"}
                </p>
              </div>
            </div>
          </section>

          {/* Content */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              {user ? (
                /* Profile Layout */
                <div className="max-w-4xl mx-auto space-y-12">
                  <div className="card-gradient rounded-3xl p-8 md:p-12 border border-border shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Star className="h-64 w-64 text-primary" />
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
                      <div className="flex-shrink-0">
                        <div className="h-32 w-32 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-5xl font-bold uppercase shadow-xl ring-4 ring-background">
                          {user.first_name?.[0] || <User className="h-16 w-16" />}
                        </div>
                      </div>

                      <div className="flex-1 text-center md:text-left space-y-4">
                        <div>
                          <h2 className="text-3xl font-bold font-heading">{user.first_name} {user.last_name}</h2>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground mt-1">
                            <MapPin className="h-4 w-4" />
                            <span>{user.county}</span>
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4 mt-6">
                          <div className="bg-muted/50 p-4 rounded-xl border border-white/5 flex items-center gap-3">
                            <div className="p-2 bg-background rounded-lg text-primary">
                              <Mail className="h-5 w-5" />
                            </div>
                            <div className="text-left">
                              <p className="text-xs text-muted-foreground uppercase font-bold">Email</p>
                              <p className="text-sm font-medium truncate">{user.email}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-border flex justify-end">
                      <Button variant="destructive" onClick={() => {
                        localStorage.removeItem("user");
                        setUser(null);
                        toast.info("Logged out successfully");
                        setTimeout(() => window.location.reload(), 1000);
                      }}>
                        <LogOut className="mr-2 h-4 w-4" />
                        Log Out
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-center">Your Membership Benefits</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {benefits.map((benefit) => (
                        <div key={benefit} className="glass-card p-4 rounded-xl flex items-start gap-3">
                          <div className="p-1 rounded-full bg-primary/20 mt-0.5 text-primary">
                            <Check className="h-4 w-4" />
                          </div>
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* Registration Layout */
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Benefits Section */}
                  <div>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                      Membership Benefits
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8">
                      As a member, you'll have access to exclusive opportunities and be part of a nationwide network of youth leaders.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start gap-3">
                          <div className="p-1 rounded-full bg-primary/20 mt-0.5">
                            <Check className="h-4 w-4 text-primary" />
                          </div>
                          <span className="text-foreground text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-10 glass-card rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Star className="h-5 w-5 text-kabila-gold" />
                        <h3 className="font-heading font-bold text-foreground">Eligibility</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Open to all Kenyan citizens aged 18-35 years. Members must possess a valid national ID or passport.
                      </p>
                    </div>
                  </div>

                  {/* Registration Form */}
                  <div className="card-gradient rounded-2xl p-8 border border-border">
                    <div className="mb-6">
                      <h3 className="font-heading text-2xl font-bold text-foreground">Register Now</h3>
                      <p className="text-muted-foreground text-sm">Create your account to join the movement.</p>
                    </div>

                    <form className="space-y-6" onSubmit={async (e) => {
                      e.preventDefault();
                      setLoading(true);
                      const formData = new FormData(e.currentTarget);
                      const data = Object.fromEntries(formData.entries());

                      try {
                        const response = await fetch('/api/register', {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify(data),
                        });

                        const result = await response.json();

                        if (response.ok) {
                          localStorage.setItem("user", JSON.stringify(result.user));
                          toast.success("Registration successful! Welcome to the family.", {
                            description: "Please write down your password so you don't forget it!",
                            duration: 6000,
                          });
                          setTimeout(() => window.location.reload(), 2500);
                        } else {
                          toast.error(result.error || result.message || "Registration failed");
                        }
                      } catch (error: any) {
                        console.error('Error:', error);
                        toast.error("Connection error. Please try again.");
                      } finally {
                        setLoading(false);
                      }
                    }}>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" name="firstName" placeholder="Enter first name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" name="lastName" placeholder="Enter last name" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" name="email" type="email" placeholder="Enter email address" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" name="phone" type="tel" placeholder="+254 700 000 000" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="idNumber">National ID Number</Label>
                        <Input id="idNumber" name="idNumber" placeholder="Enter ID number" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="county">County</Label>
                        <select
                          id="county"
                          name="county"
                          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                          required
                        >
                          <option value="">Select your county</option>
                          {counties.map((c) => (
                            <option key={c} value={c} className="text-black">{c}</option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" name="password" type="password" placeholder="Create a secure password" minLength={6} required />
                      </div>
                      <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
                        {loading ? "Creating Account..." : "Submit Application"}
                      </Button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </section>
        </main>
        <Footer />
      </div >
    </>
  );
};

export default Membership;