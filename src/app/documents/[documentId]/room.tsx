"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";

export function Room({ children }: { children: ReactNode }) {
  const params = useParams();

  return (
    <LiveblocksProvider
      publicApiKey={
        "pk_dev_0WYR4j2gQN17MLOnz4HJGy9V7q3dsMxhHjgfJv10mouYjwRLm3maeAhP0fuLkP5F"
      }
    >
      <RoomProvider id={params.documentId as string}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
