import { Button, ScrollArea, Separator } from "@apitool/ui";
import { useRef } from "react";
import { Link } from "react-router-dom";

import { Icon } from "@/client/components/icon";
import { UserAvatar } from "@/client/components/user-avatar";
import { UserOptions } from "@/client/components/user-options";

export const LeftSidebar = () => {
  const containterRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="flex bg-secondary-accent/30">
      <div className="hidden basis-12 flex-col items-center justify-between bg-secondary-accent/30 py-4 sm:flex">
        <Button asChild size="icon" variant="ghost" className="size-8 rounded-full">
          <Link to="/dashboard">
            <Icon size={14} />
          </Link>
        </Button>

        <div className="flex flex-col items-center justify-center gap-y-2">
          SectionIcon
        </div>

        <UserOptions>
          <Button size="icon" variant="ghost" className="rounded-full">
            <UserAvatar size={28} />
          </Button>
        </UserOptions>
      </div>

      <ScrollArea orientation="vertical" className="h-screen flex-1 pb-16 lg:pb-0">
        <div ref={containterRef} className="grid gap-y-6 p-6 @container/left">
          <Separator />
        </div>
      </ScrollArea>
    </div>
  );
};
