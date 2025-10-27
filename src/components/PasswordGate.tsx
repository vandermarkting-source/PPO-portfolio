import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const REQUIRED_PASSWORD = "PPOportfolio!";

interface PasswordGateProps {
  onSuccess: () => void;
}

const PasswordGate: React.FC<PasswordGateProps> = ({ onSuccess }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    // Simpele client-side check
    setTimeout(() => {
      if (password === REQUIRED_PASSWORD) {
        sessionStorage.setItem("ppo_auth", "true");
        onSuccess();
      } else {
        setError("Onjuist wachtwoord. Probeer het opnieuw.");
      }
      setSubmitting(false);
    }, 200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>Toegang vereist</CardTitle>
            <CardDescription>Voer het wachtwoord in om het portfolio te openen.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">Wachtwoord</label>
                <input
                  id="password"
                  type="password"
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm"
                  placeholder="Voer wachtwoord in"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoFocus
                />
              </div>
              {error && (
                <p className="text-sm text-red-600">{error}</p>
              )}
              <Button type="submit" className="w-full" disabled={submitting}>
                {submitting ? "Bezig..." : "Ontgrendel portfolio"}
              </Button>
              <p className="text-xs text-muted-foreground mt-2">
                Tip: gebruik exact hoofd-/kleine letters.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PasswordGate;