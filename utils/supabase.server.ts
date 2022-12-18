import { createServerClient } from "@supabase/auth-helpers-remix";

import type { Database } from "db_types";
// import type { Request, Response } from "@remix-run/node";

export default ({
  request,
  response,
}: {
  request: Request;
  response: Response;
}) =>
  createServerClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    { request, response }
  );
