import { LegalButton } from "@/components/base-component/buttons/legal-button";
import CardOutline from "@/components/common/card/outline-card";
import { ArrowRight } from "lucide-react";

const BecomeOurPartner = () => {
  return (
    <CardOutline className="flex flex-col gap-3 p-4">
      <h2 className="text-white text-sm uppercase font-bold">
        Become Our Partner
      </h2>
      <div className="h-[1px] bg-white/10 w-full" />
      <p className="text-white/90 text-sm">
        Build relationships with sponsors, brands and organizers.
      </p>

      <LegalButton type="gold-fill" className="px-4 py-2 h-10 w-36">
        Subcrible
        <ArrowRight className="size-5" />
      </LegalButton>
    </CardOutline>
  );
};

export default BecomeOurPartner;
