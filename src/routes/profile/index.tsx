import { Separator } from "@/registry/new-york/ui/separator";
import { ProfileForm } from "@/app/examples/forms/profile-form";

export default function SettingsProfilePage() {
  return (
    <div class="space-y-6">
      <div>
        <h3 class="text-lg font-medium">Profile</h3>
        <p class="text-muted-foreground text-sm">
          This is how others will see you on the site.
        </p>
      </div>
      <Separator />
      <ProfileForm />
    </div>
  );
}
