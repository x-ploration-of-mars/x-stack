/** @jsxImportSource react */
import { Separator } from "~/integrations/react/ui/separator";
import { ProfileForm } from "~/integrations/react/profile/profile-form";
import { qwikify$ } from "@builder.io/qwik-react";
import { Toaster } from "~/integrations/react/ui/toaster";

function Profile() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-muted-foreground text-sm">
          This is how others will see you on the site.
        </p>
      </div>
      <Separator />
      <ProfileForm />
      <Toaster />
    </div>
  );
}

const QProfile = qwikify$(Profile, { eagerness: "load" });
export { QProfile };
