import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

type SearchInputProps = HTMLInputElement & {
  containerClassName?: string;
  iconRight?: boolean;
  onChange?: (value: any) => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
};

const SearchInput = () => {
  return (
    <div className="relative">
      <Input
        className="peer pe-12 ps-12 rounded-full bg-white/10 backdrop-blur border-none"
        placeholder="Search"
        type="text"
      />
      <Button
        size="icon"
        className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-sm text-muted-foreground peer-disabled:opacity-50 bg-transparent"
      >
        <Search className="size-5" />
      </Button>
    </div>
  );
};

export default SearchInput;
